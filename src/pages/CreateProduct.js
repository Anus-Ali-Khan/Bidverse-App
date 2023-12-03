import React, { useState } from "react";
import Navbar2 from "../pages/Navbar2";
import { BiImage } from "react-icons/bi";
import CustomInput from "../components/CustomInput";
import axios from "../api/axios";
import { storage } from "../firebaseconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import PaymentStripe from "../components/PaymentStripe";

const ADDPROD_URL = "/api/v1/product/createProduct";
const jwtToken = localStorage.getItem("token");

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [endTime, setEndTime] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageSubmit = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADDPROD_URL,
        {
          name: title,
          image: url,
          price: price,
          endTime: endTime,
          isFeatured: isFeatured,
          category: category,
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${jwtToken}`,
          },
        }
      );
      // console.log(response.data);
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
          <div className="border border-slate-300 w-[50%] h-[70%] flex flex-col items-center p-6 rounded-xl max-sm:w-[100%]">
            {image ? (
              <img
                src={url}
                alt="Product Image"
                className="w-[80%] h-[80%] mb-4  "
              />
            ) : (
              <BiImage className="w-[80%] h-[80%]  " />
            )}

            <input
              type="file"
              onChange={handleImageChange}
              className="max-md:ml-12"
            />
            <button
              onClick={handleImageSubmit}
              className="bg-orange-400 text-white w-[80%] p-2 text-lg mt-4 rounded-lg"
            >
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
                  <option value="Furnitures">Furnitures</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <p className="mt-1">Want your bid to be featured?</p>
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
            <PaymentStripe />
          </div>
        </div>
      </div>
    </div>
  );
}
