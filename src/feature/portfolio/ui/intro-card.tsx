"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function IntroCard() {
  const t = useTranslations("hero");

  return (
    <Card className={"min-w-[80vw] sm:min-w-92"}>
      <CardHeader>
        <CardTitle>{"Hi, I'm Handy"}</CardTitle>
        <CardDescription>
          <div>
            <p>{t("intro.description_1")}</p>
            <p>{t("intro.description_2")}</p>
            <p>{t("intro.description_3")}</p>
            <p>{t("intro.description_4")}</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button
          size={"sm"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("Experience")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
}
