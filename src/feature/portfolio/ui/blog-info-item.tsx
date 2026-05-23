import { ChevronRightIcon, Rss } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { LabeledSection } from "./labeled-section";

export function BlogInfoItem() {
  const t = useTranslations("hero");

  return (
    <LabeledSection label={t("blog.label")} className="w-full max-w-xs">
      <Link
        href="https://all-dev-kang.tistory.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <Rss className="size-4 shrink-0 text-muted-foreground" />
        <div className="min-w-0 flex-1">
          <p className="m-0 text-sm font-medium leading-snug">
            {t("blog.title")}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <Badge variant="secondary">#Blog</Badge>
            <Badge variant="secondary">#0.7M View</Badge>
            <Badge variant="secondary">#400 posts</Badge>
          </div>
        </div>
        <ChevronRightIcon className="size-4 shrink-0 transition-all group-hover:translate-x-1 group-hover:size-5" />
      </Link>
    </LabeledSection>
  );
}
