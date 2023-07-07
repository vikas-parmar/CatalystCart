import { createTheme } from "@mui/material/styles";
import { css } from "styled-components";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#60306a",
      light: "#8d7093",
      dark: "#40154e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#cf417f",
      light: "#cf417f",
      dark: "#6a3057",
      contrastText: "#000",
    },
    gray: {
      main: "#1b1a17",
      light: "#c9c5ca",
      dark: "#2b272b",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Urbanist",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
});

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 470px) {
      ${props}
    }
  `;
};

export const tab = (props) => {
  return css`
    @media only screen and (max-width: 920px) {
      ${props};
    }
  `;
};
