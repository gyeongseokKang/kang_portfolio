"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const CareerSection = dynamic(() => import("../career-section"), {
  ssr: false,
  loading: () => null,
});

export default function CareerSectionLazy() {
  return <ViewportLazy render={() => <CareerSection />} />;
}
