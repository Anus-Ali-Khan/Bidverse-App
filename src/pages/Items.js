import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

export default function Items({ data }) {
  return (
    <div className="border border-solid rounded-2xl p-6  w-1/4 h-auto text-xl bg-white max-md:w-[40%] max-sm:w-[90%] ">
      <AiOutlineHeart className="mb-2 h-10 w-6" />
      <img src={data.image} />
      <div className="mt-4 text-center">
        <p className="font-semibold">
          <b>{data.name}</b>
        </p>
        <p>{data.description}</p>
        <p className="font-semibold">Rs.{data.price}</p>
      </div>
    </div>
  );
}
