"use client";

import { AtSign, FileDown, FileUser, Home } from "lucide-react";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SimpleTooltip, TooltipProvider } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./ui/dock";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DATA = {
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gyeongseokKang",
        icon: IoLogoGithub,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/",
        icon: IoLogoLinkedin,
      },
      email: {
        name: "Send Email",
        url: "mailto:handy.kang.dev@gmail.com",
        icon: AtSign,
      },
    },
  },
};

export function BottomDock() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          <DockIcon>
            <SimpleTooltip content="Home">
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Home className="size-5" />
              </Button>
            </SimpleTooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <SimpleTooltip content={name}>
                <Button variant="ghost" size="icon-sm" asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-5" />
                  </Link>
                </Button>
              </SimpleTooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />

          <DockIcon>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <SimpleTooltip content="Resume">
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <FileUser className="size-5" />
                  </Button>
                </SimpleTooltip>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    window.open("/resume/handykang-resume-ko.pdf", "_blank");
                  }}
                >
                  CV-KO <FileDown />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    window.open("/resume/handykang-resume-en.pdf", "_blank");
                  }}
                >
                  CV-EN <FileDown />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
