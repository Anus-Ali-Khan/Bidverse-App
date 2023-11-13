import React, { useState } from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import CustomInput from "../components/CustomInput";
import { BiSolidLockAlt, BiSolidUser, BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux features/users";
import { useDispatch } from "react-redux";
import axios from "../api/axios";

const SIGNUP_URL = "api/v1/signup";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        SIGNUP_URL,
        { name, email, password: pwd, number: phoneNo },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setEmail("");
      setPwd("");
      console.log(response?.data);

      localStorage.setItem("token", response.data.token);

      if (response.data?.success === true) {
        dispatch(login(response.data.user));
        navigate("/login");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <div className=" bg-login  bg-no-repeat  p-[10px] bg-cover bg-center h-screen max-[320px]:bg-slate-100">
      <div className="flex m-12 shadow-2xl box-border max-[1024px]:h-[570px] max-md:mt-0  max-[768px]:mt-8 max-lg:h-[650px] max-sm:m-0 max-[320px]:mt-6">
        <div className="w-[60%] left-[8rem] max-sm:hidden max-md:hidden max-[768px]:hidden">
          <img
            src={require("../assets/login image.jpg")}
            alt="img"
            className="h-[100%] w-[100%] max-md:hidden  max-[768px]:hidden max-sm:hidden"
          />
        </div>

        <div className="h-[90%] w-[30%] gap-8 m-auto bg-white flex flex-col justify-center items-center p-2 max-lg:w-[330px] max-[1024px]:gap-4 max-[1024px]:h-[570px] max-[1024px]:w-[340px] max-md:w-[100%] max-md:gap-6 max-md:border max-md:border-solid max-[1024px]:p-2 max-[768px]:border max-[768px]:border-solid max-[768px]:gap-5 max-[768px]:h-[580px] max-[768px]:w-[100%] max-sm:gap-3">
          <form
            onSubmit={handleSubmit}
            className="login-container flex gap-5 flex-col items-center w-[70%]  "
          >
            <h1 className="font-semibold text-2xl">Create an account </h1>
            {/* <p className="text-center max-md:hidden max-[1024px]:hidden max-[768px]:hidden">
              To keep login with us please connected with your personal
              information by email address and password
            </p> */}
            <div className="input-container flex flex-col gap-3  w-[70%] max-lg:w-[80%] md:w-[100%] max-sm:w-[100%]">
              <CustomInput
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Anus Ali Khan"}
                styles={""}
                icon={<BiSolidUser className="absolute top-10 left-3 " />}
                required
              />
              <CustomInput
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"user@gmail.com"}
                styles={""}
                icon={<HiOutlineMail className="absolute top-10 left-3 " />}
                required
              />
              <CustomInput
                type="number"
                label="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder={"0322114455"}
                styles={""}
                icon={<BiPhone className="absolute top-10 left-3 " />}
                required
              />

              <CustomInput
                type="password"
                label="Create Password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder={"Password"}
                icon={<BiSolidLockAlt className="absolute top-10 left-3" />}
                required
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
          </form>
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

          <p>or you can join with</p>
          <div className="icons flex gap-4 ">
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
