"use client";

import { BlogInfoItem } from "@/feature/portfolio/ui/blog-info-item";
import { CareerBreadcrumb } from "@/feature/portfolio/ui/career-breadcrumb";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="container mx-auto p-8 max-w-4xl gap-4 flex flex-col">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>
      <CareerBreadcrumb />
      <BlogInfoItem />
    </div>
  );
}
