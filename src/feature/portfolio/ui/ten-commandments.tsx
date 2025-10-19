"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card";
import { useTranslations } from "next-intl";

export default function TenCommandments() {
  const t = useTranslations("hero");
  const items = [
    t("ten-commandments.commandment1"),
    t("ten-commandments.commandment2"),
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <CometCard>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>{t("ten-commandments.title")}</CardTitle>
          <CardDescription>{t("ten-commandments.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-0 divide-y divide-border">
            {items.map((text, i) => (
              <li key={i} className="group">
                <div className="flex items-center gap-1 py-1">
                  <Badge variant={"secondary"}> {i + 1}</Badge>
                  <p className="text-sm leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </CometCard>
  );
}
