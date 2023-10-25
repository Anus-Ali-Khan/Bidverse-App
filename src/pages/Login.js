import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-login  bg-no-repeat  p-[10px] bg-cover bg-center h-screen">
      <div className="flex m-20 shadow-2xl box-border lg:mt-16">
        <div className="w-[60%] left-[8rem] lg:w-[590px] lg:h-[518px] ">
          <img
            src={require("../assets/login image.jpg")}
            alt="img"
            className="h-[100%] w-[100%] lg:w-[100%] lg:h-[100%] md:none"
          />
        </div>

        <div className="h-[90%] w-[30%] gap-8 m-auto bg-white flex flex-col justify-center items-center p-2 lg:h-[515px] lg:w-[320px] lg:gap-4">
          <form className="login-container flex gap-5 flex-col items-center lg:gap-3">
            <h1 className="font-semibold text-2xl lg:text-xl">
              Welcome Back :)
            </h1>
            <p className="text-center lg:text-sm ">
              To keep login with us please connect with your personal
              information by email address and password
            </p>
            <div className="input-container flex flex-col gap-3 w-[70%] lg:gap-2">
              <CustomInput
                type="email"
                label="Email"
                onChange={() => {}}
                placeholder={"user@gmail.com"}
                styles={""}
                icon={<BiSolidUser className="absolute top-10 left-3 " />}
              />

              <CustomInput
                type="password"
                label="Password"
                onChange={() => {}}
                placeholder={"Password"}
                icon={<BiSolidLockAlt className="absolute top-10 left-3" />}
              />
            </div>
            <div className="flex justify-end items-end">
              <div className="flex">
                <p className="underline underline-offset-4">Forgot Password?</p>
              </div>
            </div>
            <div className="btns flex gap-5 w-[80%] lg:w-[247px] lg:gap-4">
              <button
                className="login-btn  bg-orange-400 font-semibold text-white p-3 rounded-full w-full lg:p-1 lg:font-normal"
                type="submit"
              >
                Login Now
              </button>
              <button
                type="submit"
                className="signup-button rounded-full w-full text-white bg-orange-400 font-semibold p-2 lg:p-1 lg:font-normal"
                onClick={() => navigate("/signup")}
              >
                Create Account
              </button>
            </div>
          </form>
          <p>or you can join with</p>
          <div className="icons flex gap-4  ">
            <div className="socialmedia bg-white ">
              <a href="#">
                <MdFacebook className="f-icon h-9 w-9 text-blue-700 " />
              </a>
            </div>
            <div className="socialmedia">
              <a href="#">
                <AiFillTwitterCircle className="t-icon h-9 w-9 text-sky-500" />
              </a>
            </div>
            <div className="socialmedia h-8 w-8">
              <a href="#">
                <img
                  src={require("../assets/google-icon-2048x2048-czn3g8x8.png")}
                  className="g-icon h-8 w-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
