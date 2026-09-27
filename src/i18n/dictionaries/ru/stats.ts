import type { Dictionary } from "../../types";

export const stats: Dictionary["stats"] = {
  title: "Работаем на результат",
  ctaText: "Посчитаем, сколько заявок вы недополучаете прямо сейчас.",
  cta: "Получить бесплатный разбор",
  items: [
    { key: "projects", value: 120, decimals: 0, prefix: "", suffix: "+", label: "проектов запущено" },
    { key: "growth", value: 2.4, decimals: 1, prefix: "×", suffix: "", label: "средний рост заявок" },
    { key: "years", value: 7, decimals: 0, prefix: "", suffix: "", label: "лет на рынке" },
    { key: "launch", value: 14, decimals: 0, prefix: "", suffix: "", label: "дней — средний запуск сайта" },
  ],
};
