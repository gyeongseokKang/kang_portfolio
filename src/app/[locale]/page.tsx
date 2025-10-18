import AchievementsSection from "@/feature/portfolio/ui/achievements-section";
import ActivitySection from "@/feature/portfolio/ui/activity-section";
import ExperienceSection from "@/feature/portfolio/ui/experience-section";
import HeroSection from "@/feature/portfolio/ui/hero-section";
import ProjectSection from "@/feature/portfolio/ui/project-section";

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-4xl flex flex-col gap-10">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ActivitySection />
      <AchievementsSection />
    </div>
  );
}
