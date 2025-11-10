"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useMajorSectionId } from "@/hooks/use-major-section-id";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { FIRST_NAV_ITEM_ID } from "@/shared/ui/app-sidebar";

const MIN_HEIGHT = 1024;

export function ScrollToTop() {
  const activeId = useMajorSectionId();
  const { scrollY } = useScrollPosition();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isVisible = checkScrollButtonVisibility(activeId, scrollY);

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
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

function checkScrollButtonVisibility(activeId: string, scrollY: number) {
  return (
    checkCurrentSectionIsNotFirst(activeId) ||
    checkScrollThresholdIsOverflow(scrollY)
  );
}

function checkScrollThresholdIsOverflow(scrollY: number) {
  const windowHeight = getWindowHeight();
  return scrollY > windowHeight;
}

function checkCurrentSectionIsNotFirst(activeId: string) {
  return activeId !== FIRST_NAV_ITEM_ID;
}

function getWindowHeight() {
  return window?.innerHeight || MIN_HEIGHT;
}
