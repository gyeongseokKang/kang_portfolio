"use client";

import { MdGTranslate } from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALES } from "@/i18n/constant";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MdGTranslate />
            <span className="capitalize">{locale}</span>
            <span className="sr-only">Change language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="max-w-20">
          {LOCALES.map((item) => (
            <Link href={item} className="capitalize" key={item}>
              <DropdownMenuCheckboxItem checked={locale === item}>
                {item}
              </DropdownMenuCheckboxItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
