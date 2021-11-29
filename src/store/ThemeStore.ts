import React from "react";
import { PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  setLightMode: () => {},
  setDarkMode: () => {},
  setSystemMode: () => {},
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light modetheme
          custom: {
            hover: "#F1FFE3",
          },
          primary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
          },
        }
      : {
          // palette values for dark mode
          custom: {
            hover: "#12121a",
          },
          primary: {
            main: "#90caf9",
            light: "#0d58a3",
            dark: "#42a5f5",
          },
        }),
  },
  typography: {
    fontFamily: ["Noto Sans CJK KR", "Arial"].join(","),
    fontWeight: 400,
  },
});
