import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Resume from "../../assets/resume.json";

export default function SocialIcons(theme) {
  theme = useTheme();

  return (
    <Container
      sx={{
        position: "absolute",
        top: "20vh",
        right: 12,
      }}
    >
      <div>Hallo wo bin ich</div>
      {Resume.basics.profiles.map((profile) => (
        <Link
          href={profile.url}
          key={profile.network.toLowerCase()}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="inherit"
        >
          <Tooltip
            title={profile.username}
            placement="left"
            TransitionComponent={Zoom}
            color="inherit"
          >
            <IconButton
              aria-label={profile.network}
              sx={{
                height: "2.5rem",
                width: "2.5rem",
                display: "block",
                marginBottom: theme.spacing(2),
                color: "inherit",
              }}
            >
              <i
                className={`${profile.x_icon}`}
                sx={{
                  icon: {
                    fontSize: "1.25rem",
                    color: "inherit",
                  },
                }}
              ></i>
            </IconButton>
          </Tooltip>
        </Link>
      ))}
    </Container>
  );
}
