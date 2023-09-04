import React from "react";
import Input from "../../components/input";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

const Login = () => {
  return (
    <div className="flex items-center h-screen p-12">
      <div className="main-img basis-3/5">
        <img
          src={require("../../assets/creative-web-homepage-illustration/6495319.jpg")}
          alt="side Image"
          className="h-96"
        />
      </div>
      <div className="p-5 flex flex-col items-center gap-6 justify-between border border-solid border-gray-950 basis-2/5 ">
        <form className="login-container flex gap-5 flex-col items-center">
          <h1 className="">Welcome Back :)</h1>
          <p>
            To keep login with us please connected with your personal
            information by email address and password
            <span>
              <img
                src={require("../../assets/bell_1156949.png")}
                alt="bell icon"
              />
            </span>
          </p>
          <Input />
          <div className="flex justify-end items-end">
            <div className="flex">
              <input type="checkbox" />
              <p>Remember me</p>
              <div>
                <p>Forgot Password?</p>
              </div>
            </div>
          </div>
          <div className="btns flex gap-5 w-1/2">
            <button
              className="login-btn border border-solid bg-sky-500 font-semibold text-white p-2 rounded-full w-full"
              type="submit"
            >
              Login Now
            </button>
            <button type="submit" className="signup-button rounded-full w-full">
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
                src={require("../../assets/google-icon-2048x2048-czn3g8x8.png")}
                className="g-icon h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
