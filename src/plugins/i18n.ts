import { createI18n } from "vue-i18n";
import ru from "@/language/ru.json";
import en from "@/language/en.json";

const locale = localStorage.getItem("locale") || "en";

const i18n = createI18n<any>({
  locale,
  legacy: false,
  fallbackLocale: "en",
  silentFallbackWarn: true,
  globalInjection: true,
  messages: {
    ru,
    en,
  },
});

export default i18n;
