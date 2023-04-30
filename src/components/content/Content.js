import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Content(theme) {
  theme = useTheme();
  return (
    <Container
      maxWidth="xs"
      sx={{
        width: "50%",
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
      <Typography variant="h2" component="h1">
        <p>Hi, I am Simeon</p>
      </Typography>
      <Typography variant="h5" component="h1">
        <p>
          an information systems student <br /> based in Berlin, Germany.
        </p>
      </Typography>
    </Container>
  );
}
