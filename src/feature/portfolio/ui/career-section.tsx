"use client";
import { LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import CompanyDetailInfoDialog from "./company-detail-info-dialog";
import SectionLayout from "./section-layout";

type CareerItem = {
  name: string;
  role?: string | string[];
  period?: string;
  description: string;
  links?: { title: string; href: string }[];
  thumbnail?: string;
  id: string;
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

export default function CareerSection() {
  const t = useTranslations("Career");

  const careers: CareerItem[] = [
    {
      id: "coupang-play",
      name: t("coupang-play.name"),
      role: "Sr.Frontend Engineer",
      period: "2025.10 - current",
      description: t("coupang-play.description"),
      links: [{ title: "Homepage", href: "https://www.coupangplay.com/" }],
      thumbnail: "/images/company/coupang-play.jpg",
    },
    {
      id: "gaudiolab",
      name: t("gaudiolab.name"),
      role: "Lead Frontend Engineer",
      period: "2022.07 - 2025.09",
      description: t("gaudiolab.description"),
      links: [
        { title: "Homepage", href: "https://www.gaudiolab.com/" },
        {
          title: "Youtube",
          href: "https://www.youtube.com/results?search_query=%EA%B0%80%EC%9A%B0%EB%94%94%EC%98%A4%EB%9E%A9",
        },
      ],
      thumbnail: "/images/company/gaudiolab.png",
    },
    {
      id: "tmax",
      name: t("tmax.name"),
      role: "Research Engineer",
      period: "2020.02 - 2022.06",
      description: t("tmax.description"),
      thumbnail: "/images/company/tmax.png",
      links: [{ title: "Homepage", href: "https://www.tmaxsoft.com/" }],
    },
    {
      id: "carchap",
      name: t("carchap.name"),
      role: "CTO & Co-founder",
      period: "2018.12 - 2020.05",
      description: t("carchap.description"),
      links: [
        { title: "Homepage", href: "https://www.carchapapp.com/" },
        {
          title: "Youtube",
          href: "https://www.youtube.com/results?search_query=%EC%B9%B4%EC%B0%B9",
        },
      ],
      thumbnail: "/images/company/carchap.png",
    },
  ];
  return (
    <SectionLayout id="Career" title="Career" description={t("subtitle")}>
      <ol className="relative m-0 list-none space-y-10 p-0 pl-6 sm:pl-8">
        {/* 타임라인 세로선 */}
        <span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-[5px] w-px bg-border sm:left-[7px]"
        />
        {careers.map((item) => (
          <motion.li
            key={item.name}
            className="relative"
            variants={itemVariants}
          >
            <span
              aria-hidden="true"
              className="absolute top-[0.45rem] -left-6 size-2.5 rounded-full border-2 border-background bg-primary ring-1 ring-border sm:-left-8"
            />
            <div className="grid grid-cols-[72px_1fr] gap-4 sm:grid-cols-[96px_1fr] sm:gap-6">
              <div className="flex size-18 items-center justify-center overflow-hidden rounded-lg border bg-white sm:size-24">
                {item.thumbnail ? (
                  <Image
                    unoptimized
                    priority
                    src={item.thumbnail}
                    alt={item.name}
                    className="h-full w-full bg-white object-contain p-2"
                    width={96}
                    height={96}
                  />
                ) : (
                  <div className="text-sm text-muted-foreground">No Image</div>
                )}
              </div>

              <div className="min-w-0 space-y-1.5">
                {item.period && (
                  <p className="m-0 text-sm text-muted-foreground tabular-nums">
                    {item.period}
                  </p>
                )}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="m-0 text-xl font-semibold leading-tight">
                    {item.name}
                  </h3>
                  {item.role && (
                    <span className="text-sm text-muted-foreground">
                      {Array.isArray(item.role)
                        ? item.role.join(" · ")
                        : item.role}
                    </span>
                  )}
                </div>
                <p className="m-0 text-sm leading-relaxed sm:text-base">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.links?.map((l) => (
                    <Button key={l.href} asChild variant="outline" size="sm">
                      <Link href={l.href} target="_blank" rel="noreferrer">
                        {l.title} <LinkIcon />
                      </Link>
                    </Button>
                  ))}
                  <CompanyDetailInfoDialog
                    company={item.id}
                    companyLabel={item.name}
                  />
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionLayout>
  );
}
