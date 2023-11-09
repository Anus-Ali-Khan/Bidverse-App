import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Products", href: "/products", current: true },
  { name: "Create Product", href: "/createProduct", current: true },
  { name: "Favourites", href: "/favourites", current: true },
  { name: "My Profile", href: "/myprofile", current: true },
  { name: "Sign in", href: "/login", current: true },
  { name: "Sign up", href: "/signup", current: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => {
      return !prev;
    });
    console.log(open);
  };

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

      <div className="hidden sm:block">
        <nav className="flex gap-16 max-lg:gap-12 max-[1024px]:gap-12   ">
          {navLinks.slice(0, 4).map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      {/* hamburger Menu */}
      <div className="flex md:hidden max-md:hidden">
        <button
          type="button"
          onClick={handleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open Main Menu</span>
          {open == true ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="max-md:hidden">
          <div className="z-10 absolute right-1 top-32 pt-2 pb-3 space-y-1 sm:px-3 bg-black w-full">
            {navLinks.map((item) => (
              <a
                key={item.name}
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
