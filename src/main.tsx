import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Importação do Speed Insights

import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
      <SpeedInsights /> {/* Adicionando o Speed Insights */}
    </Router>
  </React.StrictMode>
);
