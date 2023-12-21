import Topbar from "../../Shared/Topbar";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";

const Home = () => {
  return (
    <div>
      <div className="fixed px-[5%] w-full z-20">
        <Topbar></Topbar>
      </div>
      <div className="px-[5%] md:pl-[6%] md:pr-[0%] ">
        <Banner></Banner>
      </div>
      <div className="px-[15%]">
        <Benefit></Benefit>
      </div>
    </div>
  );
};

export default Home;
