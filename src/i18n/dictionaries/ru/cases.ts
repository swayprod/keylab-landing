import type { Dictionary } from "../../types";

export const cases: Dictionary["cases"] = {
  title: "Результаты, а не макеты",
  subtitle: "Проекты, где мы закрыли задачу бизнеса целиком — от упаковки до заявок.",
  cta: "Хотите так же? Начнём с бесплатного разбора",
  items: [
    { key: "clinic", client: "Денталаб", domain: "dentalab.ru", services: "Сайт · Контекст", niche: "Стоматология", title: "Сайт и реклама для клиники", result: "+62%", resultLabel: "заявок за 3 месяца" },
    { key: "retail", client: "Форма", domain: "forma-mebel.ru", services: "Редизайн · SEO", niche: "Интернет-магазин", title: "Редизайн и SEO магазина мебели", result: "×2,1", resultLabel: "органического трафика" },
    { key: "service", client: "Гараж 77", domain: "garage77.ru", services: "Сайт · Реклама · CRM", niche: "Автосервис", title: "Запуск в интернете с нуля", result: "340", resultLabel: "заявок в первый месяц" },
    { key: "cafe", client: "Зерно", domain: "zerno.coffee", services: "Брендинг · Таргет", niche: "Кофейня", title: "Брендинг и таргет", result: "−45%", resultLabel: "стоимость заявки" },
  ],
};
