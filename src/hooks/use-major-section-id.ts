"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observe the given section IDs and return the ID of the section that currently
 * occupies the largest portion of the viewport.
 */
export function useMajorSectionId(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    if (!sectionIds?.length) return;

    const sections = sectionIds
      .map((id) => {
        const el = document.getElementById(id);
        return el ? { id, el } : null;
      })
      .filter((s): s is { id: string; el: HTMLElement } => s !== null);

    if (sections.length === 0) return;

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          ratiosRef.current[id] = entry.intersectionRatio;
        }
        let maxId: string | null = null;
        let maxRatio = 0;
        for (const id of sectionIds) {
          const r = ratiosRef.current[id] ?? 0;
          if (r > maxRatio) {
            maxRatio = r;
            maxId = id;
          }
        }
        setActiveId(maxId);
      },
      { root: null, threshold: thresholds }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
