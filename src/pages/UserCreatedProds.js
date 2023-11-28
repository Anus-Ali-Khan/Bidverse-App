import React, { useEffect } from "react";
import Navbar2 from "./Navbar2";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Reduxfeatures/products";
import DeleteItems from "../components/DeleteItems";

const UserCreatedProds = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => {
    return state.products;
  });
  //   console.log("products inn store", allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="bg-slate-100 h-screen">
      <Navbar2 />
      <div>
        {allProducts.products.length == 0 ? (
          <h1 className="text-5xl mt-10 mb-12 font-sans text-center font-semibold max-sm:text-4xl ">
            No Products to Display
          </h1>
        ) : (
          <h1 className="text-5xl mt-10 mb-12 font-sans text-center font-semibold max-sm:text-4xl ">
            Your Products
          </h1>
        )}
      </div>
      <div className=" flex justify-around mt-6 m-4 cursor-pointer ">
        <div className="flex justify-center flex-wrap  gap-8 max-md:gap-14 max-[768px]:gap-14">
          {allProducts.products.map((product, index) => (
            <DeleteItems data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCreatedProds;
