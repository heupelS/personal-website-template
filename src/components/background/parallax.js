import { useRef } from "react";
import tree from "../../assets/tree.jpg";
import cat from "../../assets/cat.gif";
import HeaderBar from "../content/Appbar";
import Box from "@mui/material/Box";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export function SlidingLayers({ children }) {
  const ref = useRef();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={3} ref={ref} offset={0} speed={0}>
        <ParallaxLayer style={{ zIndex: 10001, top: "0" }}>
          <HeaderBar></HeaderBar>
        </ParallaxLayer>
        <Box
          variant="img"
          src="/public/logo-256.png"
          alt="logo"
          sx={{
            bottom: 0,
            right: 0,
            zIndex: 10000,
          }}
        ></Box>
        <Box variant="img" src="/public/logo-256.png" alt="logo"></Box>
        <Box variant="img" src="/public/logo-256.png" alt="logo"></Box>
      </Parallax>
      {children}
    </div>
  );
}
