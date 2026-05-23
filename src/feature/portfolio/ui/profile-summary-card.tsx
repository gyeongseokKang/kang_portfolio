"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LabeledSection } from "./labeled-section";

const INTRO_SECTIONS = [
  { labelKey: "intro.label_1", descriptionKey: "intro.description_1" },
  { labelKey: "intro.label_2", descriptionKey: "intro.description_2" },
  { labelKey: "intro.label_3", descriptionKey: "intro.description_3" },
  { labelKey: "intro.label_4", descriptionKey: "intro.description_4" },
] as const;

export default function ProfileSummaryCard() {
  const t = useTranslations("hero");

  return (
    <Card
      badgeTitle={t("intro.card_label")}
      className="min-w-[80vw] sm:min-w-[28rem]"
    >
      <CardContent className="space-y-5 pt-2">
        {INTRO_SECTIONS.map(({ labelKey, descriptionKey }) => (
          <LabeledSection key={descriptionKey} label={t(labelKey)}>
            <p className="m-0 text-pretty text-sm leading-6 text-foreground/90">
              {t(descriptionKey)}
            </p>
          </LabeledSection>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end pt-1">
        <Button
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("Career")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
}
