"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  FolderKanban,
  History,
  Trophy,
  Wrench,
} from "lucide-react";

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
import Image from "next/image";
import { useMemo } from "react";
import { AuroraText } from "./ui/aurora-text";

const navItems = [
  { title: "Experience", url: "#Experience", icon: Briefcase },
  { title: "Project", url: "#Project", icon: FolderKanban },
  { title: "Skill", url: "#Skill", icon: Wrench },
  { title: "Award", url: "#Award", icon: Trophy },
  { title: "Certificate", url: "#Certificate", icon: Award },
  { title: "Publication", url: "#Publication", icon: BookOpen },
  { title: "Retrospective", url: "#Retrospective", icon: History },
] as const;

export function AppSidebar() {
  const sectionIds = useMemo(
    () => navItems.map((n) => n.url.replace(/^#/, "")),
    []
  );
  const activeId = useMajorSectionId(sectionIds);

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 justify-evenly pt-2">
          <Image
            className="rounded-full"
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
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = activeId === item.url.slice(1);
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={cn(
                      "transition-all duration-300 ease-out will-change-transform",
                      isActive ? "translate-x-2" : "translate-x-0"
                    )}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon
                          className={cn(
                            isActive && "text-primary font-semibold"
                          )}
                        />
                        {isActive ? (
                          <AuroraText>{item.title}</AuroraText>
                        ) : (
                          <span>{item.title}</span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-muted-foreground">
          copyright © {new Date().getFullYear()} Handy Kang. <br />
          All rights reserved.
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
