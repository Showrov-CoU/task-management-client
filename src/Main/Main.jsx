import { Outlet } from "react-router-dom";

import Topbar from "../Shared/Topbar";
import Downbar from "../Shared/Downbar";

const Main = () => {
  return (
    <div>
      <div className="px-[5%] fixed w-full z-20">
        <Topbar></Topbar>
      </div>
      <Outlet></Outlet>
      <div className="px-[5%] mt-10">
        <Downbar></Downbar>
      </div>
    </div>
  );
};

export default Main;
