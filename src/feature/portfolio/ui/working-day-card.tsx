"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TextAnimate } from "@/components/ui/text-animate";
import { getExperiencedYear } from "@/lib/dayUtils";

export default function WorkingDayCard() {
  const { N년차, coupangPlayDays } = getExperiencedYear();

  const coupangPlayDaysText = `${coupangPlayDays.toString()} workdays in Coupang Play`;
  return (
    <Card className={"w-68"}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          +{N년차} Frontend Engineer
        </CardTitle>
        <CardDescription>
          <TextAnimate animation="slideUp" by="word" repeat duration={3}>
            {coupangPlayDaysText}
          </TextAnimate>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
