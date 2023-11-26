import React, { useState } from "react";
import Navbar2 from "../pages/Navbar2";
import { BiImage } from "react-icons/bi";
import CustomInput from "../components/CustomInput";
import axios from "../api/axios";

const ADDPROD_URL = "/api/v1/product/createProduct";
const jwtToken = localStorage.getItem("token");

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADDPROD_URL,
        {
          name: title,
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftruvison.com%2Fproduct%2Fcornea-full-hd-tv-32%2F&psig=AOvVaw1Y1vjQhZbVr9tcqRmvkXp7&ust=1701069888059000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKipyKSR4YIDFQAAAAAdAAAAABAF",
          price: price,
          endTime: endTime,
          isFeatured: isFeatured,
          category: category,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${jwtToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar2 className="max-md:gap-4 " />
      <div className="flex flex-col p-8 ">
        <p className="text-2xl mb-2 font-semibold max-sm:text-center ">
          Add Product
        </p>
        <div className="flex  gap-16 max-sm:flex-col">
          <div className="border border-slate-300 w-[40%] h-[70%] flex flex-col items-center p-6 rounded-xl max-sm:w-[100%]">
            <BiImage className="w-[80%] h-[80%]  " />
            <input type="file" className="max-md:ml-12" />
            <button className="bg-orange-400 text-white w-[80%] p-2 text-lg mt-4 rounded-lg">
              Upload Image
            </button>
          </div>

          <div className="border border-slate-300 w-[40%] h-[80%] gap-4 flex flex-col p-6 max-sm:w-[100%]">
            <form onSubmit={handleSubmit}>
              <CustomInput
                type="text"
                placeholder="Product Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label={"Title"}
                styles="bg-slate-200 "
              />
              <CustomInput
                type="text"
                placeholder="Description of Product"
                label={"Description"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                styles="bg-slate-200 "
                icon
              />
              <CustomInput
                type="number"
                placeholder="Rs.5508"
                label={"Price"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                styles="bg-slate-200 "
              />
              <div className="flex flex-col">
                <label className="font-medium text-lg">Category</label>
                <select
                  className="p-2  border border-black rounded-md bg-slate-200"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
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
                  <CustomInput
                    type="radio"
                    name={"feature buttons"}
                    value={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.value)}
                  />
                  <label>Yes</label>
                </div>
                <div className="flex items-center gap-2">
                  <CustomInput
                    type="radio"
                    name={"feature buttons"}
                    value={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.value)}
                  />
                  <label>No</label>
                </div>
              </div>
              <CustomInput
                type="date"
                label={"Bid End Time"}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                styles="mt-1"
              />
              <button className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-lg ">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
