import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Products", href: "/products", current: true },
  { name: "Create Product", href: "/createProduct", current: true },
  { name: "Favourites", href: "/favourites", current: true },
  { name: "My Profile", href: "/myprofile", current: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
      <nav className="flex gap-16 max-lg:gap-12 max-[1024px]:gap-12   ">
        {navLinks.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>
      {/* hamburger Menu */}
      <div className="mr-2 flex md:hidden">
        <button
          type="button"
          onClick={() => {}}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open Main Menu</span>
          {(open = true ? <FaTimes /> : <FaBars />)}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
