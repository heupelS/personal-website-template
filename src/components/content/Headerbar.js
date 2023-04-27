import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo_transparent.png";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";

const navItems = [
  { id: "about-me", name: "About Me" },
  { id: "experience", name: "Experience" },
];

// future nav items
/* const navItems = [
  { id: "about-me", name: "About Me" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "interests", name: "Interests" },
  { id: "projects", name: "Projects" },
]; */

export default function HeaderBar(props) {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: theme.palette.background.default,
      }}
    >
      <Box
        component="img"
        variant="image"
        sx={{
          my: "auto",
          width: "10vh",
          height: "10vh",
        }}
        src={logo}
        alt="logo"
      />
      <Divider
        variant="middle"
        background={theme.palette.background.gradient}
      />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link
              href={`#${item.id}`}
              sx={{ color: "inherit" }}
              key={item.id}
              underline="none"
            >
              <ListItemButton sx={{ justifyContent: "center", minWidth: 0 }}>
                <ListItemText
                  primary={item.name}
                  sx={{ textAlign: "center" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Box
            component="img"
            variant="image"
            sx={{
              my: "auto",
              width: "10vh",
              height: "10vh",
              display: { sm: "none" },
            }}
            src={logo}
            alt="logo"
          />
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginLeft: "auto", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            sx={{
              display: { xs: "none", sm: "block" },
              width: "10vh",
              height: "10vh",
            }}
            src={logo}
            alt="logo"
          />
          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
          >
            {navItems.map((item) => (
              <Link
                href={`#${item.id}`}
                sx={{ color: "inherit" }}
                key={item.id}
              >
                <Button>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="top"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              opacity: 1,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
