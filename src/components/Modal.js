import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import axios from "../api/axios";

const UPDATEBIDLIST_URL = "/api/v1/product/updateBidList";
const currentUserId = JSON.parse(localStorage.getItem("user"));
// console.log(currentUserId);
const jwtToken = localStorage.getItem("token");

export default function Modal({ singleProductId }) {
  const [modal, setModal] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };
  // console.log("singleProductId", singleProductId);

  const handleUpdateBidList = async () => {
    try {
      const response = await axios.put(
        UPDATEBIDLIST_URL,
        {
          productId: singleProductId,
          bidAmount: parseInt(bidAmount),
          userId: currentUserId._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${jwtToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-lg"
      >
        Place a Bid
      </button>

      {modal && (
        <div className="modal ">
          <div
            onClick={toggleModal}
            className="h-screen w-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"
          ></div>
          <div className="absolute top-[40%] left-[40%] bg-white w-[20%] h-fit p-4 rounded-lg max-sm:w-[70%] max-sm:left-12 max-md:w-[50%] max-md:left-44 ">
            <p className="text-black text-xl font-semibold">Place Your Bid</p>
            <p className="mt-4 text-black text-base font-medium">Amount</p>
            <div className="relative">
              <input
                type="text"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="2648"
                className="rounded-md p-2 border mt-2 w-[90%] bg-slate-300 border-black pl-[3rem]"
              />
              <AiOutlineDollar className="h-6 w-6 text-black absolute top-[1.1rem] left-[1rem]" />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={toggleModal}
                className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateBidList && toggleModal}
                className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
