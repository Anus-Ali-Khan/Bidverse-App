import React from "react";
import Navbar2 from "./Navbar2";
import Modal from "../components/Modal";
import axios from "../api/axios";
import { useEffect } from "react";

const SINGLEPROD_URL = "/api/v1/product";
const jwtToken = localStorage.getItem("token");

export default function SingleProduct({ productId }) {
  const getSingleProd = async () => {
    try {
      const response = await axios.get(`${SINGLEPROD_URL}/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${jwtToken}`,
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => getSingleProd(), []);

  return (
    <div className="bg-slate-200">
      <Navbar2 />
      <div className="h-screen flex justify-center p-20 gap-16 max-md:p-16 max-md:flex-col max-[768px]:flex-col max-md:items-center max-md:mt-[2rem] max-md:gap-8 max-sm:mt-4 max-sm:gap-6">
        <div className="bg-white h-fit p-8 max-md:p-4 max-md:w-[80%] max-sm:w-[150%] max-sm:p-2">
          <img
            src={require("../assets/Furniture.jpg")}
            alt=""
            className="h-[25rem] max-lg:h-[20rem] max-md:h-[15rem] max-md:w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-6 max-lg:w-[65%] max-md:w-[80%] max-md:gap-4 max-sm:gap-2 max-sm:w-[150%]">
          <p className="text-center font-bold text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl ">
            Furniture Set
          </p>
          <div className="bg-sky-950 text-yellow-500 p-4 rounded-lg ">
            <p className="text-lg max-sm:text-sm">Description</p>
            <p className="text-white max-sm:text-xs">
              High Quality Wood is used with tough resistance to water
            </p>
            <div className="flex gap-20 items-center  ">
              <div className="">
                <p className="mt-4 text-lg max-sm:text-sm">Starting Price</p>
                <p className="text-white max-sm:text-xs">Rs.10,000</p>
                <p className="mt-4 text-lg max-sm:text-sm">Current Bid</p>
                <p className="text-white max-sm:text-xs">No current bid</p>
              </div>
              <div>
                <p className="mt-4 text-lg max-sm:text-sm">Remaining Time</p>
                <p className="text-white max-sm:text-xs">This bid has ended</p>
              </div>
            </div>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
}
