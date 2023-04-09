import { useRef } from "react";
import tree from "../../assets/tree.jpg";
import cat from "../../assets/cat.gif";
import HeaderBar from "../content/Appbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { blue } from "@mui/material/colors";

export function SlidingLayers({ children }) {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer style={{ zIndex: 10001 }}>
          <HeaderBar></HeaderBar>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${tree})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${tree})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
      {children}
    </div>
  );
}
