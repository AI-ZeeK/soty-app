"use client";
import {WearsType, cartPics} from "@/data/data";
import {removeFromCart} from "@/redux/features/AppSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FaAngleDown} from "react-icons/fa6";

type Props = {};

const Cart = (props: Props) => {
  const {cart} = useAppSelector((state) => state.AppReducer);
  const sumTotal = cart.reduce(
    (total: any, item: WearsType) => total + (Number(item?.price) || 0),
    0
  );
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-1">
      <div className="border">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div
            className={`flex justify-center gap-2 text-2xl items-center p-4 relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-16 after:h-[2px] after:rounded-full after:bg-black after:content-['']`}
          >
            <span>Cart </span>{" "}
            {cart.length ? <span> ({cart.length})</span> : ""}
          </div>
          {cart.length ? (
            <div className="p-4 flex flex-col gap-4 lg:flex-row border lg:border-none w-full lg:w-auto justify-center items-center">
              <button className="bg-black text-white p-2 px-8 w-full hover:bg-[#1a1a1a] uppercase text-xs flex justify-center items-center max-w-[10rem]">
                Checkout
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-50">
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-start gap-4 lg:max-w-[60rem] relative">
          {cart.length ? (
            <>
              <div className="flex flex-col gap-8 py-4 w-full  bg-white">
                {cart.map((data, i) => (
                  <div key={i} className="border flex  ">
                    <div className="w-32 min-w-[8rem] h-40">
                      <img
                        src={data.img}
                        alt=""
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4 px-8 text-sm flex flex-col justify-between items-start gap-4 w-full">
                      <p>{data.head}</p>
                      <div className="flex justify-between w-full">
                        <p
                          onClick={() => dispatch(removeFromCart(data))}
                          className="underline cursor-pointer text-xs"
                        >
                          remove
                        </p>

                        <p className="text-md font-semibold">${data.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="grad-1 w-full">
                  <div className="p-4">
                    <div className="relative after:absolute after:bottom-0 after:left-0 after:w-[2px] after:h-full after:bg-white after:content-[''] p-2 px-4 flex flex-col gap-4">
                      <div className="flex flex-col justify-center items-center text-center w-2/4">
                        <span className="text-xs">Boohoo</span>
                        <span className="text-lg font-semibold">Premier</span>
                      </div>
                      <div className="font-semibold">
                        FREE NEXT DAY DELIVERY + EXCLUSIVE FREE RETURNS FOR 1
                        YEAR!
                      </div>
                      <div className="flex gap-2 justify-start items-center text-sm">
                        <span className="text-pink-600">£5.99</span>
                        <span className="line-through">£9.99</span>
                        <div className="h-[16px] bg-black w-[2px]" />
                        <span className="text-pink-600">40% OFF</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[4fr_1fr] gap-4 justify-between items-between w-full px-2">
                    <button className="border-none bg-black text-white p-2 px-4 text-sm hover:bg-gray-800 transition-all">
                      ADD TO BAG
                    </button>
                    <div className="flex justify-end">
                      <Link
                        href={"/#"}
                        className="text-xs w-12 bg-white p-2 h-12 hover:bg-gray-100 flex justify-center items-center"
                      >
                        <FaAngleDown fontSize={24} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex justify-center items-center cursor-pointer">
                    <img src="/mastercard.png" alt="" />
                  </div>{" "}
                  <div className="flex justify-center items-center cursor-pointer">
                    <img src="/visa.png" alt="" />
                  </div>
                  <div className="flex justify-center items-center cursor-pointer">
                    <img src="/global-sign.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white p-4 w-full sticky top-40">
                <div className="flex justify-between items-center text-sm p-2 font-semibold">
                  <p>YOUR CART</p>
                  <p>£{sumTotal}.00</p>
                </div>

                <div className="w-full h-[2px] bg-gray-100" />
                <div className="flex justify-between items-center text-lg p-2 pt-4">
                  <p>SUBTOTAL (EXCLUDING DELIVERY)</p>
                  <p>£{sumTotal}.00</p>
                </div>
                <small className="text-xs px-2">
                  *All taxes are included in product prices
                </small>
                <div className="p-2 py-4 flex w-full justify-center items-center">
                  <button className="bg-black text-white  p-2 px-8 w-full hover:bg-[#1a1a1a] uppercase text-sm flex justify-center items-center">
                    Checkout
                  </button>
                </div>
                <p className="text-sm flex justify-center items-center px-2">
                  OR, Checkout with
                </p>
                <div className="p-2 py-4 flex w-full justify-center items-center">
                  <button className="bg-pink-400  p-2 px-8 gap-4 w-full hover:bg-pink-300 transition-all uppercase text-sm flex justify-center items-center">
                    <span className="font-semibold">KLARNA.</span>
                    <span>Express Checkout</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center p-8 col-span-2">
              YOUR CART IS CURRENTLY EMPTY
            </p>
          )}
        </div>
      </div>
      <div className="md:p-4 grid gap-[2px] grid-cols-2 md:grid-cols-4 gap-y-8 ">
        {cartPics.map((cartPic, i) => (
          <div key={i} className="flex flex-col cursor-pointer hover:underline">
            <Image width={1000} height={1000} src={cartPic.img} alt="" />
            <label htmlFor="" className="p-4 flex justify-center items-center">
              {cartPic.head}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
