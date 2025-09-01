import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrandProvider } from "./context/Brandcontext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/poppins/100.css"; // Thin
import "@fontsource/poppins/200.css"; // Extra Light
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold
import "@fontsource/poppins/800.css"; // Extra-Bold
import "@fontsource/poppins/900.css"; // Black
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrandProvider>
      <Router>
        <App />
      </Router>
    </BrandProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
