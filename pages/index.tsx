import * as React from "react";
import dynamic from "next/dynamic";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ExperienceSection from "src/section/ExperienceSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";
import useIntersectionObserver from "src/utils/customHook/useIntersectionObserver";

const DynamicLazyProjectSection = dynamic(() => import("src/section/ProjectSection"));
const DynamicLazySkillSection = dynamic(() => import("src/section/SkillSection"));
const DynamicLazyAwardSection = dynamic(() => import("src/section/AwardSection"));
const DynamicLazyCertificateSection = dynamic(() => import("src/section/CertificateSection"));
const DynamicLazyBlogSection = dynamic(() => import("src/section/BlogSection"));
const DynamicLazyContactSection = dynamic(() => import("src/section/ContactSection"));

export default function Index() {
  const projectRef = React.useRef(null);
  const skillRef = React.useRef(null);
  const awardRef = React.useRef(null);
  const certificateRef = React.useRef(null);
  const blogRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const projectEntry = useIntersectionObserver(projectRef, {
    threshold: 0.1,
    rootMargin: "100px",
    freezeOnceVisible: true,
  });
  const awardEntry = useIntersectionObserver(awardRef, {
    threshold: 0.1,
    rootMargin: "100px",
    freezeOnceVisible: true,
  });
  const skillEntry = useIntersectionObserver(skillRef, {
    threshold: 0.1,
    rootMargin: "100px",
    freezeOnceVisible: true,
  });
  const certificateEntry = useIntersectionObserver(certificateRef, {
    threshold: 0.1,
    rootMargin: "100px",
    freezeOnceVisible: true,
  });
  const blogEntry = useIntersectionObserver(blogRef, { threshold: 0.1, rootMargin: "100px", freezeOnceVisible: true });
  const contactEntry = useIntersectionObserver(contactRef, {
    threshold: 0.1,
    rootMargin: "100px",
    freezeOnceVisible: true,
  });

  return (
    <>
      <TopBar />
      <IntroSection />
      <ExperienceSection />
      <div ref={projectRef}>{projectEntry?.isIntersecting && <DynamicLazyProjectSection />}</div>
      <div ref={skillRef}>{skillEntry?.isIntersecting && <DynamicLazySkillSection />}</div>
      <div ref={awardRef}>{awardEntry?.isIntersecting && <DynamicLazyAwardSection />}</div>
      <div ref={certificateRef}>{certificateEntry?.isIntersecting && <DynamicLazyCertificateSection />}</div>
      <div ref={blogRef}>{blogEntry?.isIntersecting && <DynamicLazyBlogSection />}</div>
      <div ref={contactRef}>{contactEntry?.isIntersecting && <DynamicLazyContactSection />}</div>
      <ScrollToTopBtn />
    </>
  );
}
