import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../components/themes/ThemeProvider";
import { SlidingLayers } from "../components/background/parallax";
import ThemeToggler from "../components/themes/ThemeToggler";
import { Parallax } from "@react-spring/parallax";

export default function Main() {
  return (
    <main>
      <ThemeToggler></ThemeToggler>
      <SlidingLayers></SlidingLayers>
    </main>
  );
}
