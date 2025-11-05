"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observe the given section IDs and return the ID of the section that currently
 * occupies the largest portion of the viewport.
 */
export function useMajorSectionId(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef(false);

  useEffect(() => {
    const compute = () => {
      pendingRef.current = false;
      const sections = getSectionElements(sectionIds);
      if (sections.length === 0) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      let maxVisible = -1;
      let maxId: string | null = null;
      for (const { id, el } of sections) {
        const rect = el.getBoundingClientRect();
        const visible = Math.max(
          0,
          Math.min(rect.bottom, vh) - Math.max(rect.top, 0),
        );
        const clamped = Math.min(visible, rect.height);
        if (clamped > maxVisible) {
          maxVisible = clamped;
          maxId = id;
        }
      }
      setActiveId(maxId);
    };

    const schedule = () => {
      if (pendingRef.current) return;
      pendingRef.current = true;
      rafRef.current = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule as EventListener);
      window.removeEventListener("resize", schedule as EventListener);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [sectionIds]);

  return activeId;
}

type SectionEntry = { id: string; el: HTMLElement };

const getSectionElements = (ids?: string[]): SectionEntry[] => {
  if (ids && ids.length > 0) {
    return ids
      .map((id) => {
        const el = document.getElementById(id);
        return el ? { id, el } : null;
      })
      .filter((s): s is SectionEntry => s !== null);
  }
  const nodeList = document.querySelectorAll<HTMLElement>("section");
  return Array.from(nodeList).map((el) => ({ id: el.id, el }));
};
