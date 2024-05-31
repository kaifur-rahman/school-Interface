import { createBrowserRouter } from "react-router-dom";

import Template from "../pages/Template";
import Home from "../components/Homepage/Home";
import Signup from "../components/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export { router };
