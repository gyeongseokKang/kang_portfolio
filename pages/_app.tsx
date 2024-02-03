import "./index.css";

import { EmotionCache } from "@emotion/react";

import { NextUIProvider } from "@nextui-org/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Head>
          <title>Handy | 편리함을 추구하는 개발자 </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="google-site-verification"
            content="4Krut1DFj0ODK-gyhzjhbBSz-R9WtgvXE2Mndz9ZIRQ"
          />
          <meta
            name="naver-site-verification"
            content="caf276500aef5508a9380ca9dad2f487f9a13c54"
          />
          <meta
            name="keywords"
            content="개발자,프로그래머,프론트엔드,포트폴리오,강경석,핸디,handy,portfolio,frontend,gyeongseok"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <DefaultSeo
          canonical={"https://kang-portfolio.vercel.app/"}
          description={
            "Web과 App를 다루는 6년차 프론트엔드 개발자 강경석(핸디)의 포트폴리오입니다."
          }
          openGraph={{
            type: "website",
            title: "Handy | 편리함을 추구하는 개발자",
            images: [
              {
                url: "/images/intro/character_op.png",
                width: 800,
                height: 600,
                alt: "kang's image",
              },
            ],
            description:
              "Web과 App를 다루는 6년차 프론트엔드 개발자 강경석(핸디)의 포트폴리오입니다.",
            site_name: "Handy | 편리함을 추구하는 개발자",
          }}
        />
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
