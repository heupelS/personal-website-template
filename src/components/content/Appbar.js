import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function HeaderBar({ children }) {
  return (
    <header>
      <Box>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Interests</Button>
            <Button color="inherit">Projects</Button>
            {children}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
