"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Marquee } from "@/components/ui/marquee";
import { Switch } from "@/components/ui/switch";
import SectionLayout from "./section-layout";

type RetrospectiveItem = {
  quarter: string;
  title: string;
  details: string;
  extra?: string[];
};

type RetrospectiveYear = {
  year: number;
  items: RetrospectiveItem[];
};

function Item({ item }: { item: RetrospectiveItem }) {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant={"secondary"}>{item.quarter}</Badge>
          {item.title}
        </CardTitle>
        <CardDescription>{item.details}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-2">
        {item.extra && item.extra.length > 0 && (
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
            {item.extra.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default function RetrospectiveSection() {
  const t = useTranslations("Retrospective");
  const [isMarquee, setIsMarquee] = useState(true);

  const DATA: RetrospectiveYear[] = [
    {
      year: 2025,
      items: [
        {
          quarter: "3Q",
          title: t("2025.3Q.title"),
          details: t("2025.3Q.details"),
          extra: [
            t("2025.3Q.extra1"),
            t("2025.3Q.extra2"),
            t("2025.3Q.extra3"),
          ],
        },
        {
          quarter: "2Q",
          title: t("2025.2Q.title"),
          details: t("2025.2Q.details"),
          extra: [
            t("2025.2Q.extra1"),
            t("2025.2Q.extra2"),
            t("2025.2Q.extra3"),
          ],
        },
        {
          quarter: "1Q",
          title: t("2025.1Q.title"),
          details: t("2025.1Q.details"),
          extra: [t("2025.1Q.extra1")],
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          quarter: "4Q",
          title: t("2024.4Q.title"),
          details: t("2024.4Q.details"),
          extra: [
            t("2024.4Q.extra1"),
            t("2024.4Q.extra2"),
            t("2024.4Q.extra3"),
          ],
        },
        {
          quarter: "3Q",
          title: t("2024.3Q.title"),
          details: t("2024.3Q.details"),
          extra: [
            t("2024.3Q.extra1"),
            t("2024.3Q.extra2"),
            t("2024.3Q.extra3"),
          ],
        },
        {
          quarter: "2Q",
          title: t("2024.2Q.title"),
          details: t("2024.2Q.details"),
          extra: [
            t("2024.2Q.extra1"),
            t("2024.2Q.extra2"),
            t("2024.2Q.extra3"),
          ],
        },
        {
          quarter: "1Q",
          title: t("2024.1Q.title"),
          details: t("2024.1Q.details"),
          extra: [
            t("2024.1Q.extra1"),
            t("2024.1Q.extra2"),
            t("2024.1Q.extra3"),
          ],
        },
      ],
    },
    {
      year: 2023,
      items: [
        {
          quarter: "4Q",
          title: t("2023.4Q.title"),
          details: t("2023.4Q.details"),
          extra: [t("2023.4Q.extra1"), t("2023.4Q.extra2")],
        },
        {
          quarter: "3Q",
          title: t("2023.3Q.title"),
          details: t("2023.3Q.details"),
          extra: [
            t("2023.3Q.extra1"),
            t("2023.3Q.extra2"),
            t("2023.3Q.extra3"),
          ],
        },
        {
          quarter: "2Q",
          title: t("2023.2Q.title"),
          details: t("2023.2Q.details"),
          extra: [t("2023.2Q.extra1"), t("2023.2Q.extra2")],
        },
        {
          quarter: "1Q",
          title: t("2023.1Q.title"),
          details: t("2023.1Q.details"),
          extra: [
            t("2023.1Q.extra1"),
            t("2023.1Q.extra2"),
            t("2023.1Q.extra3"),
          ],
        },
      ],
    },
    {
      year: 2022,
      items: [
        {
          quarter: "4Q",
          title: t("2022.4Q.title"),
          details: t("2022.4Q.details"),
          extra: [t("2022.4Q.extra1"), t("2022.4Q.extra2")],
        },
        {
          quarter: "3Q",
          title: t("2022.3Q.title"),
          details: t("2022.3Q.details"),
          extra: [t("2022.3Q.extra1"), t("2022.3Q.extra2")],
        },
        {
          quarter: "2Q",
          title: t("2022.2Q.title"),
          details: t("2022.2Q.details"),
          extra: [t("2022.2Q.extra1"), t("2022.2Q.extra2")],
        },
        {
          quarter: "1Q",
          title: t("2022.1Q.title"),
          details: t("2022.1Q.details"),
          extra: [t("2022.1Q.extra1"), t("2022.1Q.extra2")],
        },
      ],
    },
  ];

  return (
    <SectionLayout
      id="Retrospective"
      title="Retrospective"
      description={t("subtitle")}
      fullWidth
    >
      <div className="flex items-center justify-end space-x-2">
        <Switch
          id="airplane-mode"
          onCheckedChange={(checked) => setIsMarquee(checked)}
          checked={isMarquee}
        />
        <Label htmlFor="airplane-mode">Marquee Mode</Label>
      </div>
      <div className="flex flex-col gap-4 w-full overflow-hidden">
        {DATA.map((year, idx) => {
          const isReverse = idx % 2 === 0;
          return (
            <div key={year.year}>
              <p className="text-xl font-bold">{year.year}</p>
              <Marquee
                pauseOnHover
                stopAnimation={!isMarquee}
                className="[--duration:60s] "
                reverse={isReverse}
              >
                {year.items.map((it, idx) => (
                  <Item key={`${year.year}-${idx}`} item={it} />
                ))}
              </Marquee>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}
