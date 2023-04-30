import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/variables.css";
import { ToggleColorMode } from "./components/themes/ThemeProvider";
import Footer from "./pages/Footer";
import AppRouter from "./AppRouter";

function App() {
  return (
    <ToggleColorMode>
      <CssBaseline enableColorScheme />
      <AppRouter></AppRouter>
    </ToggleColorMode>
  );
}

export default App;
