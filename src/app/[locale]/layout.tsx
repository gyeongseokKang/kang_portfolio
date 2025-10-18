import { routing } from "@/i18n/routing";

import { AppSidebar } from "@/components/app-sidebar";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import "../globals.css";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
                <SidebarTrigger />
                <div className="absolute top-2 right-2 space-x-2">
                  <AnimatedThemeToggler />
                  <LocaleSwitcher />
                </div>
                {children}
              </main>
            </SidebarProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
