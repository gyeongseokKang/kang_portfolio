import SplashScreen from "@/components/ui/splash-screen";
import HeroSection from "@/feature/portfolio/ui/hero-section";
import AchievementsSectionLazy from "@/feature/portfolio/ui/lazy/achievements-section-lazy";
import ActivitySectionLazy from "@/feature/portfolio/ui/lazy/activity-section-lazy";
import ExperienceSectionLazy from "@/feature/portfolio/ui/lazy/experience-section-lazy";
import ProjectSectionLazy from "@/feature/portfolio/ui/lazy/project-section-lazy";
import RetrospectiveSectionLazy from "@/feature/portfolio/ui/lazy/retrospective-section-lazy";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="mx-auto p-8 justify-center flex flex-col gap-10">
        <HeroSection />
        <ExperienceSectionLazy />
        <ProjectSectionLazy />
        <ActivitySectionLazy />
        <AchievementsSectionLazy />
        <RetrospectiveSectionLazy />
      </div>
    </>
  );
}
