import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/variables.css";
import { ToggleColorMode } from "./components/themes/ThemeProvider";
import Header from "./components/Header.js";
import Footer from "./pages/Footer";
import AppRouter from "./AppRouter";

function App() {
  return (
    <ToggleColorMode>
      <CssBaseline enableColorScheme />
      <Header />
      <AppRouter></AppRouter>
      <Footer />
    </ToggleColorMode>
  );
}

export default App;
