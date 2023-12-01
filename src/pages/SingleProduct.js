import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import Modal from "../components/Modal";
import axios from "../api/axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SINGLEPROD_URL = "/api/v1/product/";
const jwtToken = localStorage.getItem("token");

export default function SingleProduct() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currentBid, setCurrentBid] = useState("");
  const [endTime, setEndTime] = useState("");
  const [time, setTime] = useState("");

  const location = useLocation();
  const singleProduct = location.state;
  // console.log(singleProduct);

  // console.log(remainingSeconds);

  const updateClock = () => {
    const date1 = new Date(endTime);
    const date2 = new Date();
    const remainingTime = Math.abs(date1 - date2);
    const remainingSeconds = Math.ceil(remainingTime / 1000);
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    const hourString = hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""}` : "";
    const minuteString =
      minutes > 0 ? `${minutes} min${minutes > 1 ? "s" : ""}` : "";
    const secondString =
      seconds > 0 ? `${seconds} sec${seconds > 1 ? "s" : ""}` : "";

    return `${hourString} : ${minuteString} : ${secondString}`;
  };

  useEffect(() => {
    if (new Date(endTime) > new Date()) {
      setTimeout(() => {
        setTime(updateClock());
      }, 1000);
    }
  }, [time, endTime]);

  const getSingleProd = async () => {
    try {
      const response = await axios.get(
        `${SINGLEPROD_URL}/${singleProduct._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${jwtToken}`,
          },
        }
      );
      const getData = response.data.product;
      // console.log(getData);
      setImage(getData.image);
      setTitle(getData.name);
      setDescription(getData.description);
      setPrice(getData.price);
      setEndTime(getData.endTime);

      const largestBid = getData.bidAmounts.sort((a, b) => {
        return b.amount - a.amount;
      });
      // console.log(largestBid[0].amount);
      setCurrentBid(largestBid[0].amount);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleProd();
  }, []);

  return (
    <div className="bg-slate-200">
      <Navbar2 />
      <div className="h-screen flex justify-center p-20 gap-16 max-md:p-16 max-md:flex-col max-[768px]:flex-col max-md:items-center max-md:mt-[2rem] max-md:gap-8 max-sm:mt-4 max-sm:gap-6">
        <div className="bg-white h-fit p-8 max-md:p-4 max-md:w-[80%] max-sm:w-[150%] max-sm:p-2 flex justify-center">
          <img
            src={image}
            alt=""
            className="h-[25rem] max-lg:h-[20rem] max-md:h-[15rem] max-md:w-fit"
          />
        </div>
        <div className="flex flex-col gap-6 max-lg:w-[65%] max-md:w-[80%] max-md:gap-4 max-sm:gap-2 max-sm:w-[150%]">
          <p className="text-center font-bold text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl ">
            {title}
          </p>
          <div className="bg-sky-950 text-yellow-500 p-4 rounded-lg ">
            <p className="text-lg max-sm:text-sm">Description</p>
            <p className="text-white max-sm:text-xs">{description}</p>
            <div className="flex gap-20 items-center  ">
              <div className="">
                <p className="mt-4 text-lg max-sm:text-sm">Starting Price</p>
                <p className="text-white max-sm:text-xs">$ {price}</p>
                <p className="mt-4 text-lg max-sm:text-sm">Current Bid</p>
                <p className="text-white max-sm:text-xs">$ {currentBid}</p>
              </div>
              <div>
                <p className="mt-4 text-lg max-sm:text-sm">Remaining Time</p>
                {new Date(endTime) <= new Date() ? (
                  <p className="text-white max-sm:text-xs">
                    This Bid has ended
                  </p>
                ) : (
                  <p className="text-white max-sm:text-xs">{time}</p>
                )}
              </div>
            </div>
            <Modal singleProduct={singleProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
