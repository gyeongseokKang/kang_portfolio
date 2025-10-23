"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const HeroSection = dynamic(() => import("../hero-section"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSectionLazy() {
  return <ViewportLazy render={() => <HeroSection />} />;
}
