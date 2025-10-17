import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ko", "en"],

  // Used when no locale matches

  localePrefix: "as-needed",

  defaultLocale: "ko",
  localeDetection: false,
});