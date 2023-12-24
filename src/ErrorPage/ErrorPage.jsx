import Lottie from "lottie-react";
import error from "../assets/Animation - 1703296892171.json";

const ErrorPage = () => {
  return (
    <div className="h-[100%] w-full flex justify-center items-center">
      <div className="h-[30%] w-[50%]">
        <Lottie animationData={error}></Lottie>
      </div>
    </div>
  );
};

export default ErrorPage;
