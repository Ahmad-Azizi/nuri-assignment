import { Theme, createTheme } from "@material-ui/core/styles";

export const theme: Theme = createTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    type: "light",
    primary: {
      light: "#C2DBDE",
      main: "#008F91",
    },
    secondary: {
      main: "#9ba6b5",
    },
    error: {
      main: "#ff0000",
    },
    background: {
      default: "#C2DBDE",
      paper: "#fafafa",
    },
    text: {
      primary: "#243258",
      secondary: "#9fa9b8",
    },
    divider: "#9fa9b8",
    customColors: {
      border: "#e5eaf3",
      disabled: "#808080",
    },
  },
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
  },
});
