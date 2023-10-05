import React from "react";
import Input from "../components/input";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

const Login = () => {
  return (
    <div className=" bg-login  bg-no-repeat  p-[10px] bg-cover bg-center h-screen">
      <div className="flex m-20 shadow-2xl box-border   ">
        <div className="w-[60%] left-[8rem] ">
          <img
            src={require("../assets/login image.jpg")}
            alt="img"
            className="h-[100%] w-[100%]"
          />
        </div>

        <div className="h-[90%] w-[30%] gap-8 m-auto bg-white flex flex-col justify-center items-center p-2 ">
          <form className="login-container flex gap-5 flex-col items-center">
            <h1 className="font-semibold text-2xl">Welcome Back :)</h1>
            <p className="text-center ">
              To keep login with us please connected with your personal
              information by email address and password
            </p>
            <Input />
            <div className="flex justify-end items-end">
              <div className="flex">
                <p className="underline underline-offset-4">Forgot Password?</p>
              </div>
            </div>
            <div className="btns flex gap-5 w-[80%]">
              <button
                className="login-btn  bg-orange-400 font-semibold text-white p-3 rounded-full w-full"
                type="submit"
              >
                Login Now
              </button>
              <button
                type="submit"
                className="signup-button rounded-full w-full text-white bg-orange-400 font-semibold p-2"
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
