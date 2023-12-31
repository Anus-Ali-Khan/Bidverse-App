import React from "react";
import Favouritesicon from "../components/Favouritesicon";

export default function Items({ data }) {
  // console.log(data._id);
  return (
    <div className="border border-solid rounded-2xl p-6 w-[30%] h-auto text-xl bg-white max-md:w-[40%] max-[768px]:w-[40%] max-sm:w-[90%] ">
      <Favouritesicon productId={data._id} />
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
