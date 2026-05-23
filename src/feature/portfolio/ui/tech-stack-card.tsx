"use client";

import { useTranslations } from "next-intl";
import { StackChip } from "@/components/stack-chip";
import { Card, CardContent } from "@/components/ui/card";
import { LabeledSection } from "./labeled-section";

type StackGroup = {
  title: string;
  chips: string[];
  summary: string;
};

const groups: StackGroup[] = [
  {
    title: "Frontend",
    chips: ["typescript", "javascript", "react", "next", "flutter", "dart"],
    summary: "TS · JS · React · Next · Flutter · Dart",
  },
  {
    title: "Backend / Infra",
    chips: ["supabase", "docker", "aws", "argocd", "graphql"],
    summary: "Supabase · Docker · AWS · ArgoCD · GraphQL",
  },
  {
    title: "Tooling & CI/CD",
    chips: ["git", "github", "jest", "cypress", "circleci"],
    summary: "Git · GitHub · Jest · Cypress · CircleCI",
  },
  {
    title: "Others",
    chips: ["webassembly", "code", "windsurf"],
    summary: "Web Audio API · AudioWorklet · WASM · Wavesurfer.js",
  },
];

export default function TechStackCard() {
  const t = useTranslations("hero");

  return (
    <Card
      badgeTitle={t("techStack.card_label")}
      className="min-w-[80vw] sm:min-w-[28rem]"
    >
      <CardContent className="space-y-5 pt-2">
        {groups.map(({ title, chips, summary }) => (
          <LabeledSection key={title} label={title}>
            <div className="flex items-start justify-between gap-3">
              <p className="m-0 text-pretty text-sm leading-6 text-foreground/90">
                {summary}
              </p>
              <StackChip
                className="shrink-0 shadow"
                stackList={chips}
                size={22}
                max={chips.length}
              />
            </div>
          </LabeledSection>
        ))}
      </CardContent>
    </Card>
  );
}
