import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { css } from "styled-components";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
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
      ${props}
    }
  `;
};