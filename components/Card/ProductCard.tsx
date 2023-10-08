"use client";
import {WearsType} from "@/data/data";
import {addToCart} from "@/redux/features/AppSlice";
import {useAppDispatch} from "@/redux/hooks";
import React from "react";

type Props = {
  wear: WearsType;
};

const ProductCard = ({wear}: Props) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (data: WearsType) => {
    dispatch(addToCart(data));
  };
  return (
    <div className="flex flex-col cursor-pointer hover:underline">
      <div>
        <img src={wear.img} alt="" />
      </div>
      <div className="p-2 flex flex-col justify-between items-start h-full">
        <p className="">{wear.head}</p>
        <small>${wear.price}</small>
      </div>
      <div className="p-2 text-xs">
        <button
          onClick={() => handleAddToCart(wear)}
          className="bg-black text-white p-2 w-full hover:bg-[#1a1a1a]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
