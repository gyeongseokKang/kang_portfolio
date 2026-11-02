// 빌드 시 version.json(sha, builtAt) 생성 — 배포 상태 확인용.
import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const dir = process.argv[2] ?? "public";
let sha =
  process.env.WORKERS_CI_COMMIT_SHA ||
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  "";
if (!sha) {
  try {
    sha = execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
  } catch {
    sha = "unknown";
  }
}
mkdirSync(dir, { recursive: true });
writeFileSync(
  `${dir}/version.json`,
  `${JSON.stringify({ sha, builtAt: new Date().toISOString() })}\n`,
);
console.log(`version.json → ${dir} (${sha.slice(0, 7)})`);
