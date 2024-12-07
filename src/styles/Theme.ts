import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Основной цвет
    },
    secondary: {
      main: "#FF5722", // Вторичный цвет
    },
    background: {
      default: "#f5f5f5", // Цвет фона
      paper: "#ffffff", // Цвет бумаги
    },
    text: {
      primary: "#333", // Основной цвет текста
      secondary: "#555", // Второстепенный цвет текста
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h5: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "20px",
        },
      },
    },
  },
});

export default theme;