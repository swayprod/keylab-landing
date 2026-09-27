#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

NETWORK="studio-web"
REMOTE_DIR="/opt/studio"
CONTEXT="${CONTEXT:-studio-prod}"
HEALTH_TIMEOUT="${HEALTH_TIMEOUT:-180}"

step() { printf '\n\033[1;34m[%s]\033[0m %s\n' "$1" "$2"; }
ok() { printf '\033[1;32m  ✓ %s\033[0m\n' "$1"; }
fail() {
  printf '\n\033[1;31m[ошибка]\033[0m %s\n' "$1" >&2
  exit 1
}

step 1 "Проверка docker, docker compose v2, ssh и curl"
command -v docker >/dev/null || fail "docker не найден. Установи Docker Desktop или: brew install colima docker docker-compose"
docker compose version >/dev/null 2>&1 || fail "нужен docker compose v2"
command -v ssh >/dev/null || fail "ssh не найден"
command -v curl >/dev/null || fail "curl не найден"
ok "$(docker compose version)"

step 2 "Параметры деплоя"
if [ -z "${SSH_HOST:-}" ]; then
  echo "IP-адрес сервера:"
  read -r SSH_HOST
fi
if [ -z "${SSH_USER:-}" ]; then
  echo "SSH-пользователь (default: root):"
  read -r SSH_USER
fi
SSH_USER="${SSH_USER:-root}"
if [ -z "${DOMAIN:-}" ]; then
  echo "Домен (например mysite.ru):"
  read -r DOMAIN
fi
if [ -z "${ACME_EMAIL:-}" ]; then
  echo "Email для Let's Encrypt:"
  read -r ACME_EMAIL
fi
[ -n "$SSH_HOST" ] || fail "IP-адрес сервера не указан"
[ -n "$DOMAIN" ] || fail "домен не указан"
[[ "$ACME_EMAIL" == *@*.* ]] || fail "некорректный email: $ACME_EMAIL"
SSH_TARGET="$SSH_USER@$SSH_HOST"
ok "сервер $SSH_TARGET, домен $DOMAIN"

step 3 "Проверка SSH-доступа по ключу и Docker на сервере"
ssh -o BatchMode=yes -o ConnectTimeout=10 -o StrictHostKeyChecking=accept-new "$SSH_TARGET" true \
  || fail "нет входа по SSH-ключу. Выполни один раз: ssh-copy-id $SSH_TARGET"
ssh "$SSH_TARGET" "docker compose version" >/dev/null 2>&1 \
  || fail "на сервере нет Docker. Установи: ssh $SSH_TARGET 'curl -fsSL https://get.docker.com | sh'"
ok "SSH и Docker на сервере доступны"

step 4 "Docker context $CONTEXT"
if docker context inspect "$CONTEXT" >/dev/null 2>&1; then
  docker context update "$CONTEXT" --docker "host=ssh://$SSH_TARGET" >/dev/null
else
  docker context create "$CONTEXT" --docker "host=ssh://$SSH_TARGET" >/dev/null
fi
REMOTE=(docker --context "$CONTEXT")
"${REMOTE[@]}" info --format '{{.ServerVersion}}' >/dev/null || fail "не удалось подключиться к Docker через context $CONTEXT"
ok "$CONTEXT → ssh://$SSH_TARGET"

step 5 "Сеть $NETWORK и конфиг Traefik на сервере"
"${REMOTE[@]}" network inspect "$NETWORK" >/dev/null 2>&1 || "${REMOTE[@]}" network create "$NETWORK" >/dev/null
sed "s|admin@example.com|$ACME_EMAIL|" traefik.yml \
  | ssh "$SSH_TARGET" "mkdir -p $REMOTE_DIR && cat > $REMOTE_DIR/traefik.yml"
ok "сеть $NETWORK, $REMOTE_DIR/traefik.yml"

export DOMAIN
export TRAEFIK_CONFIG="$REMOTE_DIR/traefik.yml"

step 6 "Сборка образа на сервере"
"${REMOTE[@]}" compose build || fail "сборка не удалась, см. вывод выше"
ok "образ собран"

step 7 "Запуск docker compose up"
"${REMOTE[@]}" compose up -d --remove-orphans || fail "docker compose up не удался"
ok "контейнеры запущены"

step 8 "Ожидание healthcheck (до ${HEALTH_TIMEOUT}с)"
deadline=$((SECONDS + HEALTH_TIMEOUT))
until [ -z "$("${REMOTE[@]}" compose ps --format '{{.Health}}' | grep -v '^healthy$' || true)" ]; do
  if [ "$SECONDS" -ge "$deadline" ]; then
    "${REMOTE[@]}" compose ps
    "${REMOTE[@]}" compose logs --tail 50
    fail "сервисы не стали healthy за ${HEALTH_TIMEOUT}с"
  fi
  sleep 5
done
"${REMOTE[@]}" compose ps
ok "все сервисы healthy"

step 9 "Логи контейнеров (последние 50 строк)"
"${REMOTE[@]}" compose logs --tail 50

step 10 "Проверка доступности"
http_code=$(curl -s -o /dev/null -m 15 -w '%{http_code}' "http://$SSH_HOST/" || true)
https_code=$(curl -sk -o /dev/null -m 15 -w '%{http_code}' --resolve "$DOMAIN:443:$SSH_HOST" "https://$DOMAIN/ru" || true)
echo "  http://$SSH_HOST → $http_code (ожидается 301/308: редирект на HTTPS)"
echo "  https://$DOMAIN/ru через $SSH_HOST → $https_code (ожидается 200)"
if [[ ! "$http_code" =~ ^(200|301|308)$ || "$https_code" != "200" ]]; then
  "${REMOTE[@]}" compose logs --tail 50
  fail "сайт не отвечает. Проверь, что на сервере открыты порты 80 и 443: ssh $SSH_TARGET 'ufw allow 80,443/tcp'"
fi
ok "сайт отвечает"

cat <<EOF

Сайт задеплоен и отвечает на сервере $SSH_HOST.

Чтобы привязать домен $DOMAIN:
1. Зайди в панель управления DNS твоего домена
2. Создай A-запись:
   Имя: @
   Тип: A
   Значение: $SSH_HOST
   TTL: 300
3. Если нужен www — создай ещё одну A-запись:
   Имя: www
   Тип: A
   Значение: $SSH_HOST
4. DNS обновится в течение 5–30 минут
5. После этого сайт будет доступен по адресу: https://$DOMAIN

HTTPS настраивать отдельно не нужно: Traefik сам получит сертификат Let's Encrypt
при первом запросе после обновления DNS и будет продлевать его автоматически.
Проверить выпуск: docker --context $CONTEXT compose logs traefik | grep -i acme
EOF
