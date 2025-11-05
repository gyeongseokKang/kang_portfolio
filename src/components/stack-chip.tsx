"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type StackChipProps = {
  stackList: string[];
  size?: number;
  max?: number; // default 5
  className?: string;
};

export function StackChip({
  stackList,
  size = 20,
  max = 5,
  className,
}: StackChipProps) {
  const items = stackList.slice(0, max);
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap items-center gap-1.5 justify-start border rounded-sm px-2",
        className,
      )}
    >
      <TooltipProvider>
        {items.map((stack) => (
          <Tooltip key={stack}>
            <TooltipTrigger asChild>
              <div className="flex items-center rounded  bg-card py-1 px-0.5 ">
                <Image
                  src={`/icons/${stack.toLowerCase()}.svg`}
                  height={size}
                  width={size}
                  alt={stack}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>{stack}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
