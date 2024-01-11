import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Contact from "./pages/Contact";
import StreetArtById from "./components/StreetArtById";
import StreetArtList from "./components/StreetArtList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/streetart",
    element: <StreetArtList />,
  },
  {
    path: "/streetart/:id",
    element: <StreetArtById />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
