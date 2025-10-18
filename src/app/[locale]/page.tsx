import ExperienceSection from "@/feature/portfolio/ui/experience-section";
import HeroSection from "@/feature/portfolio/ui/hero-section";
import ProjectSection from "@/feature/portfolio/ui/project-section";

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-4xl gap-4 flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
    </div>
  );
}
