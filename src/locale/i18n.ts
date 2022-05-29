import experienceLocale from "./section/experience";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import introLocale from "./section/intro";

const resources: any = {
  en: {
    translation: {},
  },
  ko: {
    translation: {},
  },
};

const unionLocalRes = () => {
  const targetRes = [introLocale, experienceLocale];
  targetRes.forEach((res) => {
    const namespace = res.namespace;
    for (let key in res.locale) {
      const newLocale = res.locale[key];
      resources[key] = {
        translation: {
          ...resources[key]?.translation,
          ...{
            [namespace]: { ...newLocale },
          },
        },
      };
    }
  });
};
unionLocalRes();

i18next.use(initReactI18next).init({
  resources,
  lng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
