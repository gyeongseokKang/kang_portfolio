import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BlogInfoItem } from "./blog-info-item";
import { CareerBreadcrumb } from "./career-breadcrumb";

export default function HeroSection() {
  return (
    <section>
      <CareerBreadcrumb />
      <BlogInfoItem />
      <ContainerTextFlip
        className="text-4xl border"
        words={["TypeScript", "JavaScript", "React.js", "Next.js"]}
      />
    </section>
  );
}
