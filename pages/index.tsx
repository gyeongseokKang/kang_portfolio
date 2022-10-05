import "../src/locale/i18n";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import ScrollToTopBtn from "src/component/button/scrollToTopBtn/ScrollToTopBtn";
import ExperienceSection from "src/section/ExperienceSection";
import IntroSection from "src/section/IntroSection";
import TopBar from "../src/topBar/TopBar";

const DynamicLazyProjectSection = dynamic(() => import("src/section/ProjectSection"), {
  suspense: true,
});
const DynamicLazySkillSection = dynamic(() => import("src/section/SkillSection"), {
  suspense: true,
});
const DynamicLazyAwardSection = dynamic(() => import("src/section/AwardSection"), {
  suspense: true,
});
const DynamicLazyCertificateSection = dynamic(() => import("src/section/CertificateSection"), {
  suspense: true,
});
const DynamicLazyBlogSection = dynamic(() => import("src/section/BlogSection"), {
  suspense: true,
});
const DynamicLazyContactSection = dynamic(() => import("src/section/ContactSection"), {
  suspense: true,
});

export default function Index() {
  return (
    <>
      <TopBar />
      <a href="intent://accounts.gaudiolab.io/auth/realms/gplatform/protocol/openid-connect/auth?client_id=webapp&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fdev-studio.gaudiolab.io%2Fapi%2Fauth%2Fcallback%2Fkeycloak&studio_version=beta&state=W5ppcwiu_614yR7avuXyVNa75JGqziHmabZSTHB2Ggo&code_challenge=BwG1S-PqfI9NYQYZ45OAuNCQG8utXn2lKv9mdF86jdQ&code_challenge_method=S256#Intent;scheme=http;package=com.android.chrome;end">
        크롬 브라우저로 이동
      </a>
      <IntroSection />
      <ExperienceSection />
      <Suspense fallback={`loading`}>
        <DynamicLazyProjectSection />
        <DynamicLazySkillSection />
        <DynamicLazyAwardSection />
        <DynamicLazyCertificateSection />
        <DynamicLazyBlogSection />
        <DynamicLazyContactSection />
      </Suspense>
      <ScrollToTopBtn />
    </>
  );
}
