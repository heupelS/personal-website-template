import React, { useState } from "react";
import avatar from "../../assets/AiAvatar.jpg";
import vacation_picture from "../../assets/vacation_picture.jpg";

export default function FlipImage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const containerStyles = {
    width: "30vh",
    paddingBottom: "30vh", // Maintain a 1:1 aspect ratio (change this value for different ratios)
    position: "relative",
    overflow: "hidden",
  };

  const imgStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover", // Maintain aspect ratio without stretching
    transition: "transform 0.5s",
    backfaceVisibility: "hidden",
    borderRadius: "50%",
  };

  const frontStyles = {
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
  };

  const backStyles = {
    transform: isFlipped ? "rotateY(0)" : "rotateY(-180deg)",
  };

  const handleMouseEnter = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <div style={containerStyles} onMouseEnter={handleMouseEnter}>
      <div style={{ ...imgStyles, ...frontStyles }}>
        <img src={avatar} alt="avatar front" style={imgStyles} />
      </div>
      <div style={{ ...imgStyles, ...backStyles }}>
        <img src={vacation_picture} alt="avatar back" style={imgStyles} />
      </div>
    </div>
  );
}
