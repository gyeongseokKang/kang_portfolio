"use client";

import { ExternalLink, Github, Play } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { StackChip } from "@/components/stack-chip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SectionLayout from "./section-layout";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  /** 기간 · 역할 · 상태 같은 한 줄 요약 (선택) */
  meta?: string;
  /** 정지 썸네일 (가볍게, 항상 보임) */
  poster: string;
  /** 화면 녹화 GIF (클릭했을 때만 로드) */
  recording?: string;
  stacks: string[]; // can be many, UI shows top 8
  link?: string;
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

function ProjectLink({ href, labels }: { href: string; labels: Labels }) {
  const isGithub = href.includes("github.com");
  return (
    <Button asChild variant="outline" size="sm">
      <Link href={href} target="_blank" rel="noreferrer">
        {isGithub ? <Github /> : <ExternalLink />}
        {isGithub ? labels.viewGithub : labels.viewSite}
      </Link>
    </Button>
  );
}

type Labels = {
  viewSite: string;
  viewGithub: string;
  viewDetail: string;
  detailHint: string;
};

function ProjectCard({ p, labels }: { p: ProjectItem; labels: Labels }) {
  return (
    <Card className="h-full min-w-0 gap-3">
      <CardHeader className="px-5 py-0">
        <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex min-w-0 flex-1 flex-col gap-3 px-5">
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              title={labels.detailHint}
              className="group relative block w-full overflow-hidden rounded-md border bg-white text-left transition-colors hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Image
                unoptimized
                src={p.poster}
                alt={p.title}
                width={640}
                height={360}
                className="aspect-video w-full object-cover object-top"
              />
              {p.recording && (
                <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-md bg-foreground/80 px-2 py-1 text-[11px] text-background">
                  <Play className="size-3" />
                  {labels.viewDetail}
                </span>
              )}
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{p.title}</DialogTitle>
              <DialogDescription className="text-foreground/80">
                {p.meta ? `${p.meta} — ${p.description}` : p.description}
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-hidden rounded-md border bg-white">
              <Image
                unoptimized
                src={p.recording ?? p.poster}
                alt={p.title}
                width={1280}
                height={720}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <StackChip stackList={p.stacks} max={10} className="min-w-0" />
              {p.link && <ProjectLink href={p.link} labels={labels} />}
            </div>
          </DialogContent>
        </Dialog>

        {p.meta && (
          <p className="m-0 text-xs font-medium text-muted-foreground">
            {p.meta}
          </p>
        )}
        <p className="m-0 text-sm leading-relaxed text-foreground/85">
          {p.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
          <StackChip stackList={p.stacks} max={8} className="min-w-0" />
          {p.link && <ProjectLink href={p.link} labels={labels} />}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectSection() {
  const t = useTranslations("Project");
  const labels: Labels = {
    viewSite: t("viewSite"),
    viewGithub: t("viewGithub"),
    viewDetail: t("viewDetail"),
    detailHint: t("detailHint"),
  };

  const projects: ProjectItem[] = [
    {
      id: "handy-writer",
      title: t("handy-writer.name"),
      description: t("handy-writer.description"),
      poster: "/images/project/handy-writer.webp",
      link: "https://github.com/gyeongseokKang/handy-writer",
      stacks: [
        "Electron",
        "React",
        "Typescript",
        "Tailwind",
        "shadcn",
        "Github",
      ],
    },
    {
      id: "handy-tracer",
      title: t("handy-tracer.name"),
      description: t("handy-tracer.description"),
      meta: t("handy-tracer.meta"),
      poster: "/images/project/handy-tracer.webp",
      stacks: [
        "ReactNative",
        "Expo",
        "Typescript",
        "cplusplus",
        "OpenCV",
        "Supabase",
      ],
    },
    {
      id: "portfolio-site",
      title: t("portfolio-site.name"),
      description: t("portfolio-site.description"),
      poster: "/images/project/portfolio-site.webp",
      recording: "/images/project/포트폴리오_웹.gif",
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
      id: "chulgang25",
      title: t("chulgang25.name"),
      description: t("chulgang25.description"),
      poster: "/images/project/chulgang25.webp",
      recording: "/images/project/출강이오.gif",
      link: "https://www.chulgang25.com/",
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
      poster: "/images/project/travel-erp.webp",
      recording: "/images/project/그린빈즈_31.gif",
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
      poster: "/images/project/golf-lesson-platform.webp",
      recording: "/images/project/라운드인_앱.gif",
      stacks: [
        "React",
        "Typescript",
        "Next-js",
        "Tailwind",
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
      poster: "/images/project/dr-folio.webp",
      recording: "/images/project/티맥스_웹.gif",
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <motion.div key={p.id} variants={itemVariants} className="min-w-0">
            <ProjectCard p={p} labels={labels} />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
