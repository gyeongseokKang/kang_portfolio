import { execSync } from "node:child_process";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
