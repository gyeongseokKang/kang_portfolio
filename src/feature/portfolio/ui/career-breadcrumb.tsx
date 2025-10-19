import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Pickaxe } from "lucide-react";
import { useTranslations } from "next-intl";

export const CareerBreadcrumb = () => {
  const t = useTranslations("hero");
  return (
    <Breadcrumb className="border rounded-lg p-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>{t("carchap")}</HoverCardTrigger>
            <HoverCardContent className="w-80">
              <CareerInfo
                position="CTO & Co-founder"
                period={{
                  start: "2018.12",
                  end: "2020.05",
                }}
                team="Business Intelligence Platform"
              />
            </HoverCardContent>
          </HoverCard>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>{t("tmax")}</HoverCardTrigger>
            <HoverCardContent className="w-80">
              <CareerInfo
                position="Research Engineer"
                period={{
                  start: "2020.02",
                  end: "2022.06",
                }}
                team="Business Intelligence Platform"
              />
            </HoverCardContent>
          </HoverCard>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>{t("gaudiolab")}</HoverCardTrigger>
            <HoverCardContent className="w-80">
              <CareerInfo
                position="Lead Frontend Engineer"
                period={{
                  start: "2022.07",
                  end: "2025.09",
                }}
                team="Service & AI"
              />
            </HoverCardContent>
          </HoverCard>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>
              {t("coupang-play")}
              <SimpleTooltip
                content={t("current")}
                alwaysOpen
                side="top"
                align="start"
                hiddenArrow
              >
                <Pickaxe className="size-3 ml-1 mt-1 animate-bounce" />
              </SimpleTooltip>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <CareerInfo
                position="Sr.Frontend Engineer"
                period={{
                  start: "2025.10",
                  end: "current",
                }}
                team="CoupangPlay Monetization"
              />
            </HoverCardContent>
          </HoverCard>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const CareerInfo = ({
  position,
  period,
  team,
}: {
  position: string;
  period: {
    start: string;
    end: string;
  };
  team: string;
}) => {
  return (
    <dl className="grid grid-cols-[60px_1fr] gap-x-4 gap-y-1 text-sm">
      <dt className="text-muted-foreground">Position</dt>
      <dd className="font-medium">{position}</dd>
      <dt className="text-muted-foreground">Team</dt>
      <dd className="font-medium">{team}</dd>
      <dt className="text-muted-foreground">Period</dt>
      <dd className="font-medium">
        {period.start} ~ {period.end}
      </dd>
    </dl>
  );
};
