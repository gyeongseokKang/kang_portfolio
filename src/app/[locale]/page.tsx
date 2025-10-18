import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BlogInfoItem } from "@/feature/portfolio/ui/blog-info-item";
import { CareerBreadcrumb } from "@/feature/portfolio/ui/career-breadcrumb";

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-4xl gap-4 flex flex-col">
      <CareerBreadcrumb />
      <BlogInfoItem />
      <ContainerTextFlip
        className="text-4xl border"
        words={["TypeScript", "JavaScript", "React.js", "Next.js"]}
      />
    </div>
  );
}
