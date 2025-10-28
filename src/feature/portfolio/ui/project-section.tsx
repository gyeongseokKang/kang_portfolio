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
import Autoplay from "embla-carousel-autoplay";
import { LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import SectionLayout from "./section-layout";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  stacks: string[]; // can be many, UI shows top 5
  detailUrl?: string;
  link?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

const AUTOPLAY_OPTIONS = {
  delay: 5000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
} as const;

export default function ProjectSection() {
  const t = useTranslations("Project");
  const plugin = useRef(Autoplay(AUTOPLAY_OPTIONS));

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
    <SectionLayout id="Project" title="Project" description={t("subtitle")}>
      <div>
        <Carousel className="mx-auto w-full " plugins={[plugin.current]}>
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem
                key={p.id}
                className="sm:basis-1/2 lg:basis-1/3 max-w-svw"
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
                    <CardContent className="space-y-2 w-full ">
                      <div className="overflow-hidden rounded-xl border bg-muted/20">
                        <Lens>
                          <img
                            src={p.thumbnail || "/icons/amplify.svg"}
                            alt={p.title}
                            className="w-full object-contain aspect-video"
                          />
                        </Lens>
                      </div>
                      <div className="h-20 relative">
                        <span className="w-full text-sm text-wrap text-secondary-foreground absolute top-0">
                          {p.description}
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <StackChip stackList={p.stacks} max={6} />
                      </div>
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
    </SectionLayout>
  );
}
