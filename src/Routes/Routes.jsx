import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/login";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
