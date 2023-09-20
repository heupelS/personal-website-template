import * as React from "react";
import { Container } from "@mui/material";
import Content from "../components/content/Content";
import resume from "../assets/resume.json";

export default function Home() {
  document.title = resume.basics.name;
  return (
    <>
      <Container>
        <Content></Content>
      </Container>
    </>
  );
}
