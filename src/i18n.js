import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./locales/it/translation.json";
import en from "./locales/en/translation.json";

export const SITE_URL = "https://salvatoreemilio.it";
export const languages = ["it", "en"];
export const languagePath = { it: "/", en: "/en/" };

export function languageFromPath(pathname) {
  return pathname.startsWith("/en") ? "en" : "it";
}

// Una istanza per lingua: il prerender genera entrambe le pagine nello stesso processo
export function createI18n(lng) {
  const i18n = createInstance();
  i18n.use(initReactI18next).init({
    lng,
    fallbackLng: "it",
    supportedLngs: languages,
    resources: { it: { translation: it }, en: { translation: en } },
    interpolation: { escapeValue: false },
    initAsync: false,
  });
  return i18n;
}
