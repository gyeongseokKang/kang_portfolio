import type { ReactNode } from "react";
import { CardBadge } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LabeledSection({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative rounded-xl border border-border/60 bg-gradient-to-br from-muted/60 via-muted/30 to-transparent px-4 pb-4 pt-5",
        className,
      )}
    >
      <CardBadge className="left-4">{label}</CardBadge>
      {children}
    </section>
  );
}
