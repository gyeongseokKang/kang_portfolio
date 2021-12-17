import * as React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { createTheme, useMediaQuery } from "@mui/material";
import { ColorModeContext, getDesignTokens } from "../src/store/ThemeStore";
import "./index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      setLightMode: () => {
        setMode("light");
      },
      setDarkMode: () => {
        setMode("dark");
      },
      setSystemMode: () => {
        setMode(prefersDarkMode ? "dark" : "light");
      },
      currentColormode: mode,
    }),
    [mode, prefersDarkMode]
  );

  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode, prefersDarkMode]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Handy | 편리함을 추구하는 개발자 </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="4Krut1DFj0ODK-gyhzjhbBSz-R9WtgvXE2Mndz9ZIRQ" />
        <meta name="naver-site-verification" content="caf276500aef5508a9380ca9dad2f487f9a13c54" />
        <meta
          name="keywords"
          content="개발자,프로그래머,프론트엔드,포트폴리오,강경석,kang,handy,portfolio,frontend,gyeongseok"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <DefaultSeo
        canonical={"https://kang-portfolio.vercel.app/"}
        description={"React & TypeScript 기반의 3년차 프론트엔드 개발자 강경석의 포트폴리오입니다."}
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
          description: "React & TypeScript 기반의 3년차 프론트엔드 개발자 강경석입니다.",
          site_name: "Handy | 편리함을 추구하는 개발자",
        }}
      />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
