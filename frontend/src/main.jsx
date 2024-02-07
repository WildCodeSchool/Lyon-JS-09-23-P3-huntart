import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import { AuthContextProvider } from "./components/Context/userContext";
import Contact from "./pages/Contact";
import StreetArtById from "./components/StreetArtById";
import StreetArtList from "./components/StreetArtList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "accueil", element: <Home /> },
      { path: "streetart", element: <StreetArtList /> },
      { path: "streetart/:id", element: <StreetArtById /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "access", element: <Signup /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
