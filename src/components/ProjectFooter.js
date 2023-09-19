import React from "react";
import { Typography, Box, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { GradientColorSVG } from "./utils/GradientSVG";

export function ProjectFooter({
  projects,
  nextProjectRoutername,
  nextProjectIndex,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        mt: 4,
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
    >
      <Link
        href={`../${nextProjectRoutername}`}
        style={{ textDecoration: "none", display: "flex", width: "100%" }}
      >
        <Box sx={{ flex: "0 0 50%" }}>
          <Typography variant="h4" color="text.primary">
            Next Project
          </Typography>
          <GradientColorSVG />
          <ArrowForwardIcon
            sx={{
              mt: 1,
              color: "text.primary",
              marginLeft: isHovered ? "10px" : "0",
              transition: "margin-left 0.3s ease-in-out",
              fill: isHovered ? "url(#linearGradientColor)" : "text.primary",
            }}
          />
        </Box>
        <Box sx={{ flex: "0 0 50%", textAlign: "right" }}>
          <Typography variant="h4" color="text.primary">
            {projects[nextProjectIndex].name}
          </Typography>
          <Typography variant="h5" color="text.primary">
            {projects[nextProjectIndex].category}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
