import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Resume from "../../assets/resume.json";
import Box from "@mui/material/Box";

export default function SocialIcons({ theme }) {
  theme = useTheme();

  const Icons = Resume.basics.profiles.map((profile) => (
    <Link
      href={profile.url}
      key={profile.network.toLowerCase()}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
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
            marginBottom: theme.spacing(2),
            backgroundImage: theme.palette.background.gradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <i
            className={`${profile.x_icon}`}
            sx={{
              fontSize: "1.25rem",
            }}
          ></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Icons}
    </Box>
  );
}
