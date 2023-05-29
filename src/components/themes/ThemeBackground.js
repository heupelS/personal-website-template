import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import * as React from "react";

export const MetaThemeColor = () => {
  const theme = useTheme();
  const metaThemeColor = document.querySelector("meta[name=theme-color]");

  React.useEffect(() => {
    metaThemeColor.setAttribute("content", theme.palette.background.default);
  }, [theme.palette.background.default, metaThemeColor]);

  return null;
};
