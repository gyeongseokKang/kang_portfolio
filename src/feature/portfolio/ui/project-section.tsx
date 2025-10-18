"use client";

import { StackChip } from "@/components/stack-chip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Lens } from "@/components/ui/lens";
import { LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  stacks: string[]; // can be many, UI shows top 5
  detailUrl?: string;
  link?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectSection() {
  const t = useTranslations("Project");
  const projects: ProjectItem[] = [
    {
      id: "portfolio-site",
      title: t("portfolio-site.name"),
      description: t("portfolio-site.description"),
      thumbnail: "/images/project/포트폴리오_웹.gif",
      link: "https://github.com/gyeongseokKang/kang_portfolio",
      stacks: [
        "React",
        "Typescript",
        "Next-js",
        "shadcn",
        "Tailwind",
        "Github",
      ],
    },
    {
      id: "travel-erp",
      title: t("travel-erp.name"),
      description: t("travel-erp.description"),
      thumbnail: "/images/project/그린빈즈_31.gif",
      stacks: [
        "React",
        "Typescript",
        "Next-js",
        "NextUI",
        "Tailwind",
        "Prisma",
        "graphql",
        "postgresql",
        "Amplify",
        "Github",
      ],
    },
    {
      id: "golf-lesson-platform",
      title: t("golf-lesson-platform.name"),
      description: t("golf-lesson-platform.description"),
      thumbnail: "/images/project/라운드인_앱.gif",
      stacks: [
        "React",
        "Typescript",
        "Next-js",
        "Tailwind",
        "Amplify",
        "MUI",
        "flutter",
        "dart",
        "Github",
      ],
    },
    {
      id: "dr-folio",
      title: t("dr-folio.name"),
      description: t("dr-folio.description"),
      thumbnail: "/images/project/티맥스_웹.gif",
      stacks: [
        "React",
        "Typescript",
        "MUI",
        "Webpack",
        "Github",
        "Plotly",
        "Babel",
        "GithubPage",
      ],
      link: "https://dr-folio.github.io/",
    },
  ];

  return (
    <motion.section
      id="Project"
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="space-y-2" variants={itemVariants}>
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </motion.div>

      <div className="relative">
        <Carousel className="mx-auto w-full max-w-6xl">
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projects.map((p) => (
              <CarouselItem
                key={p.id}
                className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="py-0 flex justify-between items-center h-8">
                      <CardTitle>{p.title}</CardTitle>
                      {p.link && (
                        <Button asChild size={"icon-sm"} variant="ghost">
                          <Link
                            href={p?.link || ""}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <LinkIcon />
                          </Link>
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="overflow-hidden rounded-xl border bg-muted/20">
                        <Lens>
                          <Image
                            src={p.thumbnail || "/icons/amplify.svg"}
                            alt={p.title}
                            className="w-full object-contain aspect-video"
                            width={230}
                            height={180}
                          />
                        </Lens>
                      </div>
                      <div className="text-sm leading-relaxed min-h-20 text-secondary-foreground">
                        {p.description}
                      </div>
                      <StackChip stackList={p.stacks} max={6} />
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
}
