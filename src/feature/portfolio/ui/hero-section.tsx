"use client";

import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { AuroraText } from "@/components/ui/aurora-text";
import { cn } from "@/lib/utils";
import { BlogInfoItem } from "./blog-info-item";
import { CareerBreadcrumb } from "./career-breadcrumb";
import ProfileSummaryCard from "./profile-summary-card";
import TechStackCard from "./tech-stack-card";
import TenCommandments from "./ten-commandments";
import WorkingDayCard from "./working-day-card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section
      className={cn(
        "mx-auto mb-20 flex w-full min-w-0 max-w-full flex-col items-center space-y-4",
      )}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-full overflow-hidden px-1 py-4 text-center text-2xl font-semibold lg:py-16 lg:text-5xl"
      >
        <motion.div variants={item}>
          <AuroraText>{t("intro.title")}</AuroraText>
        </motion.div>
      </motion.div>

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
