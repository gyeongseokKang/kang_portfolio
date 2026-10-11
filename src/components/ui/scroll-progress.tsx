"use client";

import {
  type MotionProps,
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

const BRUSH_BODY =
  "M0 15 C 28 8, 52 4, 96 10 C 156 18, 196 3, 258 9 C 318 14, 348 12, 392 15 C 448 6, 498 2, 572 9 C 652 16, 698 5, 768 12 C 828 17, 868 13, 918 15 C 986 4, 1048 3, 1132 10 C 1166 13, 1186 12, 1200 14 L 1200 21 C 1172 25, 1124 17, 1044 27 C 964 22, 904 16, 844 21 C 784 29, 722 18, 642 23 C 562 31, 502 16, 434 25 C 366 18, 328 16, 276 18 C 214 29, 152 20, 92 25 C 50 23, 22 20, 0 18 Z";

const BRUSH_BRISTLE =
  "M18 16 C 70 11, 120 20, 186 13 C 250 7, 310 18, 380 14 C 460 8, 530 16, 610 11 C 700 6, 770 15, 850 12 C 940 8, 1020 17, 1110 12 C 1156 10, 1184 13, 1200 14 L 1200 16 C 1160 18, 1100 13, 1024 19 C 940 14, 860 20, 780 15 C 690 11, 620 18, 540 14 C 460 20, 390 13, 310 18 C 230 14, 160 21, 90 16 C 50 14, 28 17, 0 16 Z";

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const maskImage = useTransform(scrollYProgress, (value) => {
    const end = value * 100;
    const fadeStart = Math.max(0, end - 1.4);
    return `linear-gradient(90deg, #fff ${fadeStart}%, transparent ${end}%)`;
  });

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[60] h-3 text-primary",
        className,
      )}
      style={{ maskImage, WebkitMaskImage: maskImage }}
      {...props}
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-full w-full"
      >
        <path d={BRUSH_BODY} fill="currentColor" />
        <path d={BRUSH_BRISTLE} fill="currentColor" opacity="0.35" />
      </svg>
    </motion.div>
  );
}
