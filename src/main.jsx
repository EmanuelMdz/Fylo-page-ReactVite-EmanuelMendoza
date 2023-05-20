import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Features } from "./Components/Features/Features.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/features",
    element: <Features hideButton="true" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
