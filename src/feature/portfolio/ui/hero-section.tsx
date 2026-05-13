"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AuroraText } from "@/components/ui/aurora-text";
import { CometCard } from "@/components/ui/comet-card";
import { cn } from "@/lib/utils";
import { BlogInfoItem } from "./blog-info-item";
import BookCard from "./book-card";
import { CareerBreadcrumb } from "./career-breadcrumb";
import IntroCard from "./intro-card";
import { StackList } from "./stack-list";
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
      className={cn("space-y-4 mx-auto flex flex-col items-center mb-20")}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="text-2xl lg:text-5xl font-semibold text-center py-4 lg:py-16"
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
          "2xl:grid-cols-3",
          "lg:grid-cols-2",
          "grid grid-cols-1 items-center gap-8",
        )}
      >
        <motion.div variants={item}>
          <IntroCard />
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-col items-center gap-8"
        >
          <CareerBreadcrumb />
          <BlogInfoItem />
          <WorkingDayCard />
        </motion.div>
        <motion.div variants={item}>
          <StackList />
        </motion.div>
        <motion.div variants={item}>
          <BookCard />
        </motion.div>
        <motion.div variants={item}>
          <TenCommandments />
        </motion.div>
        <motion.div variants={item} className="mx-auto">
          <CometCard rotateDepth={12} translateDepth={14}>
            <Image
              className="rounded-xl"
              src="/images/Handy2.jpg"
              alt="Handy"
              width={240}
              height={300}
            />
          </CometCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
