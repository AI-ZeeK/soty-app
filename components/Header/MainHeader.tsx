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
  const [isMen, setIsMen] = useState("/MEN");
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
        <div className="">
          <svg
            width="140px"
            height="40.2px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3.8999999999999773 -4.599999999999994 507.79999999999995 159.2"
            // preserveAspectRatio="xMidYMid"
          >
            <defs>
              <filter
                id="editing-jagged"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feTurbulence
                  result="turb"
                  baseFrequency="0.17"
                  numOctaves="1"
                  seed="1"
                ></feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turb"
                  scale="12"
                ></feDisplacementMap>
              </filter>
            </defs>
            <g filter="url(#editing-jagged)">
              <g transform="translate(72.98498809337616, 108.00000190734863)">
                <path
                  d="M0.62-0.44L0.62-0.44L11.70-58.08L11.70-58.08Q22.09-58.96 28.78-58.96L28.78-58.96L28.78-58.96Q35.46-58.96 39.78-58.39L39.78-58.39L39.78-58.39Q44.09-57.82 46.99-56.32L46.99-56.32L46.99-56.32Q52.80-53.50 52.80-45.76L52.80-45.76L52.80-45.76Q52.80-41.27 48.93-37.49L48.93-37.49L48.93-37.49Q45.32-34.06 41.36-33.26L41.36-33.26L41.36-33.26Q45.58-32.56 48.58-29.39L48.58-29.39L48.58-29.39Q51.74-26.05 51.74-20.86L51.74-20.86L51.74-20.86Q51.74-10.82 44.26-4.97L44.26-4.97L44.26-4.97Q36.78 0.88 22.09 0.88L22.09 0.88L22.09 0.88Q11.97 0.88 0.62-0.44ZM24.55-28.34L20.15-5.54L20.15-5.54Q20.94-5.46 21.12-5.46L21.12-5.46L21.91-5.46L21.91-5.46Q29.13-5.46 32.21-10.21L32.21-10.21L32.21-10.21Q34.50-13.90 34.50-20.68L34.50-20.68L34.50-20.68Q34.50-24.29 32.16-26.22L32.16-26.22L32.16-26.22Q29.83-28.16 24.55-28.34L24.55-28.34ZM37.93-45.67L37.93-45.67L37.93-45.67Q37.93-52.98 30.89-52.98L30.89-52.98L30.10-52.98L30.10-52.98Q29.74-52.98 29.22-52.89L29.22-52.89L25.70-34.32L26.58-34.32L26.58-34.32Q37.93-34.58 37.93-45.67ZM78.67-4.84L78.67-4.84L78.67-4.84Q75.94 1.76 67.23 1.76L67.23 1.76L67.23 1.76Q62.74 1.76 59.93-1.32L59.93-1.32L59.93-1.32Q57.55-4.05 57.55-6.78L57.55-6.78L57.55-6.78Q57.55-13.90 60.81-27.81L60.81-27.81L64.06-44.88L81.93-46.64L76.56-18.83L76.56-18.83Q75.06-12.32 75.06-10.03L75.06-10.03L75.06-10.03Q75.06-5.02 78.67-4.84ZM65.65-57.11L65.65-57.11L65.65-57.11Q65.65-60.54 68.51-62.39L68.51-62.39L68.51-62.39Q71.37-64.24 75.50-64.24L75.50-64.24L75.50-64.24Q79.64-64.24 82.15-62.39L82.15-62.39L82.15-62.39Q84.66-60.54 84.66-57.11L84.66-57.11L84.66-57.11Q84.66-53.68 81.88-51.92L81.88-51.92L81.88-51.92Q79.11-50.16 74.98-50.16L74.98-50.16L74.98-50.16Q70.84-50.16 68.24-51.92L68.24-51.92L68.24-51.92Q65.65-53.68 65.65-57.11ZM149.51 1.76L149.51 1.76L149.51 1.76Q138.86 1.76 138.86-6.51L138.86-6.51L138.86-6.51Q138.86-10.12 140.40-17.12L140.40-17.12L140.40-17.12Q141.94-24.11 142.47-26.93L142.47-26.93L142.47-26.93Q143.70-33.35 143.70-35.38L143.70-35.38L143.70-35.38Q143.70-39.86 140.36-39.86L140.36-39.86L140.36-39.86Q138.16-39.86 136.05-36.83L136.05-36.83L136.05-36.83Q133.94-33.79 132.97-27.72L132.97-27.72L127.51 0L110.35 1.76L115.10-22.18L115.10-22.18Q115.90-26.14 116.60-30.62L116.60-30.62L116.60-30.62Q117.30-35.11 117.30-35.82L117.30-35.82L117.30-35.82Q117.30-39.86 114.31-39.86L114.31-39.86L114.31-39.86Q112.29-39.86 110.09-36.87L110.09-36.87L110.09-36.87Q107.89-33.88 106.66-27.72L106.66-27.72L101.29 0L83.95 1.76L93.19-44.88L107.54-46.64L106.04-37.75L106.04-37.75Q108.33-42.50 112.55-44.57L112.55-44.57L112.55-44.57Q116.78-46.64 123.38-46.64L123.38-46.64L123.38-46.64Q127.16-46.64 129.62-44.79L129.62-44.79L129.62-44.79Q132.09-42.94 132.88-39.95L132.88-39.95L132.88-39.95Q134.38-43.03 138.20-44.84L138.20-44.84L138.20-44.84Q142.03-46.64 146.74-46.64L146.74-46.64L146.74-46.64Q151.45-46.64 153.78-45.63L153.78-45.63L153.78-45.63Q156.11-44.62 157.52-42.94L157.52-42.94L157.52-42.94Q159.90-39.86 159.90-34.23L159.90-34.23L159.90-34.23Q159.90-28.69 157.52-17.16L157.52-17.16L157.52-17.16Q156.29-11.53 156.29-9.46L156.29-9.46L156.29-9.46Q156.29-7.39 157.48-6.16L157.48-6.16L157.48-6.16Q158.66-4.93 160.42-4.75L160.42-4.75L160.42-4.75Q159.54-1.76 156.51 0L156.51 0L156.51 0Q153.47 1.76 149.51 1.76ZM166.32-0.44L166.32-0.44L177.41-58.08L177.41-58.08Q187.79-58.96 194.48-58.96L194.48-58.96L194.48-58.96Q201.17-58.96 205.48-58.39L205.48-58.39L205.48-58.39Q209.79-57.82 212.70-56.32L212.70-56.32L212.70-56.32Q218.50-53.50 218.50-45.76L218.50-45.76L218.50-45.76Q218.50-41.27 214.63-37.49L214.63-37.49L214.63-37.49Q211.02-34.06 207.06-33.26L207.06-33.26L207.06-33.26Q211.29-32.56 214.28-29.39L214.28-29.39L214.28-29.39Q217.45-26.05 217.45-20.86L217.45-20.86L217.45-20.86Q217.45-10.82 209.97-4.97L209.97-4.97L209.97-4.97Q202.49 0.88 187.79 0.88L187.79 0.88L187.79 0.88Q177.67 0.88 166.32-0.44ZM190.26-28.34L185.86-5.54L185.86-5.54Q186.65-5.46 186.82-5.46L186.82-5.46L187.62-5.46L187.62-5.46Q194.83-5.46 197.91-10.21L197.91-10.21L197.91-10.21Q200.20-13.90 200.20-20.68L200.20-20.68L200.20-20.68Q200.20-24.29 197.87-26.22L197.87-26.22L197.87-26.22Q195.54-28.16 190.26-28.34L190.26-28.34ZM203.63-45.67L203.63-45.67L203.63-45.67Q203.63-52.98 196.59-52.98L196.59-52.98L195.80-52.98L195.80-52.98Q195.45-52.98 194.92-52.89L194.92-52.89L191.40-34.32L192.28-34.32L192.28-34.32Q203.63-34.58 203.63-45.67ZM251.50-3.70L251.50-3.70L251.50-3.70Q247.28 1.76 236.81 1.76L236.81 1.76L236.81 1.76Q231.35 1.76 227.39-1.54L227.39-1.54L227.39-1.54Q223.43-4.84 223.43-9.59L223.43-9.59L223.43-9.59Q223.43-12.23 223.70-13.55L223.70-13.55L229.59-44.88L247.46-46.64L241.03-12.67L241.03-12.67Q240.68-10.74 240.68-9.59L240.68-9.59L240.68-9.59Q240.68-4.49 243.76-4.49L243.76-4.49L243.76-4.49Q247.19-4.49 249.66-9.15L249.66-9.15L249.66-9.15Q250.45-10.65 250.80-12.58L250.80-12.58L257.05-44.88L274.38-46.64L267.87-12.32L267.87-12.32Q267.61-11 267.61-9.59L267.61-9.59L267.61-9.59Q267.61-8.18 268.40-6.64L268.40-6.64L268.40-6.64Q269.19-5.10 271.74-4.75L271.74-4.75L271.74-4.75Q271.22-2.64 269.37-1.23L269.37-1.23L269.37-1.23Q265.50 1.76 261.32 1.76L261.32 1.76L261.32 1.76Q257.14 1.76 254.67 0.26L254.67 0.26L254.67 0.26Q252.21-1.23 251.50-3.70ZM342.50 1.76L342.50 1.76L342.50 1.76Q331.85 1.76 331.85-6.51L331.85-6.51L331.85-6.51Q331.85-10.12 333.39-17.12L333.39-17.12L333.39-17.12Q334.93-24.11 335.46-26.93L335.46-26.93L335.46-26.93Q336.69-33.35 336.69-35.38L336.69-35.38L336.69-35.38Q336.69-39.86 333.34-39.86L333.34-39.86L333.34-39.86Q331.14-39.86 329.03-36.83L329.03-36.83L329.03-36.83Q326.92-33.79 325.95-27.72L325.95-27.72L320.50 0L303.34 1.76L308.09-22.18L308.09-22.18Q308.88-26.14 309.58-30.62L309.58-30.62L309.58-30.62Q310.29-35.11 310.29-35.82L310.29-35.82L310.29-35.82Q310.29-39.86 307.30-39.86L307.30-39.86L307.30-39.86Q305.27-39.86 303.07-36.87L303.07-36.87L303.07-36.87Q300.87-33.88 299.64-27.72L299.64-27.72L294.27 0L276.94 1.76L286.18-44.88L300.52-46.64L299.02-37.75L299.02-37.75Q301.31-42.50 305.54-44.57L305.54-44.57L305.54-44.57Q309.76-46.64 316.36-46.64L316.36-46.64L316.36-46.64Q320.14-46.64 322.61-44.79L322.61-44.79L322.61-44.79Q325.07-42.94 325.86-39.95L325.86-39.95L325.86-39.95Q327.36-43.03 331.19-44.84L331.19-44.84L331.19-44.84Q335.02-46.64 339.72-46.64L339.72-46.64L339.72-46.64Q344.43-46.64 346.76-45.63L346.76-45.63L346.76-45.63Q349.10-44.62 350.50-42.94L350.50-42.94L350.50-42.94Q352.88-39.86 352.88-34.23L352.88-34.23L352.88-34.23Q352.88-28.69 350.50-17.16L350.50-17.16L350.50-17.16Q349.27-11.53 349.27-9.46L349.27-9.46L349.27-9.46Q349.27-7.39 350.46-6.16L350.46-6.16L350.46-6.16Q351.65-4.93 353.41-4.75L353.41-4.75L353.41-4.75Q352.53-1.76 349.49 0L349.49 0L349.49 0Q346.46 1.76 342.50 1.76Z"
                  fill="#444"
                ></path>
              </g>
            </g>
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
