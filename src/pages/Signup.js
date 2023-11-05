import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import CustomInput from "../components/CustomInput";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const Signup = () => {
  return (
    <div className=" bg-login  bg-no-repeat  p-[10px] bg-cover bg-center h-screen max-sm:bg-none">
      <div className="flex m-20 shadow-2xl box-border max-sm:m-0 max-[320px]:mt-12">
        <div className="w-[60%] left-[8rem] max-sm:hidden max-md:hidden ">
          <img
            src={require("../assets/login image.jpg")}
            alt="img"
            className="h-[100%] w-[100%] max-md:hidden max-sm:hidden"
          />
        </div>

        <div className="h-[90%] w-[30%] gap-8 m-auto bg-white flex flex-col justify-center items-center p-2 max-md:h-[515px] max-md:w-[100%] max-md:gap-6 md:border md:border-solid max-sm:gap-5">
          <form className="login-container flex gap-5 flex-col items-center w-[70%]  ">
            <h1 className="font-semibold text-2xl">Create an account </h1>
            <p className="text-center max-md:hidden ">
              To keep login with us please connected with your personal
              information by email address and password
            </p>
            <div className="input-container flex flex-col gap-3 w-[70%] lg:w-[80%] md:w-[100%] max-sm:w-[100%]">
              <CustomInput
                type="text"
                label="Name"
                onChange={() => {}}
                placeholder={"Anus Ali Khan"}
                styles={""}
                icon={<BiSolidUser className="absolute top-10 left-3 " />}
              />
              <CustomInput
                type="email"
                BiSolidLockAlt
                label="Email"
                onChange={() => {}}
                placeholder={"user@gmail.com"}
                styles={""}
                icon={<HiOutlineMail className="absolute top-10 left-3 " />}
              />

              <CustomInput
                type="password"
                label="Create Password"
                onChange={() => {}}
                placeholder={"Password"}
                icon={<BiSolidLockAlt className="absolute top-10 left-3" />}
              />
            </div>

            <div className="btns flex gap-5 w-[70%]">
              <button
                type="submit"
                className="signup-button rounded-full w-full text-white bg-orange-400 font-semibold p-2"
              >
                Create Account
              </button>
            </div>
            <div className="flex justify-end items-end">
              <div className="flex">
                <p className="underline underline-offset-4">
                  Already have an account?
                  <a href="/login" className="hover:text-orange-400">
                    Login
                  </a>
                </p>
              </div>
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

export default Signup;
