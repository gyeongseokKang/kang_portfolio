import SplashScreen from "@/components/ui/splash-screen";
import AchievementsSection from "@/feature/portfolio/ui/achievements-section";
import ActivitySection from "@/feature/portfolio/ui/activity-section";
import CareerSection from "@/feature/portfolio/ui/career-section";
import ExperienceSection from "@/feature/portfolio/ui/experience-section";
import HeroSection from "@/feature/portfolio/ui/hero-section";
import ProjectSection from "@/feature/portfolio/ui/project-section";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="mx-auto mb-20 box-border flex w-full min-w-0 max-w-full flex-col justify-center gap-10 overflow-x-clip px-4 py-8 sm:px-8">
        <HeroSection />
        <CareerSection />
        <ProjectSection />
        <ActivitySection />
        <AchievementsSection />
        <ExperienceSection />
      </div>
    </>
  );
}
