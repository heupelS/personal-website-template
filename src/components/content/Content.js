import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import FlipImage from "../utils/FlipImage";

export default function Content(theme) {
  theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "80%",
        marginTop: "auto",
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
            Hi, I am Simeon
          </Typography>
          <Typography variant="h5" component="h1">
            <p>
              an information systems student <br /> based in Berlin, Germany.
            </p>
          </Typography>
        </Grid>
        {/* Image */}

        <Grid item xs={12} sm={4}>
          <FlipImage />
        </Grid>
      </Grid>
    </Container>
  );
}
