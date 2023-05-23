import * as React from "react";
import { Container } from "@mui/material";
import Content from "../components/content/Content";

export default function Home() {
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <Content></Content>
      </Container>
      {/* <SlidingLayers></SlidingLayers> */}
    </>
  );
}
