"use client";
import { LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CompanyDetailInfoDialog from "./company-detail-info-dialog";
import SectionLayout from "./section-layout";

type ExperienceItem = {
  name: string;
  role?: string | string[];
  period?: string;
  description: string;
  links?: { title: string; href: string }[];
  thumbnail?: string;
  id: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

export default function ExperienceSection() {
  const t = useTranslations("Experience");

  const experiences: ExperienceItem[] = [
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
    <SectionLayout
      id="Experience"
      title="Experience"
      description={t("subtitle")}
    >
      <div className="space-y-6">
        {experiences.map((item, idx) => (
          <motion.div
            key={item.name}
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[220px_1fr] items-start">
              <div className="rounded-xl border bg-card text-card-foreground overflow-hidden h-[140px] sm:h-[160px] flex items-center justify-center">
                {item.thumbnail ? (
                  <Image
                    unoptimized
                    priority
                    src={item.thumbnail}
                    alt={item.name}
                    className="h-full w-full object-contain bg-white"
                    width={220}
                    height={140}
                  />
                ) : (
                  <div className="text-sm text-muted-foreground">No Image</div>
                )}
              </div>

              <div className="space-y-1 flex flex-col justify-between h-full py-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl font-semibold leading-none">
                    {item.name}
                  </h3>
                  {item.period && (
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  )}
                </div>
                {item.role && (
                  <div className="text-sm text-muted-foreground">
                    {Array.isArray(item.role)
                      ? item.role.join(" · ")
                      : item.role}
                  </div>
                )}
                <p className="text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
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
            {idx < experiences.length - 1 && <Separator className="mt-6" />}
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
