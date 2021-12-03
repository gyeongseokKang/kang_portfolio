import * as React from "react";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ExperienceSection from "src/section/ExperienceSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";
import ProjectSection from "src/section/ProjectSection";
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
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <AwardSection />
      <CertificateSection />
      <BlogSection />
      <ContactSection />
      <ScrollToTopBtn />
    </>
  );
}
