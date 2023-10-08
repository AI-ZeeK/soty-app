"use client";
import React, {useEffect, useState} from "react";
import {CiHeart, CiSearch, CiShoppingCart, CiUser} from "react-icons/ci";
import {RxHamburgerMenu} from "react-icons/rx";
import {usePathname} from "next/navigation";
import {LiaUser} from "react-icons/lia";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {setSubNavOpen} from "@/redux/features/AppSlice";

type Props = {};

const MainHeader = (props: Props) => {
  const pathName = usePathname();
  const [isMen, setIsMen] = useState("MEN");
  const {cart} = useAppSelector((state) => state.AppReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pathName.toUpperCase() === "/WOMEN") setIsMen("/WOMEN");
    if (pathName.toUpperCase() === "/MEN") setIsMen("/MEN");
  });

  const handleSubNavOpen = () => {
    dispatch(setSubNavOpen());
  };

  return (
    <div className="flex justify-between items-center gap-2  shadow-sm h-12 lg:h-14 border-b bg-white z-40">
      <div className="flex justify-start items-center gap-8 px-4 overflow-hidden lg:min-w-[24rem]">
        <div
          className="text-3xl cursor-pointer hover:text-gray-500 transition-all lg:hidden"
          onClick={handleSubNavOpen}
        >
          <RxHamburgerMenu />
        </div>
        <div className="text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128.7"
            height="30"
            viewBox="0 0 171.59 40"
            role="img"
            aria-label="Boohoo"
            focusable="false"
          >
            <path
              d="M49.26,13.33H35.56a6.44,6.44,0,0,0-6.35,6.51V33.39a6.44,6.44,0,0,0,6.35,6.5h13.7a6.43,6.43,0,0,0,6.35-6.5V19.79a6.46,6.46,0,0,0-6.35-6.51Zm2.33,8.31V31.69a4.23,4.23,0,0,1-4.08,4.24H37.3a4.18,4.18,0,0,1-4.07-4.24v-10a4.14,4.14,0,0,1,4.05-4.23H47.51a4.14,4.14,0,0,1,4.08,4.21Zm26.77-8.36H64.6a6.52,6.52,0,0,0-6.35,6.56V33.39a6.45,6.45,0,0,0,6.35,6.5H78.36a6.43,6.43,0,0,0,6.35-6.5V19.79a6.48,6.48,0,0,0-6.35-6.51Zm2.27,8.36V31.69a4.15,4.15,0,0,1-4,4.24H66.4a4.18,4.18,0,0,1-4.07-4.24v-10a4.15,4.15,0,0,1,4.07-4.23H76.61a4.21,4.21,0,0,1,4.08,4.23Zm55.56-8.36H122.43a6.51,6.51,0,0,0-6.34,6.56V33.39a6.45,6.45,0,0,0,6.34,6.5h13.76a6.46,6.46,0,0,0,6.35-6.5V19.79A6.48,6.48,0,0,0,136.19,13.28Zm2.33,8.36V31.69a4.23,4.23,0,0,1-4.08,4.24H124.29a4.19,4.19,0,0,1-4.13-4.24h0v-10a4.16,4.16,0,0,1,4.08-4.23h10.21a4.14,4.14,0,0,1,4.07,4.21v0Zm26.72-8.36H151.48a6.52,6.52,0,0,0-6.35,6.56V33.39a6.46,6.46,0,0,0,6.35,6.5h13.76a6.46,6.46,0,0,0,6.35-6.5V19.79A6.48,6.48,0,0,0,165.24,13.28Zm2.33,8.36V31.69a4.23,4.23,0,0,1-4.08,4.24H153.28a4.18,4.18,0,0,1-4.07-4.24v-10a4.14,4.14,0,0,1,4-4.23h10.23a4.14,4.14,0,0,1,4.08,4.21v0ZM20,13.28H6.24A5.68,5.68,0,0,0,4,13.76V0H0V33.44A6.48,6.48,0,0,0,6.35,40H20a6.44,6.44,0,0,0,6.35-6.51V19.79a6.37,6.37,0,0,0-6.26-6.46H20Zm2.33,8.36V31.69a4.23,4.23,0,0,1-4.08,4.24H8.1A4.18,4.18,0,0,1,4,31.69v-10A4.2,4.2,0,0,1,8.1,17.46H18.31a4.13,4.13,0,0,1,4.07,4.18Zm85-8.31H93.54a5.23,5.23,0,0,0-2.16.48V.11h-4V40h4v-.32l-.11-17.88a4.19,4.19,0,0,1,4.07-4.18h10.22a4.17,4.17,0,0,1,4.07,4.23V40h4V20a6.41,6.41,0,0,0-6.21-6.61h-.14Z"
              transform="translate(0)"
            ></path>
          </svg>
        </div>
        <div className="hidden lg:grid grid-cols-2 justify-center items-center h-full ">
          <Link
            href={"women"}
            className={`flex ${
              isMen === "/WOMEN" && "after:w-full bg-gray-100 font-semibold"
            } hover:bg-gray-100 justify-center items-center border-l border-r p-4 h-full cursor-pointer transition-all relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px]   after:bg-black after:content-[''] after:transition-all hover:after:w-full`}
          >
            WOMEN
          </Link>
          <Link
            href="/men"
            className={`flex ${
              isMen === "/MEN" && "after:w-full bg-gray-100 font-semibold"
            } hover:bg-gray-100 justify-center items-center border-r p-4 h-full cursor-pointer transition-all relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-black after:content-[''] after:transition-all hover:after:w-full`}
          >
            MEN
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center w-full">
        <div className="flex w-full text-sm">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none border-none bg-transparent p-2 h-full w-full"
          />
        </div>
        <div className="text-2xl cursor-pointer hover:text-gray-500 transition-all w-12 h-full flex justify-center items-center">
          <CiSearch />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr] lg:flex lg:gap-2 h-full justify-center items-center lg:min-w-[10rem]">
        <div className="text-2xl cursor-pointer hover:text-gray-500 transition-all w-12 h-full flex justify-center items-center lg:hidden">
          <CiSearch />
        </div>
        <div className="grid grid-cols-3 lg:gap-2 h-full lg:bg-gray-100 justify-center items-center">
          <div className="text-2xl cursor-pointer hover:text-gray-500 transition-all w-12 h-full flex justify-center items-center">
            <CiUser />
          </div>
          <div className="text-2xl cursor-pointer hover:text-gray-500 transition-all w-12 h-full flex justify-center items-center">
            <CiHeart />
          </div>
          <Link
            href={"/cart"}
            className="text-2xl relative cursor-pointer hover:text-gray-500 transition-all w-12 h-full flex justify-center items-center"
          >
            <CiShoppingCart />
            {cart.length ? (
              <div className="text-xs absolute right-1 bg-black h-4 text-white w-4 rounded-full p-[4px] flex justify-center items-center cursor-pointer">
                {cart.length}
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
