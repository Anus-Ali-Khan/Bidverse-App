import React from "react";
import { LiaUserCircle } from "react-icons/lia";
import { BiSolidUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import Navbar2 from "../pages/Navbar2";
import { BiSolidArrowToRight } from "react-icons/bi";

export default function MyProfile() {
  return (
    <div>
      <Navbar2 />
      <div className=" h-screen flex justify-center items-center  p-12 relative">
        <div className="h-[70%] w-[20%]  flex justify-center absolute left-[15rem]">
          <LiaUserCircle className="h-56 w-56 mt-8" />
          <p className="absolute top-[17rem] underline underline-offset-4 ">
            anusalikhan1405@gmail.com
          </p>
        </div>
        <div className="h-[90%] w-[80%] gap-8 m-auto flex flex-col justify-center items-center ">
          <div className="flex flex-col w-full justify-center items-center gap-3">
            <div className="flex flex-col w-[30%] relative">
              <label className="font-medium text-lg">User Name</label>
              <BiSolidUser className="absolute top-10 left-4" />
              <input
                type="text"
                placeholder="Anus Ali Khan"
                className="p-2  border border-black rounded-md text-center"
              />
            </div>
            <div className="flex flex-col w-[30%] relative">
              <label className="font-medium text-lg">Phone Number</label>
              <BiPhone className="absolute top-10 left-4" />
              <input
                type="number"
                placeholder="03110162290"
                className="p-2 w-[100%] border rounded-md text-center  border-black"
              />
            </div>
            <button className="p-2 w-[30%] mt-6 text-white border-black font-medium rounded-md bg-orange-400">
              Edit Profile
            </button>
          </div>

          <div className="w-[100%] flex flex-col justify-center items-center gap-4">
            <div className="w-[100%] flex justify-center flex-col items-center relative">
              <button className="p-2 w-[30%] border text-left bg-slate-300 text-black border-black font-medium rounded-md">
                Your Products
              </button>
              <BiSolidArrowToRight className="absolute right-[26rem]" />
            </div>
            <div className="w-[100%] flex justify-center flex-col items-center relative">
              <button className="p-2 w-[30%] border text-left bg-slate-300 text-black border-black font-medium rounded-md">
                Your Bidded products
              </button>
              <BiSolidArrowToRight className="absolute right-[26rem]" />
            </div>
            <div className="w-[100%] flex justify-center flex-col items-center relative">
              <button className="p-2 w-[30%]  bg-orange-400 text-white mt-4 text-center border-black font-medium rounded-md">
                Sign out
              </button>
              {/* <BiSolidArrowToRight className="absolute right-[26rem]" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
