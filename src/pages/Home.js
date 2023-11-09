import React from "react";
import Navbar from "./Navbar";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Home = () => {
  return (
    <div
      className="flex flex-col bg-no-repeat  bg-cover bg-center h-screen text-white"
      id="bg-image-container"
    >
      <div className="h-12 w-full mt-0 bg-orange-600 text-white max-sm:h-16 max-[320px]:h-16">
        <p className="text-center mt-2 font-medium text-lg max-sm:text-sm max-sm:m-2">
          Low prices, 60 days money-back policy, and much more.
          <span>
            <a href="" className="ml-6 underline">
              {/* Explore Now -> */}
            </a>
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between max-sm:mt-4">
        <h1 className="pl-8 flex items-center gap-2 text-5xl font-serif font-medium max-lg:text-3xl  max-[1024px]:text-3xl max-md:text-2xl max-[768px]:text-2xl max-sm:text-sm max-sm:pl-4 relative">
          <img
            src={require("../assets/Logo.png")}
            alt="logo"
            className="h-14 w-16 max-lg:h-12 max-lg:w-12 max-[1024px]:h-12 max-[1024px]:w-12 max-md:h-8 max-md:w-8 max-[768px]:h-8 max-[768px]:w-8 max-sm:h-6 max-sm:w-6 max-[320px]:h-6 max-[320px]:w-6  "
          />
          Bidverse.com
        </h1>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center pl-8 mt-28 gap-2 max-sm:pl-4 max-sm:mt-16 ">
          <MdSlowMotionVideo className="h-6 w-6" />
          <p className="text-xl font-sans font-semibold max-sm:text-lg">
            Learn About Bidverse.com
          </p>
        </div>
        <div className="content heading mt-8 pl-8 max-sm:pl-4 max-sm:mt-6">
          <div>
            <p className=" font-sans font-semibold text-6xl w-[65%] max-lg:text-5xl max-[1024px]:text-5xl max-md:text-3xl max-[768px]:text-3xl max-sm:text-2xl max-sm:w-[100%]">
              The leading B2B bidding platform for global trade
            </p>
          </div>
          <div className="search mt-12 relative max-sm:mt-8">
            <input
              type="search"
              placeholder="Search here"
              className="w-[45%] rounded-full p-4 max-sm:p-2 max-sm:w-[90%]"
            />
            <div className="flex items-center gap-4 absolute right-[52rem] top-1 max-2xl:right-[49rem] max-lg:right-[33rem] max-[1024px]:right-[35rem] max-md:right-[26rem] max-[768px]:right-[26rem] max-sm:right-[2.3rem] max-sm:gap-2">
              <BsCamera className=" text-black h-8 w-10 max-sm:h-6 max-sm:w-6 " />
              <button
                type="Submit"
                className="flex gap-1 items-center rounded-full border border-solid bg-orange-500 p-2 w-[80%] font-semibold max-sm:p-1 max-sm:font-normal  "
              >
                <BiSearch className="mt-1 h-6 w-6 max-sm:h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
