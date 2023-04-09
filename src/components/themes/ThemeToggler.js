import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "./ThemeProvider";

export default function ThemeToggler({ children }) {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = React.useContext(ColorModeContext);
  return (
    <IconButton
      id="darkmode-button"
      sx={{ ml: 1 }}
      onClick={toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <LightModeRoundedIcon />
      ) : (
        <DarkModeIcon />
      )}
    </IconButton>
  );
}
