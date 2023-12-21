import { Button, Card, Label, TextInput } from "flowbite-react";
import loginAnimation from "../assets/login.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
    black: "text-white bg-[#000] hover:bg-[#003] hover:text-slate-100",
  },
};

const Login = () => {
  return (
    <div className="h-[108vh] flex justify-center items-center">
      <div className="w-[50%] hidden md:block">
        <Lottie animationData={loginAnimation} className="size-full"></Lottie>
      </div>
      <div className="md:pr-[5%] w-80 mt-12 md:mt-0 md:w-[38%]">
        <Card>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput id="email1" type="email" placeholder="" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2"></div>
            <Button type="submit" theme={customTheme} color="primary">
              Log in
            </Button>
            <p className="text-center">
              Don&apos;t have any account? please{" "}
              <Link to='/register'>
                <span className="text-xl underline text-[#ff0000] cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
            <Button
              className="mt-5"
              type="submit"
              theme={customTheme}
              color="black"
            >
              Login With Google
            </Button>
            <Button type="submit" theme={customTheme} color="black">
              Login With Github
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
