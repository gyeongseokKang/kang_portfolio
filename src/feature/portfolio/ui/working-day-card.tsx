"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExperiencedYear } from "@/lib/dayUtils";

export default function WorkingDayCard() {
  const { N년차, coupangPlayDays } = getExperiencedYear();
  return (
    <Card className={"w-68"}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          +{N년차} Frontend Engineer
        </CardTitle>
        <CardDescription>
          {coupangPlayDays} days in Coupang Play
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
