import { useTheme } from "@mui/material/styles";
import * as React from "react";

export const MetaThemeColor = () => {
  const theme = useTheme();

  React.useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme.palette.background.default);
    }
  }, [theme.palette.background.default]);

  return null;
};
