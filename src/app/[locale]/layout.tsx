import { routing } from "@/i18n/routing";

import { AppSidebar } from "@/components/app-sidebar";
import { BottomDock } from "@/components/bottom-dock";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import "../globals.css";

export const metadata: Metadata = {
  title: "Handy Portfolio",
  description: "Handy Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className="size-full">
        <ThemeProvider
          storageKey="handy-portfolio-theme"
          attribute={"class"}
          defaultTheme="system"
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <SidebarProvider>
              <AppSidebar />
              <main className="relative size-full">
                <div className="fixed top-2 right-2 z-50 flex gap-2 ">
                  <AnimatedThemeToggler />
                  <LocaleSwitcher />
                </div>
                <SidebarTrigger />
                <ScrollArea type="always">{children}</ScrollArea>
                <div className="fixed bottom-2 right-2 z-50 flex gap-2 ">
                  <BottomDock />
                </div>
              </main>
            </SidebarProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
