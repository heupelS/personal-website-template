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
          width: "40px",
          height: "40px",
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
