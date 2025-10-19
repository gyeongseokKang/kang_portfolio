import AchievementsSection from "@/feature/portfolio/ui/achievements-section";
import ActivitySection from "@/feature/portfolio/ui/activity-section";
import ExperienceSection from "@/feature/portfolio/ui/experience-section";
import HeroSection from "@/feature/portfolio/ui/hero-section";
import ProjectSection from "@/feature/portfolio/ui/project-section";
import RetrospectiveSection from "@/feature/portfolio/ui/retrospective-section";

export default function Home() {
  return (
    <div className="mx-auto p-8 justify-center flex flex-col gap-10">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ActivitySection />
      <AchievementsSection />
      <RetrospectiveSection />
    </div>
  );
}
