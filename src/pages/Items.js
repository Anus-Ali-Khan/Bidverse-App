import React from "react";

export default function Items({ id, Title, Description, Price, productImage }) {
  return (
    <div className="border border-solid rounded-2xl p-6  w-1/4 h-auto text-xl bg-white">
      <img src={productImage} />
      <div className="mt-4 text-center">
        <p className="font-semibold">
          <b>{Title}</b>
        </p>
        <p>{Description}</p>
        <p className="font-semibold">Rs.{Price}</p>
      </div>
    </div>
  );
}
