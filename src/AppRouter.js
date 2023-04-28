import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<Home />} />
        {/*         <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
