import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./main.css"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7066e0",
      light: "#ff5ca0",
    },
    secondary: {
      main: "#f30656",
    },
    success: {
      main: "#0a9e2e",
      dark: "#ececec",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
