import Topbar from "../../Shared/Topbar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <div className="fixed">
        <Topbar></Topbar>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
