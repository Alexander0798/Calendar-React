import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
    bodyBg: "#ccc",
    calendarBg: "#fff",
    calendarNavBg: "#eee",
    calendarTimeColor: "#fff",
    calendarFooterBg: "#eee",
    activeTimeColor: "#ebecff",
    selectedTimeColor: "#b3b7ff",
    formBg: "#e6e6e7",
};
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.bodyBg};
    overflow: hidden;
    margin: 0 auto;
    font-family: Srbija-sans, sans-serif;
  }
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
);

reportWebVitals();
