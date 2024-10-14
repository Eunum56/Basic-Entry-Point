import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, { handlesignup } from "./Routes/Signup.jsx";
import Heading from "./components/Heading.jsx";
import Login, { handlelogin } from "./Routes/Login.jsx";
import Home from "./Routes/Home.jsx";
import Dashboard from "./Routes/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Heading />,
        children: [
          {
            path: "signup",
            element: <Signup />,
            action: handlesignup,
          },
          {
            path: "login",
            element: <Login />,
            action: handlelogin,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
