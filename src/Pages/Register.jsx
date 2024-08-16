import { useState } from "react";
import image from "../assets/registerBg.jpg";
import logo from "../assets/logo.png";
import google from "../assets/google.svg";
import { FaLock } from "react-icons/fa";

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
//import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner4 } from "react-icons/im";
import useAuth from "../Hooks/useAuth";
const Register = () => {
  const {
    registerAccount,
    updateUserProfile,
    loading,
    googleLogIn,
    setLoading,
  } = useAuth();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);
    //password verification:
    if (password.length < 6) {
      toast.error("Your Password Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error(
        "Your Password Must have an Uppercase letter in the password"
      );
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error(
        "Your Password Must have an special character in the password"
      );
      return;
    }

    try {
      setLoading(true);
      //register and update:
      const result = await registerAccount(email, password);
      console.log(result);
      await updateUserProfile(name)
      toast.success("Account created Successfully");
      navigate(location?.state || "/");
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

    const handleGoogle = async () => {
      try {
        const result = await googleLogIn();
        console.log(result);
        toast.success("You've been Logged In Successfully");
        navigate(location?.state || "/");
      } catch (err) {
        setLoading(false);
        toast.error(err?.message);
      }
    };

  return (
    <div
      className="w-full bg-center bg-cover md:h-[100vh]  flex flex-col md:flex-row-reverse gap-12 md:gap-0 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${image})`,
      }}
    >
      <div className="md:w-1/2 mt-16 md:mt-0 flex items-center justify-center  h-full">
        <div>
          <div className="cursor-pointer flex items-center">
            <img className="size-24 md:size-40" src={logo} alt="" />
            <div className="text-2xl md:text-4xl lg:text-5xl font-lora font-semibold text-white">
              <h2 className="">GameLand</h2>
              
            </div>
          </div>
          <div className="font-lora text-white opacity-90 ml-6">
            <h2 className="md:text-2xl flex">
              <FaQuoteLeft className="-mt-2" />
              Unleash the Beast in Your PC
              <FaQuoteRight className="-mt-2" />
            </h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center mx-4">
        <div className="bg-white md:px-10 md:py-16 rounded-lg px-6 py-4">
          {/* Title */}

          <div className="flex flex-col gap-4 font-roboto py-8">
            <h2 className="font-bold text-2xl md:text-4xl ">Register</h2>
            <h2 className="font-roboto text-gray-700">
              Register to access exclusive listings and stay updated <br /> with
              the latest electronic products.
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-5">
                <GoPersonFill className="size-6 text-[#6B6C6C]" />
                <input
                  {...register("name", { required: true })}
                  className="outline-none font-roboto w-full placeholder:text-[#666868] placeholder:font-medium"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  id=""
                />
              </div>
              <div className="border border-[#6B6C6C]"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-5">
                <FaEnvelope className="size-5 text-[#6B6C6C]" />
                <input
                  {...register("email", { required: true })}
                  className="outline-none font-roboto w-full placeholder:text-[#666868] placeholder:font-medium"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  id=""
                />
              </div>
              <div className="border border-[#6B6C6C]"></div>
            </div>
            <div className="space-y-4">
              <div className="relative flex items-center gap-5">
                <FaLock className="size-5 text-[#6B6C6C]" />
                <input
                  {...register("password", { required: true })}
                  placeholder="Your Password"
                  className=" outline-none font-roboto w-full placeholder:text-[#666868] placeholder:font-medium"
                  type={showPassword ? "text" : "password"}
                  name="password"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaEye className="absolute top-1/3 right-2 cursor-pointer text-[#6B6C6C]" />
                  ) : (
                    <FaEyeSlash className="absolute top-1/3 right-2 cursor-pointer text-[#6B6C6C]" />
                  )}
                </span>
              </div>
              <div className="border border-[#6B6C6C]"></div>
            </div>

            <div className="pt-5">
              <div className="pb-4">
                <button className="cursor-pointer  text-center font-roboto transition duration-150 font-medium text-lg btn-reg px-8 py-3 w-full">
                  {loading ? (
                    <ImSpinner4 className="animate-spin m-auto size-5" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
              <div>
                <button
                   disabled={loading}
                    onClick={handleGoogle}
                  className=" disabled:cursor-not-allowed  flex items-center gap-4 w-full justify-center border-2 border-[#5571EF50] py-2 rounded-lg"
                >
                  <img className="size-7" src={google} alt="" />{" "}
                  <h2 className="font-roboto font-semibold text-[#5571EFE6]">
                    Register with Google
                  </h2>
                </button>
              </div>
            </div>
            <div className="w-full pt-6 text-[#6B6C6C] text-center font-medium font-roboto">
              <h2>
                Already have an account ?{" "}
                <Link to="/login" className="text-[#3852c2] font-bold">
                  Login
                </Link>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
