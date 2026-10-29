"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionLayout from "./section-layout";

const yearListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const blockVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

type ExperienceItem = {
  quarter: string;
  title: string;
  details: string;
  extra?: string[];
};

type ExperienceYear = {
  year: number;
  items: ExperienceItem[];
};

function Item({ item }: { item: ExperienceItem }) {
  return (
    <Card className="h-full gap-0 overflow-hidden py-0">
      <CardBadge
        variant="title"
        className="static w-fit rounded-tl-xl rounded-tr-none rounded-br-md rounded-bl-none border-t-0 border-l-0 px-4 py-1.5 font-mono text-xs tracking-normal"
      >
        {item.quarter}
      </CardBadge>
      <CardHeader className="gap-2 px-5 pt-3 pb-0">
        <CardTitle className="text-base leading-snug text-pretty">
          {item.title}
        </CardTitle>
        <CardDescription className="text-pretty text-sm leading-relaxed text-foreground/75">
          {item.details}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5 pt-3 pb-5">
        {item.extra && item.extra.length > 0 && (
          <ul className="space-y-1.5 border-t border-border/50 pt-3 pl-4 text-[13px] leading-snug text-muted-foreground list-disc">
            {item.extra.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default function ExperienceSection() {
  const t = useTranslations("Experience");
  const prefersReducedMotion = useReducedMotion();

  const DATA: ExperienceYear[] = [
    {
      year: 2026,
      items: [
        {
          quarter: "3Q",
          title: t("2026.3Q.title"),
          details: t("2026.3Q.details"),
          extra: [t("2026.3Q.extra1")],
        },
        {
          quarter: "2Q",
          title: t("2026.2Q.title"),
          details: t("2026.2Q.details"),
          extra: [
            t("2026.2Q.extra1"),
            t("2026.2Q.extra2"),
            t("2026.2Q.extra3"),
          ],
        },
        {
          quarter: "1Q",
          title: t("2026.1Q.title"),
          details: t("2026.1Q.details"),
          extra: [
            t("2026.1Q.extra1"),
            t("2026.1Q.extra2"),
            t("2026.1Q.extra3"),
          ],
        },
      ],
    },
    {
      year: 2025,
      items: [
        {
          quarter: "4Q",
          title: t("2025.4Q.title"),
          details: t("2025.4Q.details"),
          extra: [
            t("2025.4Q.extra1"),
            t("2025.4Q.extra2"),
            t("2025.4Q.extra3"),
          ],
        },
        {
          quarter: "3Q",
          title: t("2025.3Q.title"),
          details: t("2025.3Q.details"),
          extra: [
            t("2025.3Q.extra1"),
            t("2025.3Q.extra2"),
            t("2025.3Q.extra3"),
          ],
        },
        {
          quarter: "2Q",
          title: t("2025.2Q.title"),
          details: t("2025.2Q.details"),
          extra: [
            t("2025.2Q.extra1"),
            t("2025.2Q.extra2"),
            t("2025.2Q.extra3"),
          ],
        },
        {
          quarter: "1Q",
          title: t("2025.1Q.title"),
          details: t("2025.1Q.details"),
          extra: [t("2025.1Q.extra1")],
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          quarter: "4Q",
          title: t("2024.4Q.title"),
          details: t("2024.4Q.details"),
          extra: [
            t("2024.4Q.extra1"),
            t("2024.4Q.extra2"),
            t("2024.4Q.extra3"),
          ],
        },
        {
          quarter: "3Q",
          title: t("2024.3Q.title"),
          details: t("2024.3Q.details"),
          extra: [
            t("2024.3Q.extra1"),
            t("2024.3Q.extra2"),
            t("2024.3Q.extra3"),
          ],
        },
        {
          quarter: "2Q",
          title: t("2024.2Q.title"),
          details: t("2024.2Q.details"),
          extra: [
            t("2024.2Q.extra1"),
            t("2024.2Q.extra2"),
            t("2024.2Q.extra3"),
          ],
        },
        {
          quarter: "1Q",
          title: t("2024.1Q.title"),
          details: t("2024.1Q.details"),
          extra: [
            t("2024.1Q.extra1"),
            t("2024.1Q.extra2"),
            t("2024.1Q.extra3"),
          ],
        },
      ],
    },
    {
      year: 2023,
      items: [
        {
          quarter: "4Q",
          title: t("2023.4Q.title"),
          details: t("2023.4Q.details"),
          extra: [t("2023.4Q.extra1"), t("2023.4Q.extra2")],
        },
        {
          quarter: "3Q",
          title: t("2023.3Q.title"),
          details: t("2023.3Q.details"),
          extra: [
            t("2023.3Q.extra1"),
            t("2023.3Q.extra2"),
            t("2023.3Q.extra3"),
          ],
        },
        {
          quarter: "2Q",
          title: t("2023.2Q.title"),
          details: t("2023.2Q.details"),
          extra: [t("2023.2Q.extra1"), t("2023.2Q.extra2")],
        },
        {
          quarter: "1Q",
          title: t("2023.1Q.title"),
          details: t("2023.1Q.details"),
          extra: [
            t("2023.1Q.extra1"),
            t("2023.1Q.extra2"),
            t("2023.1Q.extra3"),
          ],
        },
      ],
    },
    {
      year: 2022,
      items: [
        {
          quarter: "4Q",
          title: t("2022.4Q.title"),
          details: t("2022.4Q.details"),
          extra: [t("2022.4Q.extra1"), t("2022.4Q.extra2")],
        },
        {
          quarter: "3Q",
          title: t("2022.3Q.title"),
          details: t("2022.3Q.details"),
          extra: [t("2022.3Q.extra1"), t("2022.3Q.extra2")],
        },
        {
          quarter: "2Q",
          title: t("2022.2Q.title"),
          details: t("2022.2Q.details"),
          extra: [t("2022.2Q.extra1"), t("2022.2Q.extra2")],
        },
        {
          quarter: "1Q",
          title: t("2022.1Q.title"),
          details: t("2022.1Q.details"),
          extra: [t("2022.1Q.extra1"), t("2022.1Q.extra2")],
        },
      ],
    },
  ];

  return (
    <SectionLayout
      id="Experience"
      title="Experience"
      description={t("subtitle")}
    >
      <ol className="relative m-0 flex w-full list-none flex-col gap-12 p-0 pl-6 sm:pl-8 md:gap-14">
        {/* 타임라인 세로선 (Career와 같은 축) */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[5px] w-px bg-border sm:left-[7px]"
        />
        {DATA.map((year) => (
          <motion.li
            key={year.year}
            aria-labelledby={`experience-year-${year.year}`}
            className="relative space-y-4"
            variants={yearListVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span
              aria-hidden="true"
              className="absolute top-[0.6rem] -left-6 size-2.5 rounded-full border-2 border-background bg-primary ring-1 ring-border sm:-left-8"
            />
            <motion.h3
              id={`experience-year-${year.year}`}
              variants={blockVariants}
              className="m-0 text-2xl font-bold tracking-tight tabular-nums"
            >
              {year.year}
            </motion.h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {year.items.map((it) => (
                <motion.div
                  key={`${year.year}-${it.quarter}`}
                  variants={blockVariants}
                  className="min-w-0"
                >
                  <Item item={it} />
                </motion.div>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionLayout>
  );
}
