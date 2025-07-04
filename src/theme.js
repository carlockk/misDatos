import { createTheme } from "@mui/material";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#ffffff' : '#121212',
      },
      text: {
        primary: mode === 'light' ? '#333333' : '#ffffff',
      },
    },
  });

export default getTheme;
