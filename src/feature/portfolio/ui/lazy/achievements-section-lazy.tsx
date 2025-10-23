"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const AchievementsSection = dynamic(() => import("../achievements-section"), {
  ssr: false,
  loading: () => null,
});

export default function AchievementsSectionLazy() {
  return <ViewportLazy render={() => <AchievementsSection />} />;
}
