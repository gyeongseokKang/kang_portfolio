import * as React from "react";
import dynamic from "next/dynamic";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ExperienceSection from "src/section/ExperienceSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";

const DynamicLazyProjectSection = dynamic(() => import("src/section/ProjectSection"));
const DynamicLazySkillSection = dynamic(() => import("src/section/SkillSection"));
const DynamicLazyAwardSection = dynamic(() => import("src/section/AwardSection"));
const DynamicLazyCertificateSection = dynamic(() => import("src/section/CertificateSection"));
const DynamicLazyBlogSection = dynamic(() => import("src/section/BlogSection"));
const DynamicLazyContactSection = dynamic(() => import("src/section/ContactSection"));

export default function Index() {
  return (
    <>
      <TopBar />
      <IntroSection />
      <ExperienceSection />
      <DynamicLazyProjectSection />
      <DynamicLazySkillSection />
      <DynamicLazyAwardSection />
      <DynamicLazyCertificateSection />
      <DynamicLazyBlogSection />
      <DynamicLazyContactSection />
      <ScrollToTopBtn />
    </>
  );
}
