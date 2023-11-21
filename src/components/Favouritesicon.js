import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "../api/axios";
import { IoIosHeart } from "react-icons/io";
import { useSelector } from "react-redux";
import { setUser } from "../Reduxfeatures/users";

const FAV_URL = "/api/v1/favourites";

const currentUser = JSON.parse(localStorage.getItem("user"));
// console.log(currentUser._id);
// console.log(currentUser.favourites);

const Favouritesicon = ({ productId }) => {
  const user = useSelector((state) => state.user);
  const handleClick = async () => {
    try {
      const response = await axios.put(FAV_URL, {
        userId: currentUser._id,
        favourites: [...currentUser.favourites, productId],
      });
      console.log(response.data.user.favourites);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      if (response.data?.success === true) {
        dispatch(setUser(response.data));
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        { if (user.favourites.find((favourites) => {
          return favourites === productId;
        })) 
          <IoIosHeart className="mb-2 h-10 w-6" style={{ color: "red" }} />
         (
          <AiOutlineHeart className="mb-2 h-10 w-6" />
        )}
      </button>
    </div>
  );
};

export default Favouritesicon;
