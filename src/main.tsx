import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodosContextProvider } from "./contexts/todos-context";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/mui-theme";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodosContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </TodosContextProvider>
  </StrictMode>
);
