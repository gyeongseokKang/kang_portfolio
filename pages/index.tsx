import * as React from "react";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ProjectSection from "src/section/ProjectSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";

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
      <ScrollToTopBtn />
    </>
  );
}
