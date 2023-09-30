import React from "react";
import { LiaUserCircle } from "react-icons/lia";

export default function MyProfile() {
  return (
    <div className=" h-screen flex justify-center items-center p-12">
      <div className="h-[80%] w-[20%]  flex justify-center bg-orange-400">
        <LiaUserCircle className="h-56 w-56 mt-8" />
      </div>
      <div className="h-[80%] w-[80%]  m-auto bg-blue-500 flex flex-col justify-center items-center">
        <label>User Name</label>
        <input type="text" placeholder="Anus Ali Khan" />

        <label htmlFor="">Phone Number</label>
        <input type="number" placeholder="03110162290" />
        <button>Edit Profile</button>
        <button>Your Products</button>
        <button>Your Bidded products</button>
        <button>Sign out</button>
      </div>
    </div>
  );
}
