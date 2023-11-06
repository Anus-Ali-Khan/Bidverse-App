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
      <div className=" h-screen flex justify-center  bg-yellow-300  p-12">
        <div className=" flex flex-col justify-center items-center">
          <LiaUserCircle className="h-56 w-56 mt-8" />
          <p className=" top-[17rem] underline underline-offset-4 ">
            anusalikhan1405@gmail.com
          </p>
        </div>
        <div className="  gap-8  flex flex-col justify-center ">
          <div className="flex flex-col w-full justify-center items-center gap-3">
            <div className="flex flex-col relative">
              <label className="font-medium text-lg">User Name</label>
              <BiSolidUser className="absolute top-10 left-4" />
              <input
                type="text"
                placeholder="Anus Ali Khan"
                className="p-2 border border-black rounded-md text-center"
              />
            </div>
            <div className="flex flex-col relative">
              <label className="font-medium text-lg">Phone Number</label>
              <BiPhone className="absolute top-10 left-4" />
              <input
                type="number"
                placeholder="03110162290"
                className="p-2  border rounded-md text-center  border-black"
              />
            </div>
            <button className="p-2  mt-6 text-white border-black font-medium rounded-md bg-orange-400">
              Edit Profile
            </button>
          </div>

          <div className=" flex flex-col justify-center items-center gap-4">
            <div className=" flex justify-center flex-col items-center relative">
              <button className="p-2 border text-left bg-slate-300 text-black border-black font-medium rounded-md">
                Your Products
              </button>
              <BiSolidArrowToRight className="absolute right-0" />
            </div>
            <div className=" flex justify-center flex-col items-center relative">
              <button className="p-2 border text-left bg-slate-300 text-black border-black font-medium rounded-md">
                Your Bidded products
              </button>
              <BiSolidArrowToRight className="absolute right-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
