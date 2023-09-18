import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/logo_transparent.png";
import { useTheme } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const navItems = [
  { id: "", name: "Home" },
  { id: "Experience", name: "Experience" },
  { id: "Projects", name: "Projects" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  const slideDuration = 300;

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      timeout={slideDuration}
    >
      {children}
    </Slide>
  );
}

export default function Header(props) {
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
        background: theme.palette.background.paper,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Link
              to={item.id}
              style={{
                textDecoration: "none",
                underline: "none",
                justifyContent: "center",
                minWidth: 0,
                textAlign: "center",
              }}
              key={item.id}
            >
              <ListItemButton>
                <ListItemText primary={item.name} />
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
    <Box sx={{ display: "flex", background: theme.palette.background.paper }}>
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{ background: theme.palette.background.paper }}
          position="fixed"
        >
          <Toolbar>
            <Link to="">
              <Box
                component="img"
                variant="image"
                sx={{
                  my: "auto",
                  width: "12vh",
                  height: "12vh",
                  display: { sm: "none" },
                }}
                src={logo}
                alt="logo"
              />
            </Link>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                marginLeft: "auto",
                mr: 2,
                display: { sm: "none" },
                textDecoration: "none",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="">
              <Box
                component="img"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: "12vh",
                  height: "12vh",
                  textDecoration: "none",
                }}
                src={logo}
                alt="logo"
              />
            </Link>
            <Box
              sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
            >
              {navItems.map((item) => (
                <Link
                  to={item.id}
                  key={item.id}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button>{item.name}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
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
      <Outlet />
    </Box>
  );
}
