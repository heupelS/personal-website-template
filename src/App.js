import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/variables.css";
import { ToggleColorMode } from "./components/themes/ThemeProvider";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  return (
    <ToggleColorMode>
      <CssBaseline />
      <Header />
      <Main></Main>
      <Footer />
    </ToggleColorMode>
  );
}

export default App;
