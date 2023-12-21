import Lottie from "lottie-react";
import animation from "../../../public/Animation - 1703103486335.json";
import { Button } from "flowbite-react";
const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};
const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center ">
      <div className="flex-1">
        <h1 className="hidden md:block text-5xl font-extrabold leading-none mb-0 md:mb-8">
          Effortless Task Mastery with TaskMinder
        </h1>
        <p className="mb-5 mx-auto md:mb-10">
          Effortlessly conquer tasks with TaskMinder. From intuitive creation to
          seamless collaboration, take control of your projects. Join now and
          experience the future of task management!
        </p>
        <Button theme={customTheme} color="primary">
          Let&apos;s Explore
        </Button>
      </div>
      <div className="size-[100%] mx-auto md:size-[60%]">
        <Lottie animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
