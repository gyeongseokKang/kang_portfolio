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
import Image from "next/image";

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
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 justify-evenly">
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
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
