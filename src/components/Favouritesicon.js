import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";

const FAV_URL = "/api/v1/favourites";
const jwtToken = localStorage.getItem("token");

const Favouritesicon = () => {
  const [fav, setFav] = useState(0);
  const allProducts = useSelector((state) => {
    return state.products;
  });

  console.log("products inn store", allProducts);

  const handleClick = async () => {
    try {
      const response = await axios.put(
        FAV_URL,
        { userId: allProducts.products.userId },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <AiOutlineHeart className="mb-2 h-10 w-6" onClick={handleClick} />
    </div>
  );
};

export default Favouritesicon;
