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
    // Check local storage for the selected color mode
    const storedMode = localStorage.getItem("colorMode");
    return storedMode ? storedMode : prefersDarkMode ? "dark" : "light";
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          // Store the selected color mode in local storage
          localStorage.setItem("colorMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = responsiveFontSizes(createTheme(getDesignTokens(mode)), [mode]);

  function setBodyBackgroundColor() {
    document.body.style.backgroundColor = theme.palette.background.default; // Change these values as per your theme.
  }

  setBodyBackgroundColor();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => React.useContext(ColorModeContext);
