"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

type StackChipProps = {
  stackList: string[];
  size?: number;
  max?: number; // default 5
};

export function StackChip({ stackList, size = 22, max = 5 }: StackChipProps) {
  const items = stackList.slice(0, max);
  return (
    <div className="flex flex-row flex-wrap items-center gap-1.5 justify-start">
      <TooltipProvider>
        {items.map((stack) => (
          <Tooltip key={stack}>
            <TooltipTrigger asChild>
              <div className="flex items-center rounded-md border bg-card py-1 px-0.5 ">
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
