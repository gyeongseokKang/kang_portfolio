import "../src/locale/i18n";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import ScrollToTopBtn from "src/component/button/scrollToTopBtn/ScrollToTopBtn";
import ExperienceSection from "src/section/ExperienceSection";
import IntroSection from "src/section/IntroSection";
import TopBar from "../src/topBar/TopBar";

const DynamicLazyProjectSection = dynamic(
  () => import("src/section/ProjectSection"),
  {
    suspense: true,
  }
);
const DynamicLazySkillSection = dynamic(
  () => import("src/section/SkillSection"),
  {
    suspense: true,
  }
);
const DynamicLazyAwardSection = dynamic(
  () => import("src/section/AwardSection"),
  {
    suspense: true,
  }
);
const DynamicLazyCertificateSection = dynamic(
  () => import("src/section/CertificateSection"),
  {
    suspense: true,
  }
);
const DynamicLazyBlogSection = dynamic(
  () => import("src/section/BlogSection"),
  {
    suspense: true,
  }
);
const DynamicLazyContactSection = dynamic(
  () => import("src/section/ContactSection"),
  {
    suspense: true,
  }
);
const DynamicLazyRetrospectiveSection = dynamic(
  () => import("src/section/RetrospectiveSection"),
  {
    suspense: true,
  }
);

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <TopBar />
      <IntroSection />
      <ExperienceSection />
      <Suspense fallback={`loading`}>
        <DynamicLazyProjectSection />
        {/* <DynamicLazySkillSection />
        <DynamicLazyAwardSection />
        <DynamicLazyCertificateSection />
        <DynamicLazyBlogSection />
        <DynamicLazyRetrospectiveSection />
        <DynamicLazyContactSection /> */}
      </Suspense>
      <ScrollToTopBtn />
    </div>
  );
}
