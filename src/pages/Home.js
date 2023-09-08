import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <div className="h-12 w-full mt-0 bg-orange-600 text-white">
        <p className="text-center mt-2 font-medium text-lg ">
          Low prices, 60 days money-back policy, and much more.
          <span>
            <a href="" className="ml-6 underline">
              Explore Now ->
            </a>
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="p-4 flex items-center gap-2 text-4xl font-serif font-medium">
          <img
            src={require("../assets/Logo.png")}
            alt="logo"
            className="h-12 w-12"
          />
          Bidverse.com
        </h1>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
