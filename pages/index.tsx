import * as React from "react";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ProjectSection from "src/section/ProjectSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";
import ToyProjectSection from "src/section/ToyProjectSection";
import SkillSection from "src/section/SkillSection";
import CertificateSection from "src/section/CertificateSection";
import BlogSection from "src/section/BlogSection";
import ContactSection from "src/section/ContactSection";
import AwardSection from "src/section/AwardSection";

export default function Index() {
  return (
    <>
      <TopBar />
      <IntroSection />
      <ProjectSection />
      <ToyProjectSection />
      <SkillSection />
      <AwardSection />
      <CertificateSection />
      <BlogSection />
      <ContactSection />
      <ScrollToTopBtn />
    </>
  );
}
