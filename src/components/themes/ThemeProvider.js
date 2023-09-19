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
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() =>
    responsiveFontSizes(createTheme(getDesignTokens(mode)), [mode])
  );

  React.useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme.palette.background.default);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "theme-color");
      newMeta.setAttribute("content", theme.palette.background.default);
      document.getElementsByTagName("head")[0].appendChild(newMeta);
    }
  }, [mode, theme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => React.useContext(ColorModeContext);
