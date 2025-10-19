import { AuroraText } from "@/components/ui/aurora-text";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BlogInfoItem } from "./blog-info-item";
import BookCard from "./book-card";
import { CareerBreadcrumb } from "./career-breadcrumb";
import IntroCard from "./intro-card";
import { StackList } from "./stack-list";
import WorkingDayCard from "./working-day-card";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className={cn("space-y-4 mx-auto flex flex-col")}>
      <div className="text-2xl lg:text-5xl font-semibold text-center py-16">
        <AuroraText>{t("intro.title")}</AuroraText>
      </div>
      <div className="flex justify-between gap-8 items-center size-full flex-col-reverse lg:flex-row flex-wrap">
        <IntroCard />
        <div className="flex flex-col gap-8">
          <CareerBreadcrumb />
          <BlogInfoItem />
          <WorkingDayCard />
        </div>
        <StackList />
        <BookCard />
        <div>
          <Image
            className="rounded-xl"
            src="/images/Handy2.jpg"
            alt="Handy"
            width={240}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
