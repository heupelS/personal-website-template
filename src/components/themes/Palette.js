import { cyan, purple, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) =>
  Object.assign(
    // merge palette with global component custom styles
    {
      palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: cyan,
              secondary: purple,
              background: {
                default: "#ffffff",
                paper: "#fff",
                gradient: `linear-gradient(to right, #2C3A8B 0%, 10.203412073490814%, #294495 20.406824146981627%, 30.183727034120736%, #1E5DAA 39.960629921259844%, 49.86876640419948%, #0E89D0 59.7769028871391%, 70.11154855643045%, #04A3E5 80.4461942257218%, 90.2230971128609%, #01ADEE 100%);`,
              },
              text: {
                primary: "#121212",
                secondary: "#121212",
              },
              action: { hover: "none", hoverOpacity: 0 },
            }
          : {
              // palette values for dark mode
              primary: cyan,
              background: {
                default: grey,
                paper: "#141313",
                infobox: "#212121",
                gradient: `linear-gradient(to right, #2C3A8B 0%, 10.203412073490814%, #294495 20.406824146981627%, 30.183727034120736%, #1E5DAA 39.960629921259844%, 49.86876640419948%, #0E89D0 59.7769028871391%, 70.11154855643045%, #04A3E5 80.4461942257218%, 90.2230971128609%, #01ADEE 100%);`,
              },
              text: {
                primary: "#fff",
                secondary: grey[500],
              },
              action: { hover: "none", hoverOpacity: 0, click: "none" },
            }),
      },
    },
    // global component custom styles for Buttons etc.
    {
      typography: {
        fontSize: 16,
        htmlFontSize: 16,
        h2: {
          fontWeight: 500,
        },
        h5: {
          fontWeight: 500,
          fontFamily: "Roboto Mono, monospace",
        },
        body1: {
          fontWeight: 500,
          fontFamily: "Roboto Mono, monospace",
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {},
        },
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
        MuiButton: {
          styleOverrides: {
            root: ({ theme }) => ({
              color: theme.palette.text.primary,
              ":hover": {
                backgroundImage: theme.palette.background.gradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              },
            }),
          },
        },
        MuiListItemButton: {
          styleOverrides: {
            root: ({ theme }) => ({
              marginBottom: theme.spacing(2),
              color: theme.palette.text.primary,
              backgroundColor: "transparent",
              background: "inherit",
              "@media (hover: hover)": {
                "&:hover": {
                  backgroundImage: theme.palette.background.gradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                },
              },
            }),
          },
        },        
        MuiIconButton: {
          styleOverrides: {
            root: ({ theme }) => ({
              marginBottom: theme.spacing(2),
              backgroundColor: "transparent",
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
              color: "inherit",
              background: "inherit",
              "@media (hover: hover)": {
              ":hover": {
                backgroundImage: theme.palette.background.gradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              },
            },
            }),
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: ({ theme }) => ({
              background: theme.palette.background.default,
            }),
          },
        },
        MuiAppbar: {
          styleOverrides: { root: { background: "palettsecondary" } },
        },
        MuiDivider: {
          styleOverrides: {
            root: ({ theme }) => ({ backgroundImage: theme.palette.background.gradient }),
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: ({ theme }) => ({              
              backgroundImage: theme.palette.background.gradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }),
          },
        },
      },
    }
  );
