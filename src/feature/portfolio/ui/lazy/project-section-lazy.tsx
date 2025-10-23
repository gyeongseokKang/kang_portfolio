"use client";

import dynamic from "next/dynamic";
import ViewportLazy from "@/shared/ui/viewport-lazy";

const ProjectSection = dynamic(() => import("../project-section"), {
  ssr: false,
  loading: () => null,
});

export default function ProjectSectionLazy() {
  return <ViewportLazy render={() => <ProjectSection />} />;
}
