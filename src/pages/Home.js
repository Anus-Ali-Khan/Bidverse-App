import React from "react";
import Navbar from "./Navbar";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Home = () => {
  return (
    <div
      className="flex flex-col bg-no-repeat bg-center bg-cover h-screen text-white"
      id="bg-image-container"
    >
      <div className="h-12 w-full mt-0 bg-orange-600 text-white">
        <p className="text-center mt-2 font-medium text-lg ">
          Low prices, 60 days money-back policy, and much more.
          <span>
            <a href="" className="ml-6 underline">
              {/* Explore Now -> */}
            </a>
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="pl-8 flex items-center gap-2 text-5xl font-serif font-medium">
          <img
            src={require("../assets/Logo.png")}
            alt="logo"
            className="h-14 w-16"
          />
          Bidverse.com
        </h1>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center pl-8 mt-28 gap-2">
          <MdSlowMotionVideo className="h-6 w-6" />
          <p className="text-xl font-sans font-semibold">
            Learn About Bidverse.com
          </p>
        </div>
        <div className="content heading mt-8 pl-8">
          <div>
            <p className=" font-sans font-semibold text-6xl w-[65%] ">
              The leading B2B bidding platform for global trade
            </p>
          </div>
          <div className="search mt-12 ">
            <input
              type="search"
              placeholder="Search here"
              className="w-[45%] rounded-full p-4"
            />
            <BsCamera />
            <button type="Submit">
              <BiSearch />
              Serach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
