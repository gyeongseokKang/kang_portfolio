import * as React from "react";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ProjectSection from "src/section/ProjectSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";
import ToyProjectSection from "src/section/ToyProjectSection";

export default function Index() {
  return (
    <>
      <TopBar />
      <IntroSection />
      <ProjectSection />
      <ToyProjectSection />
      <ScrollToTopBtn />
    </>
  );
}
