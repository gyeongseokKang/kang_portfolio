"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { LabeledSection } from "./labeled-section";

export default function TenCommandments() {
  const t = useTranslations("hero");
  const items = [
    t("philosophy.commandment1"),
    t("philosophy.commandment2"),
    t("philosophy.commandment3"),
  ];

  return (
    <LabeledSection label={t("philosophy.label")} className="w-full max-w-sm">
      <ol className="m-0 space-y-0 divide-y divide-border p-0">
        {items.map((text, i) => {
          const key = `${i}-${text}`;
          return (
            <li key={key} className="group">
              <div className="flex items-center gap-1 py-1">
                <Badge variant="secondary">{i + 1}</Badge>
                <p className="m-0 text-xs leading-relaxed">{text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </LabeledSection>
  );
}
