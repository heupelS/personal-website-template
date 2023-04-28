import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../components/themes/ThemeProvider";
import { SlidingLayers } from "../components/background/parallax";
import ThemeToggler from "../components/themes/ThemeToggler";
import { Container, Typography } from "@mui/material";
import Content from "../components/content/Content";
import SocialIcons from "../components/Socials";
import CustomizedTimeline from "../components/timeline";

export default function Home() {
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <ThemeToggler></ThemeToggler>
        <Content></Content>
      </Container>
      <SocialIcons></SocialIcons>
      <CustomizedTimeline id="Experience"></CustomizedTimeline>
      {/* <SlidingLayers></SlidingLayers> */}
    </>
  );
}
