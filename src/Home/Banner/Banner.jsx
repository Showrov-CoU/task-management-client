import Lottie from "lottie-react";
import animation from "../../../public/Animation - 1703103486335.json";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center ">
      <div className="flex-1">
        <h1>
          Empower Your Productivity: Seamless Task Management for Effortless
          Workflow Mastery
        </h1>
      </div>
      <div className="size-4/6">
        <Lottie animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
