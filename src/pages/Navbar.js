import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbars flex flex-col pr-4">
      <nav className="flex gap-3">
        <Link to="" className="flex gap-1">
          <CiUser className="mt-1" />
          Sign in
        </Link>

        <Link>
          <button className="">Sign up</button>
        </Link>
      </nav>
      <nav className="flex gap-3">
        <Link>Home</Link>
        <Link></Link>
        <Link>Create Product</Link>
        <Link>Favourites</Link>
        <Link>My Cart</Link>
        <Link>My Profile</Link>
      </nav>
    </div>
  );
};

export default Navbar;
