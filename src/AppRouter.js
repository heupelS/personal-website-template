import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Interface from "./pages/Interface";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interface />}>
          <Route index element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
        <Route
          path="/Projects/:projectName/*"
          element={
            <Interface>
              {" "}
              <ProjectDetail />
            </Interface>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
