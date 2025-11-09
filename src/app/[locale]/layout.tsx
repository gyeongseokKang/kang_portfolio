import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { BottomDock } from "@/components/bottom-dock";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { routing } from "@/i18n/routing";
import { AppSidebar } from "@/shared/ui/app-sidebar";
import "../globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/images/intro/character_op.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

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
        <meta
          name="google-site-verification"
          content="4Krut1DFj0ODK-gyhzjhbBSz-R9WtgvXE2Mndz9ZIRQ"
        />
        <meta
          name="naver-site-verification"
          content="caf276500aef5508a9380ca9dad2f487f9a13c54"
        />
      </head>
      <body className="size-full">
        <ThemeProvider
          storageKey="handy-portfolio-theme"
          attribute={"class"}
          defaultTheme="system"
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <SidebarProvider open>
              <AppSidebar />
              <main className="relative size-full">
                <div className="fixed top-2 right-2 z-50 flex gap-2 ">
                  <AnimatedThemeToggler />
                  <LocaleSwitcher />
                </div>
                <ScrollArea type="always">{children}</ScrollArea>
                <div className="fixed bottom-2 right-2 z-50 flex gap-2 items-end">
                  <BottomDock />
                  <ScrollToTop />
                </div>
              </main>
            </SidebarProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-FQW7XDZVVL" />
      <Analytics />
    </html>
  );
}
