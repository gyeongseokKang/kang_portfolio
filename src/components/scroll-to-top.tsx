"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useMajorSectionId } from "@/hooks/use-major-section-id";
import { FIRST_NAV_ITEM_ID } from "@/shared/ui/app-sidebar";

export function ScrollToTop() {
  const activeId = useMajorSectionId();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHidden = !FIRST_NAV_ITEM_ID || activeId === FIRST_NAV_ITEM_ID;

  return (
    <AnimatePresence initial={false}>
      {!isHidden && (
        <motion.div
          key="scroll-to-top"
          className="origin-bottom-right"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Button
            aria-label="Scroll to top"
            size="icon"
            variant={"outline"}
            className="animate-bounce mr-2"
            onClick={handleClick}
          >
            <ArrowUp className="size-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
