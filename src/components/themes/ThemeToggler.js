import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "./ThemeProvider";

export default function ThemeToggler() {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  return (
    <Tooltip
      title={
        theme.palette.mode === "dark" ? "Toggle Light mode" : "Toggle Dark mode"
      }
      placement="right"
      TransitionComponent={Zoom}
      arrow
    >
      <IconButton id="darkmode-button" onClick={toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <LightModeRoundedIcon />
        ) : (
          <DarkModeIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}
