"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getExperiencedYear } from "@/lib/dayUtils";

const BLOG_URL = "https://all-dev-kang.tistory.com/";
const BOOK_URL = "https://product.kyobobook.co.kr/detail/S000218081064";

type Stat = {
  key: string;
  label: string;
  href: string;
  external?: boolean;
  card: ReactNode;
};

function StatCardShell({
  title,
  meta,
  children,
  cta,
}: {
  title: string;
  meta?: string;
  children?: ReactNode;
  cta: string;
}) {
  return (
    <div className="space-y-2 text-sm">
      <div>
        <p className="m-0 font-semibold leading-snug">{title}</p>
        {meta && (
          <p className="m-0 mt-0.5 text-xs text-muted-foreground">{meta}</p>
        )}
      </div>
      {children}
      <p className="m-0 inline-flex items-center gap-1 text-xs font-medium text-primary">
        {cta}
        <ArrowUpRight className="size-3" />
      </p>
    </div>
  );
}

export function HeroStats() {
  const t = useTranslations("hero");
  const { N년차, coupangPlayDays } = getExperiencedYear();

  const stats: Stat[] = [
    {
      key: "years",
      label: t("intro.stat_years", { years: N년차 }),
      href: "#Career",
      card: (
        <StatCardShell
          title={t("stats.years.title")}
          cta={t("stats.years.cta")}
        >
          <ul className="m-0 space-y-1 p-0 text-xs text-foreground/85">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="list-none">
                {t(`stats.years.items.${i}`)}
              </li>
            ))}
          </ul>
          <p className="m-0 text-xs text-muted-foreground tabular-nums">
            {t("stats.years.footnote", { days: coupangPlayDays })}
          </p>
        </StatCardShell>
      ),
    },
    {
      key: "book",
      label: t("intro.stat_book"),
      href: BOOK_URL,
      external: true,
      card: (
        <StatCardShell
          title={t("stats.book.title")}
          meta={t("stats.book.meta")}
          cta={t("stats.book.cta")}
        >
          <p className="m-0 text-xs leading-relaxed text-foreground/85">
            {t("stats.book.desc")}
          </p>
        </StatCardShell>
      ),
    },
    {
      key: "blog",
      label: t("intro.stat_blog"),
      href: BLOG_URL,
      external: true,
      card: (
        <StatCardShell
          title={t("stats.blog.title")}
          meta={t("stats.blog.meta")}
          cta={t("stats.blog.cta")}
        >
          <p className="m-0 text-xs leading-relaxed text-foreground/85">
            {t("stats.blog.desc")}
          </p>
        </StatCardShell>
      ),
    },
  ];

  return (
    <ul
      data-hero-stats
      className="m-0 flex flex-col items-center gap-y-1.5 p-0 text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2"
    >
      {stats.map((stat, i) => (
        <li key={stat.key} className="flex list-none items-center gap-2">
          {i > 0 && (
            <span
              aria-hidden="true"
              className="hidden text-muted-foreground/50 sm:inline"
            >
              ·
            </span>
          )}
          <HoverCard openDelay={80} closeDelay={120}>
            <HoverCardTrigger asChild>
              <Link
                href={stat.href}
                target={stat.external ? "_blank" : undefined}
                rel={stat.external ? "noreferrer" : undefined}
                className="font-medium text-foreground/80 underline decoration-dotted decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/60 tabular-nums"
              >
                {stat.label}
              </Link>
            </HoverCardTrigger>
            <HoverCardContent align="center" className="w-72">
              {stat.card}
            </HoverCardContent>
          </HoverCard>
        </li>
      ))}
    </ul>
  );
}
