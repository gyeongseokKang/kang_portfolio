"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const ActivitySection = dynamic(() => import("../activity-section"), {
  ssr: false,
  loading: () => null,
});

export default function ActivitySectionLazy() {
  return <ViewportLazy render={() => <ActivitySection />} />;
}
