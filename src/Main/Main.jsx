import { Outlet } from "react-router-dom";
import Home from "../Home/Home/Home";

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
