"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const ExperienceSection = dynamic(() => import("../experience-section"), {
  ssr: false,
  loading: () => null,
});

export default function ExperienceSectionLazy() {
  return <ViewportLazy render={() => <ExperienceSection />} />;
}
