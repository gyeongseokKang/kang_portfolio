import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const getLocaleResource = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext);
};

const localeResource = getLocaleResource(require.context("../locale/", true, /\.(json)$/));

const resources: any = {
  en: {
    translation: {},
  },
  ko: {
    translation: {},
  },
};

const mergeLocaleResource = () => {
  const targetRes: any = [...localeResource];
  targetRes.forEach((res: { namespace: string; locale: { [x: string]: any } }) => {
    const namespace = res.namespace;
    for (let key in res.locale) {
      const newLocale = res.locale[key];
      if (key in resources) {
        resources[key] = {
          translation: {
            ...resources[key]?.translation,
            ...{
              [namespace]: { ...newLocale },
            },
          },
        };
      }
    }
  });
};
mergeLocaleResource();

i18next.use(initReactI18next).init({
  resources,
  lng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
