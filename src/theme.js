import { createTheme } from "@mui/material";

export const themeSettings = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#172339",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#ffffff",
      paper: "#172339",
    },
    text: {
      secondary: "#faf8f6",
      primary: "#172339",
      disabled: "rgba(254,254,254,0.8)",
    },
  },
  typography: {
    fontFamily: '"Epilogue" , sans-serif',
    h1: {
      fontWeight: 400,
      fontSize: 72,
      lineHeight: 1.08,
      letterSpacing: -1,
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.16,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.77,
      letterSpacing: -0.2,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: -2.5,
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.78,
      letterSpacing: ".1px",
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.62,
      letterSpacing: "2.5px",
      color: "#49566D",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: 1.75,
      fontWeight: 400,
      letterSpacing: ".1px",
      color: "#F3EDE7",
    },
    button: {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 15,
  },
});
