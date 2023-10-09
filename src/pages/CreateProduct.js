import React from "react";
import Navbar2 from "../pages/Navbar2";
import { BiImage } from "react-icons/bi";
import CustomInput from "../components/CustomInput";

export default function CreateProduct() {
  return (
    <div>
      <Navbar2 />
      <div className="flex flex-col p-8 ">
        <p className="text-2xl mb-2 font-semibold "> Add Product</p>
        <div className="flex gap-16">
          <div className="border border-slate-300 w-[40%] h-[70%] flex flex-col items-center p-6 rounded-xl ">
            <BiImage className="w-[80%] h-[80%]  " />
            <input type="file" className="" />
            <button className="bg-orange-400 text-white w-[80%] p-2 text-lg mt-4 rounded-lg">
              Upload Image
            </button>
          </div>
          <div className="border border-slate-300 w-[40%] h-[80%] gap-4 flex flex-col p-6">
            <CustomInput
              type="text"
              placeholder="Product Name"
              label={"Title"}
              styles="bg-slate-200 "
            />
            <CustomInput
              type="text"
              placeholder="Description of Product"
              label={"Description"}
              styles="bg-slate-200 "
              icon
            />
            <CustomInput
              type="number"
              placeholder="Rs.5508"
              label={"Price"}
              styles="bg-slate-200 "
            />
            <div className="flex flex-col">
              <label className="font-medium text-lg">Category</label>
              <select className="p-2  border border-black rounded-md bg-slate-200">
                <option value="Fashion">Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Sports">Sports</option>
                <option value="Medicines">Medicines</option>
                <option value="Inductrial Equipments">
                  Industrial Equipments
                </option>
              </select>
            </div>
            <div>
              <p>Want your bid to be featured ?</p>
              <div className="flex items-center gap-2 mb-2 mt-4">
                <CustomInput type="radio" />
                <label>Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <CustomInput type="radio" />
                <label>No</label>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
