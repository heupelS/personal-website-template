import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { getDesignTokens } from "./Palette";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ToggleColorMode({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(() => {
    const storedMode = localStorage.getItem("colorMode");
    return storedMode ? storedMode : prefersDarkMode ? "dark" : "light";
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("colorMode", newMode);
          updateThemeColor(newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = responsiveFontSizes(createTheme(getDesignTokens(mode)), [mode]);

  const updateThemeColor = React.useCallback(() => {
    const themeColor = document.querySelector("meta[name=theme-color]");
    if (themeColor) {
      themeColor.setAttribute("content", theme.palette.background.default);
    }
  }, [theme]);

  React.useEffect(() => {
    updateThemeColor();
  }, [updateThemeColor]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => React.useContext(ColorModeContext);
