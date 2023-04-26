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
            marginBottom: theme.spacing(2),
            backgroundColor: "transparent",
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
            ":hover": {
              backgroundImage: theme.palette.background.gradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            },
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
        position: "fixed",
        top: "50%",
        right: theme.spacing(2),
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Icons}
    </Box>
  );
}
