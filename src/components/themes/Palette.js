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
              divider: cyan[200],
              background: {
                default: "#fff",
                paper: "#fff",
                gradient: `linear-gradient(to left, red, blue)`,
              },
              text: {
                primary: "#121212",
                secondary: "#121212",
              },
              action: {},
            }
          : {
              // palette values for dark mode
              primary: cyan,
              divider: purple,
              background: {
                default: "#121212",
                paper: "#121212",
                gradient: `linear-gradient(90deg, rgba(0,188,212,1) 0%, rgba(0,131,143,1) 33%, rgba(156,39,176,1) 75%, rgba(234,128,252,1) 100%)`,
              },
              text: {
                primary: "#fff",
                secondary: grey[500],
              },
              action: {
                hover: cyan,
              },
            }),
      },
    },
    // global component custom styles for Buttons etc.
    {
      components: {
        MuiCssBaseline: {
          styleOverrides: {},
        },
        MuiButton: {
          styleOverrides: {
            root: ({ theme }) => ({
              border: "solid 2px transparent",
              borderRadius: "10px",
              "&:hover": {
                border: "solid 2px transparent",
                background:
                  "linear-gradient(canvas, canvas) padding-box, linear-gradient(red, blue) border-box",
              },
            }),
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
              transition: "all 0.5s ease",
            },
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

        MuiTooltip: {
          styleOverrides: {
            tooltip: ({ theme }) => ({
              color: theme.palette.text.primary,
              background: theme.palette.background.gradient,
            }),
          },
        },
      },
    }
  );
