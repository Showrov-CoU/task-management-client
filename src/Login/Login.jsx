import { Button, Card, Label, TextInput } from "flowbite-react";
import loginAnimation from "../assets/login.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
    black: "text-white bg-[#000] hover:bg-[#003] hover:text-slate-100",
  },
};

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login successful!");
        reset();
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        reset();
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="h-[108vh] flex justify-center items-center">
      <div className="w-[50%] hidden md:block">
        <Lottie animationData={loginAnimation} className="size-full"></Lottie>
      </div>
      <div className="md:pr-[5%] w-80 mt-12 md:mt-0 md:w-[38%]">
        <Card>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder=""
                required
                {...register("email")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                {...register("password")}
              />
            </div>
            <div className="flex items-center gap-2"></div>
            <Button type="submit" theme={customTheme} color="primary">
              Log in
            </Button>
            <p className="text-center">
              Don&apos;t have any account? please{" "}
              <Link to="/register">
                <span className="text-xl underline text-[#ff0000] cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
            <Button
              onClick={handleGoogleLogin}
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
