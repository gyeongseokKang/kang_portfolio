# Cloudflare 배포 (구조만 — 아직 배포 안 함)

## 방식: 정적 export + Workers static assets
- 사용 현황: API 라우트 없음, SSR/ISR 없음, `next-intl` 미들웨어(로케일 라우팅)만 있음, `next/image`는 로컬 이미지뿐.
- → `output: "export"`로 충분. OpenNext는 런타임 Worker·번들 크기·호환성 부담만 늘어나서 제외.
- 트레이드오프: export 모드에선 미들웨어가 꺼져 `/` → `/ko/` 는 `public/_redirects`(302)로 처리, 이미지 최적화 끔(`unoptimized`), 정본 URL은 `/ko/`, `/en/`.
- Vercel 호환 유지: `pnpm build`(STATIC_EXPORT 미설정)는 기존과 동일 (미들웨어·이미지 최적화 그대로).

## 빌드 설정
| 항목 | 값 |
|---|---|
| Build command | `pnpm build:cf` |
| Deploy command | `npx wrangler deploy` (Workers Builds 기본값) |
| 출력 폴더 | `out/` (`wrangler.jsonc` → `assets.directory`) |
| 환경변수 | `SITE_URL=https://portfolio.handykang.com` (기본값 동일, 생략 가능) |

## 도메인
- 정본: `portfolio.handykang.com` (`wrangler.jsonc` routes, canonical 태그)
- `www.handykang.com`: 당분간 포폴을 서빙 — **대시보드에서 별도 Custom Domain으로만** 추가 (설정 파일엔 없음 → 나중에 다른 곳으로 옮겨도 포폴 설정 무관). canonical은 portfolio 쪽을 가리킴.
- `handykang.com`(apex) → `https://www.handykang.com` 301: 대시보드 Redirect Rule.

## 배포 상태
빌드 시 `/version.json` = `{ sha, builtAt }` (WORKERS_CI_COMMIT_SHA → CF_PAGES_COMMIT_SHA → VERCEL_GIT_COMMIT_SHA → git).
