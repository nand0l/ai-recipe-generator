import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { dutchTheme } from "./theme/dutchTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={dutchTheme}>
      <Authenticator>
        <App />
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);