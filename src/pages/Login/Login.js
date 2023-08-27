import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-fit p-5 flex flex-col items-center gap-6 justify-between border border-solid border-gray-950">
        <h1 className="">Login</h1>
        <form className="login-container flex gap-5 flex-col items-center">
          <input type="text" placeholder="youremail@gmail.com" />
          <input type="password" placeholder="password" />
          <button
            className="border border-solid bg-amber-500 font-semibold text-white p-2 rounded-xl w-full"
            type="submit"
          >
            Login
          </button>
          <p>Don't have an account? Sign Up</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
