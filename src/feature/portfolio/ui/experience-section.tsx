"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import SectionLayout from "./section-layout";

const easeOut = [0.22, 1, 0.36, 1] as const;

const yearListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut },
  },
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
    <Card className="h-full gap-2">
      <CardHeader>
        <CardTitle className="flex flex-wrap items-center gap-2 text-base leading-snug">
          <Badge variant="secondary" className="shrink-0 font-mono text-xs">
            {item.quarter}
          </Badge>
          <span>{item.title}</span>
        </CardTitle>
        <CardDescription className="text-pretty">
          {item.details}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-2">
        {item.extra && item.extra.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
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
      fullWidth
    >
      <div className="flex w-full flex-col gap-12 md:gap-14">
        {DATA.map((year) => (
          <motion.div
            key={year.year}
            role="group"
            aria-labelledby={`experience-year-${year.year}`}
            className="space-y-5 md:space-y-6"
            variants={yearListVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div variants={blockVariants}>
              <h3
                id={`experience-year-${year.year}`}
                className="text-2xl font-bold tracking-tight tabular-nums"
              >
                {year.year}
              </h3>
            </motion.div>

            <motion.div
              variants={blockVariants}
              className={cn("relative w-full px-4 md:px-14")}
            >
              <Carousel
                opts={{ align: "start", slidesToScroll: 1 }}
                className="w-full"
                aria-label={`${year.year} experience quarters`}
              >
                <CarouselContent>
                  {year.items.map((it) => (
                    <CarouselItem
                      key={`${year.year}-${it.quarter}`}
                      className={
                        year.items.length === 1
                          ? "basis-full max-w-3xl"
                          : "basis-[min(100%,22rem)] sm:basis-[72%] md:basis-1/2 lg:basis-[46%] xl:basis-[40%]"
                      }
                    >
                      <Item item={it} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-10 sm:-left-12 md:-left-14" />
                <CarouselNext className="-right-10 sm:-right-12 md:-right-14" />
              </Carousel>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
