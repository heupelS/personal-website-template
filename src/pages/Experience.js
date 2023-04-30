import CustomizedTimeline from "../components/timeline";
import Box from "@mui/material/Box";

export default function Experience() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "30vh",
        left: "0",
        right: "0",
        margin: "auto",
        width: "60vw",
        height: "100vh",
      }}
    >
      <CustomizedTimeline></CustomizedTimeline>
    </Box>
  );
}
