import React from "react";
import { LiaUserCircle } from "react-icons/lia";
import { BiSolidUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import Navbar2 from "../pages/Navbar2";
import { BiSolidArrowToRight } from "react-icons/bi";
import { useSelector } from "react-redux";
// useSelector is used to access the new state that is created after dispatch in redux

export default function MyProfile() {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <Navbar2 />
      <div className=" h-screen flex justify-center  gap-8 mt-12 max-sm:flex-col max-sm:items-center max-sm:gap-6 max-sm:mt-8">
        <div className="border border-slate-300 w-[40%] h-[70%] flex flex-col gap-4 items-center p-6 rounded-xl max-sm:p-4 max-sm:w-[80%] max-sm:h-[55%] max-sm:mt-[2rem]">
          <LiaUserCircle className="h-56 w-56 mt-1 max-sm:h-40 max-sm:w-40" />
          <p className=" underline underline-offset-4 ">{user.email}</p>
          <input type="file" className=" ml-12 max-md:ml-12 max-sm:ml-20" />
          <button className="bg-orange-400 text-white w-[60%] p-[0.5rem] text-base mt-4 rounded-lg max-sm:p-1 max-sm:mt-2">
            Upload Image
          </button>
        </div>
        <div className="  gap-8  flex flex-col justify-center border border-slate-300 w-[40%] h-[70%] rounded-xl max-sm:p-4 max-sm:w-[80%] max-sm:h-[55%] max-sm:gap-4">
          <div className="flex flex-col w-full justify-center items-center gap-3">
            <div className="flex flex-col relative">
              <label className="font-medium text-lg max-sm:text-sm">
                User Name
              </label>
              <BiSolidUser className="absolute top-10 left-4 max-sm:top-9" />
              <input
                type="text"
                placeholder="Anus Ali Khan"
                value={user.name}
                className="p-2 border border-black rounded-md text-center"
              />
            </div>
            <div className="flex flex-col relative">
              <label className="font-medium text-lg max-sm:text-sm |">
                Phone Number
              </label>
              <BiPhone className="absolute top-10 left-4 max-sm:top-9" />
              <input
                type="number"
                placeholder="03224455667"
                value={user.phoneNo}
                className="p-2  border rounded-md text-center  border-black"
              />
            </div>
            <button className="p-2 w-[12rem] mt-6 text-white border-black font-medium rounded-md bg-orange-400 max-sm:mt-2 max-sm:p-1 max-sm:font-normal">
              Update Profile
            </button>
          </div>

          <div className=" flex flex-col justify-center items-center gap-4">
            <div className=" flex justify-center flex-col items-center relative">
              <button className="p-2 border text-left w-[12rem] bg-slate-300 text-black border-black font-medium rounded-md max-sm:font-normal">
                Your Products
              </button>
              <BiSolidArrowToRight className="absolute right-2" />
            </div>
            <div className=" flex justify-center flex-col items-center relative">
              <button className="p-2 border text-left w-[12rem] bg-slate-300 text-black border-black font-medium rounded-md max-sm:font-normal">
                Your Bidded products
              </button>
              <BiSolidArrowToRight className="absolute right-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
