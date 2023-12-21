import Downbar from "../../Shared/Downbar";
import Topbar from "../../Shared/Topbar";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div className="px-[5%] fixed w-full z-20">
        <Topbar></Topbar>
      </div>

      <div id="nav" className="px-[5%] md:pl-[6%] md:pr-[0%] ">
        <Banner></Banner>
      </div>
      <div id="benefit" className="px-[15%]">
        <Benefit></Benefit>
      </div>
      <div className="px-[5%] mt-10">
        <Downbar></Downbar>
      </div>
    </div>
  );
};

export default Home;
