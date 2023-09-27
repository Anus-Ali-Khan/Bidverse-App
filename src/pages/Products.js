import React from "react";
import { PRODUCTS } from "../data/data";
import Items from "../pages/Items";
import Navbar2 from "../pages/Navbar2";

export default function Products() {
  return (
    <div className="bg-slate-100 h-auto">
      <Navbar2 />
      <button className="flex mt-10 ml-96 gap-1 items-center rounded-full border border-solid bg-white p-3 w-[50%] font-semibold">
        Search here...
      </button>
      <div>
        <h1 className="text-5xl mt-10 mb-12 decoration- font-sans text-center font-semibold">
          All Categories
        </h1>
        <div className="flex flex-wrap justify-around mt-6 gap-8">
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white">
            Fashion
            <img src={require("../assets/fashion.jpg")} className="h-52 mt-2" />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white">
            Electronics
            <img
              src={require("../assets/electronics-500x500.webp")}
              className="h-52 mt-2"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl  bg-white">
            Furniture
            <img
              src={require("../assets/Furniture.jpg")}
              className="h-52 mt-2"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white">
            Sports
            <img src={require("../assets/sports.jpeg")} className="h-52 mt-2" />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white">
            Medicines
            <img
              src={require("../assets/medicines.jpg")}
              className="h-52 mt-2"
            />
          </p>
          <p className="border border-solid rounded-2xl p-6 font-bold w-1/4 h-fit text-xl bg-white">
            Industrial Equipments
            <img
              src={require("../assets/Industrial Equipments.webp")}
              className="h-52 mt-2"
            />
          </p>
        </div>
      </div>
      <div className="Category">
        <div className="Top-rated">
          <h1 className="text-5xl mb-12 mt-20 text-center font-sans font-semibold">
            Top Auctions
          </h1>
          <div className="Top-products flex flex-wrap justify-around mt-6 gap-8">
            {PRODUCTS.map((product) => (
              <Items data={product} />
            ))}
          </div>
        </div>
        <div className="All-products">
          <h1 className="text-5xl mt-20 text-center mb-12 font-sans font-semibold">
            All Products
          </h1>
          <div className="Top-products flex flex-wrap justify-around mt-6 gap-8">
            {PRODUCTS.map((product) => (
              <Items data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
