"use client";

import { StackChip } from "@/components/stack-chip";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
type Group = {
  title: string;
  chips: string[]; // icon keys for StackChip
  summary: string; // short label line
};

const groups: Group[] = [
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

const GroupCard = ({ title, chips, summary }: Group) => {
  return (
    <Card
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-md cursor-pointer overflow-hidden rounded-xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      <CardHeader className="px-0">
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="shrink-0">
            <StackChip
              className="shadow"
              stackList={chips}
              size={22}
              max={chips.length}
            />
          </div>
        </CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export function StackList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2 max-w-md",
        className
      )}
    >
      <AnimatedList delay={800}>
        {groups.map((g, idx) => (
          <GroupCard key={g.title + idx} {...g} />
        ))}
      </AnimatedList>
    </div>
  );
}
