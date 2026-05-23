"use client";

import { useTranslations } from "next-intl";
import { TextAnimate } from "@/components/ui/text-animate";
import { getExperiencedYear } from "@/lib/dayUtils";
import { LabeledSection } from "./labeled-section";

export default function WorkingDayCard() {
  const t = useTranslations("hero");
  const { N년차, coupangPlayDays } = getExperiencedYear();

  return (
    <LabeledSection label={t("experience.label")} className="w-full max-w-xs">
      <div className="text-center">
        <p className="m-0 text-base font-semibold">
          {t("experience.title", { years: N년차 })}
        </p>
        <p className="m-0 mt-1 text-sm text-muted-foreground">
          <TextAnimate animation="slideUp" by="word" repeat duration={3}>
            {t("experience.workdays", { days: coupangPlayDays })}
          </TextAnimate>
        </p>
      </div>
    </LabeledSection>
  );
}
