import React from "react";

const Login = () => {
  return <div className="login-page">
    <h1 className="flex items-center justify-center ">Login</h1>
    <section className="flex flex-col justify-center items-center h-10">
      <form className="login-container flex flex-col items-center">
        <input type="text" placeholder="youremail@gmail.com"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Login</button>
        <p>Don't have an account? Sign Up</p>
      </form>
    </section>
  </div>
};

export default Login;
