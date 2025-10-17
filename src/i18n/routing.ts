import { defineRouting } from "next-intl/routing";
import { LOCALES } from "./constant";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches

  localePrefix: "as-needed",

  defaultLocale: "ko",
  localeDetection: false,
});