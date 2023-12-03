import React, { useEffect } from "react";
import Navbar2 from "../pages/Navbar2";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Reduxfeatures/users";
import axios from "../api/axios";

const FAVPRODS_URL = "/api/v1/favourites";

export default function Favourites() {
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const favouriteProds = async () => {
    try {
      const response = await axios.put(FAVPRODS_URL, {
        userId: user._id,
        favourites: user.favourites,
      });
      // dispatch(setUser(response.data.favourites));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    favouriteProds();
  }, []);

  return (
    <div>
      <Navbar2 />
    </div>
  );
}
