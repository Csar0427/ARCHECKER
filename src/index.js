import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom"; // Keep using RouterProvider
import { BasketProvider } from "./context/BasketContext"; // Ensure the context is included
import { router } from "./routers"; // Import your router setup

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <RouterProvider router={router} /> {/* Make sure the router is properly integrated */}
    </BasketProvider>
  </React.StrictMode>
);
