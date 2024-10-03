import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter instead of RouterProvider
import { BasketProvider } from "./context/BasketContext";
import App from "./App"; // Make sure to import your App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketProvider>
  </React.StrictMode>
);
