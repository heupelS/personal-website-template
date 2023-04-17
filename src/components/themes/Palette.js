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
                gradient: `linear-gradient(to right, #2C3A8B 0%, 10.203412073490814%, #294495 20.406824146981627%, 30.183727034120736%, #1E5DAA 39.960629921259844%, 49.86876640419948%, #0E89D0 59.7769028871391%, 70.11154855643045%, #04A3E5 80.4461942257218%, 90.2230971128609%, #01ADEE 100%);`,
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
                gradient: `linear-gradient(to right, #2C3A8B 0%, 10.203412073490814%, #294495 20.406824146981627%, 30.183727034120736%, #1E5DAA 39.960629921259844%, 49.86876640419948%, #0E89D0 59.7769028871391%, 70.11154855643045%, #04A3E5 80.4461942257218%, 90.2230971128609%, #01ADEE 100%);`,
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
