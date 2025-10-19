import { AuroraText } from "@/components/ui/aurora-text";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BlogInfoItem } from "./blog-info-item";
import BookCard from "./book-card";
import { CareerBreadcrumb } from "./career-breadcrumb";
import IntroCard from "./intro-card";
import { StackList } from "./stack-list";
import TenCommandments from "./ten-commandments";
import WorkingDayCard from "./working-day-card";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className={cn("space-y-4 mx-auto flex flex-col")}>
      <div className="text-2xl lg:text-5xl font-semibold text-center py-4 lg:py-16">
        <AuroraText>{t("intro.title")}</AuroraText>
      </div>

      <div
        className={cn(
          "2xl:grid-cols-3",
          "lg:grid-cols-2",
          "grid grid-cols-1 items-center gap-8"
        )}
      >
        <IntroCard />
        <div className="flex flex-col items-center gap-8">
          <CareerBreadcrumb />
          <BlogInfoItem />
          <WorkingDayCard />
        </div>
        <StackList />

        <BookCard />

        <TenCommandments />
        <div className="mx-auto">
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
