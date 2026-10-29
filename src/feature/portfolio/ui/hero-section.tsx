"use client";

import { FileText } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BlogInfoItem } from "./blog-info-item";
import { CareerBreadcrumb } from "./career-breadcrumb";
import { HeroStats } from "./hero-stats";
import ProfileSummaryCard from "./profile-summary-card";
import TechStackCard from "./tech-stack-card";
import TenCommandments from "./ten-commandments";
import WorkingDayCard from "./working-day-card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

const LINKS = {
  github: "https://github.com/gyeongseokKang",
  linkedin:
    "https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/",
} as const;

function HeroHeader() {
  const t = useTranslations("hero.intro");
  const locale = useLocale();
  const resumeHref = `/resume/handykang-resume-${locale === "ko" ? "ko" : "en"}.pdf`;

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-5 px-1 py-8 text-center lg:py-14">
      <div className="space-y-2">
        <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">
          {t("title")}
        </h1>
        <p className="text-base font-medium text-foreground/80 lg:text-lg">
          {t("role")}
        </p>
        <p className="text-balance text-sm text-muted-foreground lg:text-base">
          {t("tagline")}
        </p>
      </div>

      <HeroStats />

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button asChild size="sm">
          <Link href={resumeHref} target="_blank" rel="noreferrer">
            <FileText />
            {t("cta_resume")}
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={LINKS.github} target="_blank" rel="noreferrer">
            <IoLogoGithub />
            {t("cta_github")}
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={LINKS.linkedin} target="_blank" rel="noreferrer">
            <IoLogoLinkedin />
            {t("cta_linkedin")}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className={cn(
        "mx-auto mb-20 flex w-full min-w-0 max-w-full flex-col items-center space-y-4",
      )}
    >
      <HeroHeader />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        className={cn(
          "grid w-full min-w-0 grid-cols-1 items-center gap-8",
          "lg:grid-cols-2",
          "2xl:grid-cols-3",
        )}
      >
        <motion.div variants={item} className="w-full min-w-0">
          <ProfileSummaryCard />
        </motion.div>
        <motion.div
          variants={item}
          className="flex w-full min-w-0 flex-col items-center gap-8"
        >
          <CareerBreadcrumb />
          <BlogInfoItem />
          <WorkingDayCard />
        </motion.div>
        <motion.div variants={item} className="w-full min-w-0">
          <TechStackCard />
        </motion.div>
        <motion.div variants={item} className="w-full min-w-0">
          <TenCommandments />
        </motion.div>
      </motion.div>
    </section>
  );
}
