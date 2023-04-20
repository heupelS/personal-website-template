import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Content(theme) {
  theme = useTheme();
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "auto",
          marginBottom: "auto",
          "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
          },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          <p>Hi, I am Simeon</p>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          <p>
            an information systems student <br /> based in Berlin, Germany.
          </p>
        </Typography>
      </Container>
    </div>
  );
}
