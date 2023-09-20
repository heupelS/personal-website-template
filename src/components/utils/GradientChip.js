import { styled } from "@mui/system";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const GradientChip = styled(Chip)(({ theme }) => ({
  border: "none",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: theme.palette.background.gradient,
    borderRadius: "inherit", // same border-radius as the button
    zIndex: 1,
    transition: "0.5s",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "1px",
    right: "1px",
    bottom: "1px",
    left: "1px",
    borderRadius: "inherit",
    background: `${theme.palette.background.infobox} !important`,
    zIndex: 2,
  },
  "& > span": {
    position: "relative",
    zIndex: 3,
  },
}));

export default function MyGradientChip({ label, ...props }) {
  return (
    <GradientChip
      variant="outlined"
      label={<Typography variant="caption">{label}</Typography>}
      {...props}
    />
  );
}
