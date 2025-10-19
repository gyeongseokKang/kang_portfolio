"use client";

import { StackChip } from "@/components/stack-chip";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
type Group = {
  title: string;
  chips: string[]; // icon keys for StackChip
  summary: string; // short label line
};

const groups: Group[] = [
  {
    title: "Frontend",
    chips: [
      "typescript",
      "javascript",
      "react",
      "next",
      "flutter",
      "tailwind",
      "shadcn",
    ],
    summary: "TypeScript · JavaScript · React · Next.js · Flutter",
  },

  {
    title: "Backend / Infra",
    chips: ["firebase", "supabase", "docker", "aws", "argocd", "graphql"],
    summary: "Firebase · Supabase · Docker · AWS · ArgoCD · GraphQL",
  },
  {
    title: "Tooling & CI/CD",
    chips: ["git", "github", "vercel", "jest", "cypress", "circleci"],
    summary: "Git · GitHub Actions · Vercel · Jest · Cypress · CircleCI",
  },
  {
    title: "Others",
    chips: ["webassembly", "code", "windsurf"],
    summary: "Web Audio API · AudioWorklet · WASM · Wavesurfer.js",
  },
];

const GroupCard = ({ title, chips, summary }: Group) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[520px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <figcaption className="text-base sm:text-lg font-semibold dark:text-white">
              {title}
            </figcaption>
            <div className="shrink-0">
              <StackChip stackList={chips} size={22} max={chips.length} />
            </div>
          </div>
          <p className="mt-1 text-sm text-muted-foreground dark:text-white/60">
            {summary}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function StackList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList delay={800}>
        {groups.map((g, idx) => (
          <GroupCard key={g.title + idx} {...g} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
