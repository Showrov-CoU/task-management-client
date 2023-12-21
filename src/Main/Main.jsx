import { Outlet } from "react-router-dom";

import Topbar from "../Shared/Topbar";
import Downbar from "../Shared/Downbar";

const Main = () => {
  return (
    <div>
      <div className="fixed px-[5%] top-0 w-full z-20">
        <Topbar></Topbar>
      </div>
      <Outlet></Outlet>
      <div className="px-[5%]">
        <Downbar></Downbar>
      </div>
    </div>
  );
};

export default Main;
