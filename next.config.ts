import { execSync } from "node:child_process";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// STATIC_EXPORT=1 → `out/` 정적 export (Cloudflare Workers static assets).
// 미설정 시 기존 Vercel 빌드 그대로.
const isStaticExport = process.env.STATIC_EXPORT === "1";

function getLastUpdated(): string {
  if (process.env.VERCEL_GIT_COMMIT_DATE) {
    return process.env.VERCEL_GIT_COMMIT_DATE;
  }

  try {
    return execSync("git log -1 --format=%cI", { encoding: "utf-8" }).trim();
  } catch {
    return new Date().toISOString();
  }
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: getLastUpdated(),
    NEXT_PUBLIC_STATIC_EXPORT: isStaticExport ? "1" : "",
    NEXT_PUBLIC_SITE_URL:
      process.env.SITE_URL ?? "https://portfolio.handykang.com",
  },
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
