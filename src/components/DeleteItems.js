import React from "react";
import axios from "../api/axios";
import { getProducts } from "../Reduxfeatures/products";
import { useDispatch } from "react-redux";

const USERCREATEDPRODS_URL = "/api/v1/product/";
const jwtToken = localStorage.getItem("token");

export default function Items({ data }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${USERCREATEDPRODS_URL}/${data._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${jwtToken}`,
          },
        }
      );
      console.log(response.data);
      if (response.data?.success === true) {
        dispatch(getProducts());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center border border-solid rounded-2xl p-6 w-[30%] h-auto text-xl bg-white max-md:w-[40%] max-[768px]:w-[40%] max-sm:w-[90%] ">
      <img src={data.image} />
      <div className="mt-4 text-center">
        <p className="font-semibold">
          <b>{data.name}</b>
        </p>
        <p>{data.description}</p>
        <p className="font-semibold">Rs.{data.price}</p>
      </div>
      <div className="w-[40%]">
        <button
          onClick={handleDelete}
          className="bg-orange-400  text-white w-[100%] p-[0.5rem] text-lg mt-4 rounded-lg max-sm:p-1 max-sm:mt-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
