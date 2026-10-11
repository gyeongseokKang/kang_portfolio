"use client";

import { useTranslations } from "next-intl";

export default function InkSeed() {
  const t = useTranslations("hero");

  return (
    <p className="max-w-xl text-balance font-brush brush-ink text-3xl leading-tight text-foreground lg:text-4xl">
      {t("intro.line")}
    </p>
  );
}
