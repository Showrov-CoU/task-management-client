import { Button, Card, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/login.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import useAuth from './../Hooks/useAuth';

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
    black: "text-white bg-[#000] hover:bg-[#003] hover:text-slate-100",
  },
};

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateUserProfle } = useAuth();

  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const result = res.user;
        console.log(result);
        updateUserProfle(data.name, data.photo)
          .then(() => {
            toast.success("Registration successful!");
            reset();
            navigate("/dashboard");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="h-[110vh] flex justify-center items-center md:gap-10 px-[5%]">
        <div className="md:pl-[5%] w-80 md:w-[40%]">
          <Card>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder=""
                  required
                  {...register("name")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="photo" value="Your photo URL" />
                </div>
                <TextInput
                  id="photo"
                  type="text"
                  placeholder=""
                  required
                  {...register("photo")}
                />
              </div>
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
                Create an Account
              </Button>
              <p className="text-center">
                Already have an account? please{" "}
                <Link to="/login">
                  <span className="text-xl underline text-[#ff0000] cursor-pointer">
                    Login
                  </span>
                </Link>
              </p>
            </form>
          </Card>
        </div>
        <div className="w-[50%] hidden md:block">
          <Lottie animationData={loginAnimation} className="size-full"></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
