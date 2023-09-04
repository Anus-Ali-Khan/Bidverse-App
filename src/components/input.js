import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";

const Input = () => {
  return (
    <div className="input-container flex flex-col ">
      <div>
        <input type="text" placeholder="email@gmail.com" />
        <BiSolidUser className="i" />
      </div>
      <div>
        <input type="password" placeholder="password" />
        <BiSolidLockAlt className="i" />
      </div>
    </div>
  );
};

export default Input;
