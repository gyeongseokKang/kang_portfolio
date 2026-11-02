import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.handykang.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
