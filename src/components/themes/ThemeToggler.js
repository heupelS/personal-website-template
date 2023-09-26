import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ColorModeContext } from "./ThemeProvider";

export default function ThemeToggler() {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const matches = useMediaQuery("(max-width:767px)");

  const handleClick = () => {
    toggleColorMode();
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme.palette.background.default);
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.setAttribute("name", "theme-color");
      newMetaTag.setAttribute("content", theme.palette.background.default);
      document.getElementsByTagName("head")[0].appendChild(newMetaTag);
    }
  };

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
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: theme.spacing(0),
          left: matches ? "auto" : theme.spacing(2),
          right: matches ? theme.spacing(2) : "auto",
          zIndex: 10000,
          width: "40px",
          height: "40px",
        }}
      >
        {theme.palette.mode === "dark" ? (
          <span className="material-icons-outlined">dark_mode</span>
        ) : (
          <span className="material-icons-outlined">light_mode</span>
        )}
      </IconButton>
    </Tooltip>
  );
}
