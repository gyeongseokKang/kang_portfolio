import * as React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Kang's Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <DefaultSeo
        description={"3년차 프론트앤드 개발자, 강경석의 포트폴리오 사이트"}
        openGraph={{
          type: "website",
          // url: "https://www.roundin.kr/",
          title: "Kang's Portfolio",
          description:
            "안녕하세요. 강경석입니다. 사랑받는 서비스와 제대로 동작하는 프로그램을 만들고 싶은 프론트엔드 개발자입니다.",
          // images: [
          //   {
          //     url: "https://www.roundin.kr/images/seo_bg.png",
          //     width: 800,
          //     height: 600,
          //     alt: "Kang's Portfolio image",
          //   },
          // ],
          site_name: "Kang's Portfolio",
        }}
      />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
