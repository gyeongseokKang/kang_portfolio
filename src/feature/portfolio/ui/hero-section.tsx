import { cn } from "@/lib/utils";
import Image from "next/image";
import { BlogInfoItem } from "./blog-info-item";
import { CareerBreadcrumb } from "./career-breadcrumb";
import IntroCard from "./intro-card";
import { StackList } from "./stack-list";

export default function HeroSection() {
  return (
    <section className={cn("space-y-2 container mx-auto min-h-svh")}>
      <div className="flex justify-between items-center size-full flex-col-reverse lg:flex-row">
        <div className="flex flex-1 justify-center flex-col items-center">
          <CareerBreadcrumb />
          <BlogInfoItem />
          <StackList />
        </div>
        <div className="flex flex-wrap gap-4">
          <IntroCard />
          <Image
            className="rounded-xl"
            src="/images/Handy.jpg"
            alt="Handy"
            width={360}
            height={640}
          />
        </div>
      </div>
    </section>
  );
}
