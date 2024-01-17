import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/variables.css";
import { ToggleColorMode } from "./components/themes/ThemeProvider";
import AppRouter from "./AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <ToggleColorMode>
      <CssBaseline enableColorScheme />
      <AppRouter></AppRouter>
      <SpeedInsights />
    </ToggleColorMode>
  );
}

export default App;
