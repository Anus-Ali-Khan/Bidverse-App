import React from "react";
import Navbar2 from "./Navbar2";

export default function SingleProduct() {
  return (
    <div>
      <Navbar2 />
      <div className="bg-slate-200 h-screen flex justify-center p-20 gap-16">
        <div className="bg-white h-fit p-8">
          <img
            src={require("../assets/Furniture.jpg")}
            alt=""
            className="h-[25rem]"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-center font-bold text-5xl">Furniture Set</p>
          <div className="bg-sky-950 text-yellow-500 p-4 rounded-lg">
            <p className="text-lg">Description</p>
            <p className="text-white">
              High Quality Wood is used with tough resistance to water
            </p>
            <div className="flex gap-20 items-center ">
              <div className="">
                <p className="mt-4 text-lg">Starting Price</p>
                <p className="text-white">Rs.10,000</p>
                <p className="mt-4 text-lg">Current Bid</p>
                <p className="text-white">No current bid</p>
              </div>
              <div>
                <p className="mt-4 text-lg">Remaining Time</p>
                <p className="text-white">This bid has ended</p>
              </div>
            </div>
            <button className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-lg">
              Place a bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
