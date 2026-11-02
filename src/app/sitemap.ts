import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/constant";

export const dynamic = "force-static";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.handykang.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified =
    process.env.NEXT_PUBLIC_LAST_UPDATED ?? new Date().toISOString();
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE}/${l}/`]),
  );
  return LOCALES.map((locale) => ({
    url: `${SITE}/${locale}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "ko" ? 1 : 0.8,
    alternates: { languages },
  }));
}
