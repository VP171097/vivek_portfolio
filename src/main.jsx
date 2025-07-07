import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { ConfigProvider } from "./context/ConfigContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
