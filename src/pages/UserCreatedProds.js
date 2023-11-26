import React from "react";
import Navbar2 from "./Navbar2";
import axios from "../api/axios";

const USERCREATEDPRODS_URL = "/api/v1/product/userProducts";

const UserCreatedProds = () => {
  return (
    <div className="bg-slate-100 h-auto">
      <Navbar2 />
      <div>
        <h1 className="text-5xl mt-10 mb-12 font-sans text-center font-semibold max-sm:text-4xl ">
          Your Products
        </h1>
      </div>
    </div>
  );
};

export default UserCreatedProds;
