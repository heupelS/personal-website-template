import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";
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
    >
      <IconButton
        id="darkmode-button"
        onClick={toggleColorMode}
        sx={{
          boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        }}
      >
        {theme.palette.mode === "dark" ? (
          <i class="material-icons-outlined">dark_mode</i>
        ) : (
          <i class="material-icons-outlined">light_mode</i>
        )}
      </IconButton>
    </Tooltip>
  );
}
