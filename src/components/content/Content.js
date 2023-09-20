import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import FlipImage from "../utils/FlipImage";
import Resume from "../../assets/resume.json";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Content(theme) {
  theme = useTheme();
  const ismobile = useMediaQuery("(max-width:1180px)");
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "80%",
        marginTop: ismobile ? "10vh" : "auto",
        marginBottom: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
      }}
    >
      <Grid container spacing={2}>
        {/* Text */}
        <Grid item xs={12} sm={8}>
          <Typography variant="h2" component="h1">
            Hi, I am {Resume.basics.name}
          </Typography>
          <Typography variant="h5" component="h1">
            {Resume.basics.label} <br /> in {Resume.basics.location.city},{" "}
            {Resume.basics.location.country}.
          </Typography>
          <Typography variant="body1" component="h1">
            <p>{Resume.basics.summary}</p>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FlipImage />
        </Grid>
      </Grid>
    </Container>
  );
}
