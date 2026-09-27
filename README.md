# KEYLAB — концепт лендинга digital-агентства

Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · WebGL.

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:3000 и перенаправит на `/ru` или `/en` по языку браузера.

## Публикация

- Бесплатно на Surge: `npm run deploy:surge` → https://studio-agency.surge.sh
- На свой VPS через Docker: `./deploy.sh` (нужен вход на сервер по SSH-ключу).
- Локально в Docker: `docker network create studio-web && docker compose up -d --build` → http://localhost:3000

## Перед публикацией

- `NEXT_PUBLIC_SITE_URL` — боевой адрес сайта (для canonical, hreflang, sitemap и OG).
- `src/lib/constants.ts` → `BRAND_NAME` — название агентства.
- `src/i18n/dictionaries/{ru,en}/cases.ts` и `stats.ts` — реальные кейсы и цифры.
- `src/lib/lead.ts` → `submitLead` — отправка заявки (сейчас заглушка).

## Где что лежит

- `src/app/[locale]` — страницы, метаданные, провайдеры.
- `src/components/sections/<секция>` — секции лендинга.
- `src/components/ui` — общие компоненты, `layout` — шапка, меню, подвал.
- `src/i18n` — языки, словари по секциям.
- `src/app/globals.css` — дизайн-токены; `src/lib/brand.ts` — те же цвета для OG-картинки и иконок.
