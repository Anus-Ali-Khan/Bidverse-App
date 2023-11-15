import React, { useEffect } from "react";
import { PRODUCTS } from "../data/data";
import Items from "../pages/Items";
import Navbar2 from "../pages/Navbar2";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux features/productStore";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="bg-slate-100 h-auto">
      <Navbar2 />
      <button className="flex mt-10 ml-96 gap-1 items-center rounded-full border border-solid bg-white p-3 w-[50%] font-semibold max-lg:ml-[16rem] max-md:ml-[12rem] max-sm:ml-2 max-sm:w-[90%]  ">
        Search here...
      </button>
      <div>
        <h1 className="text-5xl mt-10 mb-12 font-sans text-center font-semibold max-sm:text-4xl ">
          All Categories
        </h1>
        <div className="flex flex-wrap justify-around mt-6 gap-8   ">
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white max-md:w-[40%] max-sm:w-[90%]">
            Fashion
            <img
              src={require("../assets/fashion.jpg")}
              className="h-52 mt-2  max-lg:h-[10rem]"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white max-md:w-[40%] max-sm:w-[90%]">
            Electronics
            <img
              src={require("../assets/electronics-500x500.webp")}
              className="h-52 mt-2 max-lg:h-[10rem]"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl  bg-white max-md:w-[40%] max-sm:w-[90%]">
            Furniture
            <img
              src={require("../assets/Furniture.jpg")}
              className="h-52 mt-2 max-lg:h-[10rem]"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white max-md:w-[40%] max-sm:w-[90%]">
            Sports
            <img
              src={require("../assets/sports.jpeg")}
              className="h-52 mt-2 max-lg:h-[10rem]"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white max-md:w-[40%] max-sm:w-[90%]">
            Medicines
            <img
              src={require("../assets/medicines.jpg")}
              className="h-52 mt-2 max-lg:h-[10rem]"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white max-lg:p-4 max-md:w-[40%] max-sm:w-[90%]">
            Industrial Equipments
            <img
              src={require("../assets/Industrial Equipments.webp")}
              className="h-52 mt-2 max-lg:h-[10rem]"
            />
          </p>
        </div>
      </div>
      <div className="Category">
        <div
          className="Top-rated cursor-pointer "
          onClick={() => navigate("/singleproduct")}
        >
          <h1 className="text-5xl mb-12 mt-20 text-center font-sans font-semibold max-sm:text-4xl">
            Top Auctions
          </h1>
          <div
            className=" flex flex-wrap justify-around mt-6 gap-8 max-sm:flex-col max-sm:items-center "
            onClick={() => navigate("/singleproduct")}
          >
            {PRODUCTS.map((product) => (
              <Items data={product} />
            ))}
          </div>
        </div>
        <div
          className="All-products cursor-pointer"
          onClick={() => navigate("/singleproduct")}
        >
          <h1 className="text-5xl mt-20 text-center mb-12 font-sans font-semibold max-sm:text-4xl">
            All Products
          </h1>
          <div className=" flex flex-wrap justify-around mt-6 gap-8 cursor-pointer ">
            {PRODUCTS.map((product) => (
              <Items data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
