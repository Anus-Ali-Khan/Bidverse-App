import React, { useState, useEffect, useRef, useContext } from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
// use to modify the values of state created in redux

const Login = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg();
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pwd);
    setUser("");
    setPwd("");
    setSuccess("true");
  };

  return (
    <>
      {success ? (
        navigate("/")
      ) : (
        <div className=" bg-login  bg-no-repeat  p-[10px] bg-cover bg-center h-screen max-[320px]:bg-none max-[320px]:bg-slate-100 ">
          <div className="flex m-20 shadow-2xl box-border max-lg:mt-16 max-[320px]:m-0 max-[320px]:mt-12 ">
            <div className="w-[60%] left-[8rem]  max-lg:w-[590px] max-lg:h-[518px]  max-md:hidden max-sm:hidden max-[320px]:hidden">
              <img
                src={require("../assets/login image.jpg")}
                alt="img"
                className="h-[100%] w-[100%] max-lg:w-[100%] max-lg:h-[100%] max-md:hidden max-sm:hidden max-[320px]:hidden"
              />
            </div>

            <div className="h-[90%] w-[30%] gap-6 m-auto bg-white flex flex-col justify-center items-center p-4 max-lg:h-[515px] max-lg:w-[330px] max-lg:gap-4  max-md:w-[100%] max-md:p-4 max-md:gap-4 max-md:border max-md:border-solid max-[320px]:w-[300px] max-[320px]:h-[500px] max-[320px]:gap-2">
              <form
                onSubmit={handleSubmit}
                className="login-container flex gap-5 flex-col items-center lg:gap-3"
              >
                <h1 className="font-semibold text-2xl lg:text-xl max-[320px]:text-lg">
                  Welcome Back :)
                </h1>
                <p className="text-center max-lg:text-sm max-[320px]:text-sm">
                  To keep login with us please connect with your personal
                  information by email address and password
                </p>
                <div className="input-container flex flex-col gap-3 w-[70%] max-lg:gap-2">
                  <CustomInput
                    type="email"
                    label="Email"
                    value={email}
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={"user@gmail.com"}
                    icon={<BiSolidUser className="absolute top-10 left-3 " />}
                    required
                  />

                  <CustomInput
                    type="password"
                    label="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder={"Password"}
                    icon={<BiSolidLockAlt className="absolute top-10 left-3" />}
                    required
                  />
                </div>

                <div className="flex justify-end items-end">
                  <div className="flex">
                    <p className="underline underline-offset-4">
                      Forgot Password?
                    </p>
                  </div>
                </div>
                <div className="btns flex gap-5 w-[80%] max-lg:w-[247px] max-lg:gap-4 max-[320px]:w-[280px]">
                  <button
                    className="login-btn  bg-orange-400 font-semibold text-white p-3 rounded-full w-full max-lg:p-1 max-lg:font-normal max-[320px]:font-normal"
                    type="submit"
                  >
                    Login Now
                  </button>
                  <button
                    type="submit"
                    className="signup-button rounded-full w-full text-white bg-orange-400 font-semibold p-2 max-lg:p-1 max-lg:font-normal max-[320px]:font-normal "
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
      )}
    </>
  );
};

export default Login;
