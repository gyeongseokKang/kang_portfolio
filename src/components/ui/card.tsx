import type * as React from "react";

import { cn } from "@/lib/utils";

function CardBadge({
  children,
  className,
  variant = "section",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "title" | "section";
}) {
  return (
    <span
      className={cn(
        "absolute rounded-md border border-border/60 bg-card font-semibold text-primary/80",
        variant === "title"
          ? "-top-3 left-6 px-3 py-1 text-sm tracking-wide text-primary"
          : "-top-2.5 left-6 px-2 py-0.5 text-[11px] uppercase tracking-[0.14em]",
        className,
      )}
    >
      {children}
    </span>
  );
}

function Card({
  className,
  badgeTitle,
  children,
  ...props
}: React.ComponentProps<"div"> & { badgeTitle?: string }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground relative flex flex-col gap-3 rounded-xl border py-6 shadow-sm",
        badgeTitle && "pt-9",
        className,
      )}
      {...props}
    >
      {badgeTitle ? <CardBadge variant="title">{badgeTitle}</CardBadge> : null}
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardBadge,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
