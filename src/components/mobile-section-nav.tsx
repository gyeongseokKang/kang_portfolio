"use client";

import { useEffect, useRef } from "react";
import { useMajorSectionId } from "@/hooks/use-major-section-id";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/shared/ui/app-sidebar";

/**
 * 모바일 전용 상단 섹션 네비. 사이드바가 없는 화면에서 현재 위치를 보여주고 바로 이동한다.
 */
export function MobileSectionNav() {
  const activeId = useMajorSectionId();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>(
      `a[href$="#${activeId}"]`,
    );
    const list = listRef.current;
    if (!active || !list) return;
    // 오른쪽은 테마/언어 버튼이 덮으므로 활성 칩을 왼쪽에 붙인다.
    list.scrollTo({
      left: Math.max(0, active.offsetLeft - 12),
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 -mx-4 border-b bg-background/90 backdrop-blur-sm md:hidden"
    >
      <ul
        ref={listRef}
        className="m-0 flex list-none gap-1 overflow-x-auto px-3 py-2 pr-40 [mask-image:linear-gradient(to_right,black_calc(100%-11rem),transparent_calc(100%-9.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.url.slice(1);
          return (
            <li key={item.title} className="shrink-0">
              <Link
                href={item.url}
                data-active={isActive}
                className={cn(
                  "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground",
                )}
              >
                <item.icon className="size-3.5" />
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
