"use client";

import { useLocale } from "next-intl";
import { LOCALES } from "@/i18n/constant";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

export function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex gap-2">
      <ButtonGroup>
        {LOCALES.map((item) => {
          return (
            <Button asChild key={item} variant={"outline"} size={"sm"}>
              <Link
                href={item}
                className={cn(
                  "uppercase text-xs",
                  locale === item && "!text-primary",
                )}
              >
                {item}
              </Link>
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}
