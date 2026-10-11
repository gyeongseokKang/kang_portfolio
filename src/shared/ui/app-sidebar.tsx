"use client";

import dayjs from "dayjs";
import {
  Book,
  BookOpen,
  Briefcase,
  FolderKanban,
  History,
  Newspaper,
  Trophy,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useMajorSectionId } from "@/hooks/use-major-section-id";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { title: "Career", url: "#Career", icon: Briefcase },
  { title: "Project", url: "#Project", icon: FolderKanban },
  { title: "Activity", url: "#Activity", icon: Wrench },
  { title: "Achievements", url: "#Achievements", icon: Trophy },
  { title: "Experience", url: "#Experience", icon: History },
] as const;

export const NAV_ITEMS_ID = NAV_ITEMS.map((n) => n.url.replace(/^#/, ""));

export const FIRST_NAV_ITEM_ID = NAV_ITEMS_ID[0];

const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED;

function InkRule() {
  return (
    <svg
      viewBox="0 0 200 6"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="mt-3 h-1.5 w-full text-foreground/40"
    >
      <path
        d="M0 3 C 18 1, 42 4.5, 72 2.4 C 104 0.6, 132 4.6, 164 2.4 C 182 1.4, 192 3, 200 2.4 L 200 4 C 178 5.2, 146 3.2, 116 4.4 C 78 5.6, 36 3, 0 4.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AppSidebar() {
  const activeId = useMajorSectionId();
  const t = useTranslations("footer");

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 justify-evenly pt-2">
          <Image
            className="rounded-md ring-1 ring-foreground/15"
            src="/images/intro/logo.jpeg"
            alt="Handy Kang"
            width={48}
            height={48}
          />
          <div>
            <div className="px-2 text-xl font-semibold">Handy Kang</div>
            <div className="px-2 text-xs font-semibold">Kang Gyeong Seok</div>
          </div>
        </div>
        <InkRule />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-serif tracking-[0.18em] text-foreground/80">
            <span aria-hidden className="mr-2 size-1.5 bg-seal" />
            Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.url.slice(1);
                return (
                  <SidebarMenuItem key={item.title}>
                    <span
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute top-1/2 left-0.5 h-3.5 w-0.5 -translate-y-1/2 rounded-full bg-seal transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon
                          className={cn(
                            isActive && "text-primary font-semibold",
                          )}
                        />
                        <span className={cn(isActive && "font-medium")}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-serif tracking-[0.18em] text-foreground/80">
            <span aria-hidden className="mr-2 size-1.5 bg-seal" />
            Writing
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="https://all-dev-kang.tistory.com/"
                    target="_blank"
                  >
                    <Book /> <span>Dev Blog</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="https://product.kyobobook.co.kr/detail/S000218081064"
                    target="_blank"
                  >
                    <BookOpen /> <span>Book</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="https://yozm.wishket.com/magazine/@rkdrudtjr159/"
                    target="_blank"
                  >
                    <Newspaper /> <span>Articles</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-muted-foreground">
          {lastUpdated && (
            <>
              {t("lastUpdated")}: {dayjs(lastUpdated).format("YYYY.MM.DD")}
              <br />
            </>
          )}
          copyright © {new Date().getFullYear()} Handy Kang. <br />
          All rights reserved.
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
