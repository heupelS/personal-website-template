import { useRef } from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Typography } from "@mui/material";

export function SlidingLayers({ children }) {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={3} ref={ref} offset={0} speed={0}>
        <ParallaxLayer style={{ zIndex: 10001, top: "0" }}>
          <Header></Header>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.05}>
          <Box>
            <Typography variant="h1" component="h2" gutterBottom>
              <p>Hi, I am Simeon</p>
            </Typography>
            <Typography variant="h2">
              <p>
                an information systems student <br /> based in Berlin, Germany.
              </p>
            </Typography>
          </Box>
        </ParallaxLayer>
        {/* <ParallaxLayer
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        /> */}
      </Parallax>
      {children}
    </div>
  );
}
