import Lottie from "lottie-react";
import animation from "../../assets/Animation - 1703103486335.json";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};
const Banner = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      className="flex flex-col-reverse md:flex-row md:justify-center md:items-center"
      data-aos="zoom-in"
    >
      <div className="flex-1">
        <h1 className="hidden md:block text-5xl font-extrabold leading-none mb-0 md:mb-8">
          Effortless Task Mastery with TaskMinder
        </h1>
        <p className="mb-5 mx-auto md:mb-10">
          Effortlessly conquer tasks with TaskMinder. From intuitive creation to
          seamless collaboration, take control of your projects. Join now and
          experience the future of task management!
        </p>
        <Button
          onClick={() => navigate("/login")}
          theme={customTheme}
          color="primary"
        >
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
