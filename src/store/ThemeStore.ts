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
        }
      : {
          // palette values for dark mode
          custom: {
            hover: "#12121a",
          },
        }),
  },
  typography: {
    fontFamily: ["Noto Sans CJK KR", "Arial"].join(","),
  },
});
