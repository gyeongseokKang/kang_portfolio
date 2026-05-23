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
      <div className="mx-auto p-8 justify-center flex flex-col gap-10 mb-20">
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
