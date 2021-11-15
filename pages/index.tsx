import * as React from "react";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ProjectSection from "src/section/ProjectSection";

export default function Index() {
  return (
    <>
      <TopBar />
      <ProjectSection />
      <ProjectSection />
      <ProjectSection />
      <ProjectSection />
      <IntroSection />
      <ProjectSection />
      <ProjectSection />
    </>
  );
}
