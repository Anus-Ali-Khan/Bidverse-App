import React from "react";
import { LiaUserCircle } from "react-icons/lia";
import { BiSolidUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import Navbar2 from "../pages/Navbar2";

export default function MyProfile() {
  return (
    <div>
      <Navbar2 />
      <div className=" h-screen flex justify-center items-center p-12">
        <div className="h-[80%] w-[20%]  flex justify-center bg-orange-400">
          <LiaUserCircle className="h-56 w-56 mt-8" />
        </div>
        <div className="h-[80%] w-[80%] gap-8 m-auto bg-blue-500 flex flex-col justify-center items-center">
          <div className="flex flex-col w-full justify-center items-center gap-1">
            <div className="flex flex-col w-[30%] relative">
              <label className="font-medium text-lg">User Name</label>
              <BiSolidUser className="absolute top-10 left-4" />
              <input
                type="text"
                placeholder="Anus Ali Khan"
                className="p-2  border rounded-md text-center"
              />
            </div>
            <div className="flex flex-col w-[30%] relative">
              <label className="font-medium text-lg">Phone Number</label>
              <BiPhone className="absolute top-10 left-4" />
              <input
                type="number"
                placeholder="03110162290"
                className="p-2 w-[100%] border rounded-md text-center"
              />
            </div>
          </div>
          <button className="p-2 w-[30%] border text-white border-black font-medium rounded-md bg-orange-400">
            Edit Profile
          </button>

          <button className="p-2 w-[30%] border text-left bg-slate-300 text-black border-black font-medium rounded-md">
            Your Products
          </button>
          <button className="p-2 w-[30%] border text-left bg-slate-300 text-black border-black font-medium rounded-md">
            Your Bidded products
          </button>
          <button className="p-2 w-[30%] border text-left bg-slate-300 text-black border-black font-medium rounded-md">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
