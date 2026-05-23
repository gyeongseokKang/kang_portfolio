"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const INTRO_SECTIONS = [
  { labelKey: "intro.label_1", descriptionKey: "intro.description_1" },
  { labelKey: "intro.label_2", descriptionKey: "intro.description_2" },
  { labelKey: "intro.label_3", descriptionKey: "intro.description_3" },
  { labelKey: "intro.label_4", descriptionKey: "intro.description_4" },
] as const;

function IntroSection({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <section
      className={cn(
        "relative rounded-xl border border-border/60 bg-gradient-to-br from-muted/60 via-muted/30 to-transparent px-4 pb-4 pt-5",
      )}
    >
      <span className="absolute -top-2.5 left-4 rounded-md border border-border/60 bg-card px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
        {label}
      </span>
      <p className="m-0 text-pretty text-sm leading-6 text-foreground/90">
        {description}
      </p>
    </section>
  );
}

export default function IntroCard() {
  const t = useTranslations("hero");

  return (
    <Card className="min-w-[80vw] sm:min-w-[28rem]">
      <CardContent className="space-y-5 pt-2">
        {INTRO_SECTIONS.map(({ labelKey, descriptionKey }) => (
          <IntroSection
            key={descriptionKey}
            label={t(labelKey)}
            description={t(descriptionKey)}
          />
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
