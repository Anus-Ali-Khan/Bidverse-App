import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbars flex flex-col pr-8 font-semibold text-lg max-md:text-sm  max-[768px]:text-sm">
      <nav className="flex justify-evenly m-3 items-center max-sm:hidden ">
        <Link>
          <p className="flex">
            Ship to:
            <img
              src={require("../assets/istockphoto-472330681-612x612.jpg")}
              alt="pak-flag"
              className="h-4 w-6 mt-1.5 mr-1 ml-1 "
            />
            PK
          </p>
        </Link>
        <Link to="/login" className="flex gap-1 items-center">
          <CiUser className=" h-6 w-6" />
          Sign in
        </Link>

        <Link to="/signup">
          <button className="border border-solid bg-orange-500 font-semibold text-white p-2 rounded-full w-32 text-base ">
            Sign up
          </button>
        </Link>
      </nav>
      <nav className="flex gap-16 max-lg:gap-12 max-[1024px]:gap-12 max-sm:hidden  ">
        <Link to="/products">Products</Link>
        <Link to="/createProduct">Create Product</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/myprofile">My Profile</Link>
      </nav>
    </div>
  );
};

export default Navbar;
