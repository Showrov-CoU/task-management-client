import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div id="nav" className="px-[5%] md:pl-[6%] md:pr-[0%] ">
        <Banner></Banner>
      </div>
      <div id="benefit" className="px-[15%]">
        <Benefit></Benefit>
      </div>
    </div>
  );
};

export default Home;
