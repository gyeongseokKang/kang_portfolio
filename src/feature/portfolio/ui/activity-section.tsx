"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clapperboard,
  FileText,
  GitBranch,
  Link as LinkIcon,
  Rss,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SectionLayout from "./section-layout";

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

export default function ActivitySection() {
  const t = useTranslations("Activity");
  const openSource = [
    {
      title: "wavesurfer.js",
      desc: t("opensource.wavesurfer"),
      href: "https://github.com/katspaugh/wavesurfer.js",
    },
    {
      title: "handy-snippets",
      desc: t("opensource.handy-snippets"),
      href: "https://github.com/gyeongseokKang/handy-snippets",
    },
  ];

  const publications = [
    {
      title: t("publication.graduation-paper.title"),
      desc: t("publication.graduation-paper.desc"),
      href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07565090",
    },
    {
      title: t("publication.book.title"),
      desc: t("publication.book.desc"),
      href: "https://product.kyobobook.co.kr/detail/S000218081064",
    },
  ];

  const lectures = [
    {
      title: t("lecture.title"),
      desc: t("lecture.desc"),
      href: "https://www.youtube.com/watch?v=-UqdwtSixzA",
    },
  ];

  const blogs = [
    {
      title: "Tistory",
      desc: t("blog.description"),
      href: "https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C",
    },
  ];

  return (
    <SectionLayout id="Activity" title="Activity" description={t("subtitle")}>
      <motion.div variants={itemVariants}>
        <Accordion
          className="w-full"
          defaultValue={["opensource", "publication"]}
          type="multiple"
        >
          <AccordionItem value="opensource">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t("group.opensource")}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc pl-4 space-y-2">
                {openSource.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="publication">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t("group.publication")}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc pl-4 space-y-2">
                {publications.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="lecture">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clapperboard className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t("group.lecture")}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc pl-4 space-y-2">
                {lectures.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="blog">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <Rss className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t("group.blog")}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 space-y-4">
              <ul className="list-disc pl-4 space-y-2">
                {blogs.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <iframe
                title={t("blog.iframeTitle")}
                src="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
                className="w-full min-h-[400px] rounded-md border"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </SectionLayout>
  );
}
