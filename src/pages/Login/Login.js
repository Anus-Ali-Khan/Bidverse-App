import React from "react";
import Input from "../../components/input";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-fit p-5 flex flex-col items-center gap-6 justify-between border border-solid border-gray-950">
        <form className="login-container flex gap-5 flex-col items-center">
          <h1 className="">Welcome Back :)</h1>
          <p>
            To keep login with us please connected with your personal
            information by email address and password
            <span>
              <img src="/src/assets/bell_1156949.png" alt="bell icon" />
            </span>
          </p>
          <Input />
          <div className="flex items-end">
            <input type="checkbox" />
            <p>Remember me</p>
            <div>
              <p>Forgot Password?</p>
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
      </div>
    </div>
  );
};

export default Login;
