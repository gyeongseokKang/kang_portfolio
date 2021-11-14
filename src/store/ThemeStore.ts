import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import React from "react";

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
          // palette values for light mode
        }
      : {
          // palette values for dark mode
        }),
  },
});
