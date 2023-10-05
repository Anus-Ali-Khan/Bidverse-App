import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";

const Input = () => {
  return (
    <div className="input-container flex flex-col gap-3 w-[70%]">
      <div className="relative flex flex-col">
        <label className="font-medium text-lg">Email</label>
        <input
          type="text"
          placeholder="email@gmail.com"
          className="p-2  border border-black rounded-md text-center"
        />
        <BiSolidUser className="absolute top-10 left-3 " />
      </div>
      <div className="flex flex-col relative">
        <label className="font-medium text-lg">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="p-2  border border-black rounded-md text-center"
        />
        <BiSolidLockAlt className="absolute top-10 left-3" />
      </div>
    </div>
  );
};

export default Input;
