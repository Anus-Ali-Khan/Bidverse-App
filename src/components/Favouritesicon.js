import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "../api/axios";
import { IoIosHeart } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Reduxfeatures/users";

const FAV_URL = "/api/v1/favourites";

const currentUser = JSON.parse(localStorage.getItem("user"));
// console.log(currentUser._id);
// console.log(currentUser.favourites);

const Favouritesicon = ({ productId }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    // if (
    //   user.favourites.find((favourite) => {
    //     return favourite === productId;
    //   })
    // )}

    console.log("User from redux", user);

    const favProds = user.favourites;
    function userFavProducts(favProd) {
      return favProd !== productId;
    }
    console.log(favProds, productId);
    let newFavArray = [];
    if (favProds.includes(productId)) {
      newFavArray = favProds.filter(userFavProducts);
    } else {
      newFavArray = [...favProds, productId];
    }
    console.log("newFavArray", newFavArray);
    try {
      const response = await axios.put(FAV_URL, {
        userId: currentUser._id,
        favourites: newFavArray,
      });
      console.log("API res", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      if (response.data?.success === true) {
        dispatch(setUser(response.data.user));
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        <AiOutlineHeart className="mb-2 h-10 w-6" />
      </button>
      {user.favourites.join(", ")}
    </div>
  );
};

export default Favouritesicon;
