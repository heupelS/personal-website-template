import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../components/themes/ThemeProvider";
import { SlidingLayers } from "../components/background/parallax";
import ThemeToggler from "../components/themes/ThemeToggler";
import { Parallax } from "@react-spring/parallax";
import Button from "@mui/material/Button";
import HeaderBar from "../components/content/Headerbar";
import { Typography } from "@mui/material";
import Content from "../components/content/Content";
import SocialIcons from "../components/content/Socials";

export default function Main() {
  return (
    <>
      <ThemeToggler></ThemeToggler>
      <Content></Content>
      <SocialIcons></SocialIcons>
      {/* <SlidingLayers></SlidingLayers> */}
    </>
  );
}
