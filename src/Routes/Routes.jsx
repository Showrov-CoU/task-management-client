import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/login";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Alltask from "../Alltask/Alltask";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltask",
        element: (
          <PrivateRoute>
            <Alltask></Alltask>
          </PrivateRoute>
        ),
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
