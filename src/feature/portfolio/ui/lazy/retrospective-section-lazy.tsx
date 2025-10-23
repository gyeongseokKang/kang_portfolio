"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const RetrospectiveSection = dynamic(() => import("../retrospective-section"), {
  ssr: false,
  loading: () => null,
});

export default function RetrospectiveSectionLazy() {
  return <ViewportLazy render={() => <RetrospectiveSection />} />;
}
