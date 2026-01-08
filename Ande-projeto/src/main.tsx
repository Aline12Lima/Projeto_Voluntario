import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/globals.css";

// 1. Importe o Sentry
import * as Sentry from "@sentry/react";

// 2. Inicie o Sentry
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Em produção real, baixe para 0.1 ou 0.2
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
