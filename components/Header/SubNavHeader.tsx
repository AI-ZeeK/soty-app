"use client";
import React, {useEffect, useState} from "react";
import {menSubNav, mensSNBPic, womenSubNav, womensSNBPic} from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useAppSelector} from "@/redux/hooks";
import {AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";

type Props = {};

const SubNavHeader = (props: Props) => {
  const pathName = usePathname();
  const [isMen, setIsMen] = useState("/MEN");
  const {isSubNavOpen} = useAppSelector((state) => state.AppReducer);

  useEffect(() => {
    if (pathName.toUpperCase() === "/WOMEN") setIsMen("/WOMEN");
    if (pathName.toUpperCase() === "/MEN") setIsMen("/MEN");
  });

  return (
    <div
      className={`${
        isSubNavOpen ? "left-0" : "-left-[100%]"
      } border-r-2 h-[calc(100vh-5.5rem)] lg:hidden flex flex-col justify-start transition-all duration-300 gap-8 items-start sm:w-2/4 w-4/5 absolute top-[5.5rem] bg-white shadow-sm overflow-auto`}
    >
      <div className="flex flex-col justify-start items-start w-full gap-4">
        <div className="grid grid-cols-2 justify-center items-center w-full sticky top-0 z-10">
          <Link
            href={"women"}
            className={`flex ${
              isMen === "/WOMEN" && "after:w-full bg-gray-100 font-semibold"
            } bg-white hover:bg-gray-100 justify-center items-center border-l border-b p-4 h-full cursor-pointer transition-all relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-black after:content-[''] after:transition-all hover:after:w-full`}
          >
            WOMEN
          </Link>
          <Link
            href="/men"
            className={`flex ${
              isMen === "/MEN" && "after:w-full bg-gray-100 font-semibold"
            } bg-white hover:bg-gray-100 justify-center items-center border-l border-b p-4 h-full cursor-pointer transition-all relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-black after:content-[''] after:transition-all hover:after:w-full`}
          >
            MEN
          </Link>
        </div>
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            width: "100%",
            type: "loop",
            gap: "1rem",
            focus: "center",
            perPage: 3,
            perMove: 2,
          }}
          className=""
        >
          {isMen === "/WOMEN"
            ? womensSNBPic.map((pic, i) => (
                <SplideSlide key={i} className=" w-24 h-36">
                  <Image
                    src={pic}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </SplideSlide>
              ))
            : mensSNBPic.map((pic, i) => (
                <SplideSlide key={i} className=" w-24 h-36">
                  <Image
                    src={pic}
                    width={500}
                    height={500}
                    className="object-fill w-full h-full"
                    alt=""
                  />
                </SplideSlide>
              ))}
        </Splide>
        <div className="flex flex-col w-full">
          <div
            className={` ${
              isMen === "/WOMEN" ? "bg-black" : "bg-[#1a1a1a]"
            } text-white p-4 w-full`}
          >
            OFFERS
          </div>
          <div className="">
            {isMen === "/WOMEN"
              ? womenSubNav.map((data, i) => (
                  <div
                    className={`p-4 w-full border text-sm cursor-pointer ${
                      data.sale ? "font-semibold text-pink-600" : ""
                    } ${data.bold ? "font-semibold" : ""} ${
                      data.ad ? "bg-pink-400 text-yellow-200" : ""
                    }`}
                    key={i}
                  >
                    {data.bold ? (
                      <img src="/kk.svg" alt="KOURTNEY-KARDASHIAN" />
                    ) : (
                      <>{data.head}</>
                    )}
                  </div>
                ))
              : menSubNav.map((data, i) => (
                  <div
                    className={`p-4 w-full border text-sm cursor-pointer ${
                      data.news ? "flex flex-col gap-1" : ""
                    }`}
                    key={i}
                  >
                    {data.news ? (
                      <>
                        <span className="text-xs text-[#d33100] font-semibold relative after:absolute after:bottom-0 after:left-[-1rem] after:w-[4px] after:h-full after:bg-[#d33100] after:content-['']">
                          {data.news}
                        </span>
                        <span>{data.head}</span>
                      </>
                    ) : (
                      <span>{data.head}</span>
                    )}
                  </div>
                ))}
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-8">
        <div className="grid grid-cols-2 w-full border ">
          <div className="p-6 justify-center items-center flex flex-col gap-4 uppercase text-sm border-r relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-2/4 after:h-[4px] after:rounded-full after:bg-pink-500 after:content-['']">
            <AiOutlineUser fontSize={32} />
            <span>Sign IN</span>
          </div>
          <div className="p-6 justify-center items-center flex flex-col gap-4 uppercase text-sm relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-2/4 after:h-[4px] after:rounded-full after:bg-pink-500 after:content-['']">
            <AiOutlineUserAdd fontSize={32} />
            <span>Register</span>
          </div>
        </div>
        <div className="py-8 border w-full">
          <div className="grad-1 w-full">
            <div className="p-4 ">
              <div className="relative after:absolute after:bottom-0 after:left-0 after:w-[2px] after:h-full after:bg-white after:content-[''] p-2 px-4 flex flex-col gap-4">
                <div className="flex flex-col justify-center items-center text-center w-2/4">
                  <span className="text-xs">Bimbum</span>
                  <span className="text-lg font-semibold">Premier</span>
                </div>
                <div className="font-semibold">
                  FREE NEXT DAY DELIVERY + EXCLUSIVE FREE RETURNS FOR 1 YEAR!
                </div>
                <div className="flex gap-2 justify-start items-center text-sm">
                  <span className="text-pink-600">£5.99</span>
                  <span className="line-through">£9.99</span>
                  <div className="h-[16px] bg-black w-[2px]" />
                  <span className="text-pink-600">40% OFF</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-4 justify-center items-center">
              <button className="border-none bg-black text-white p-2 px-4 text-sm hover:bg-gray-800 transition-all">
                ADD TO CART
              </button>
              <Link
                href={"/#"}
                className="text-xs font-semibold underline hover:text-gray-600"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-4 text-sm">
            <Link href={""} className="underline p-2">
              Track My Order
            </Link>
            <Link href={""} className="underline p-2">
              Help
            </Link>
            <Link href={""} className="underline p-2">
              Returns
            </Link>
            <Link href={""} className="underline p-2">
              Delivery Info
            </Link>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-start items-start w-full gap-4 text-center pb-12">
          <div className="text-3xl font-semibold">DOWNLOAD THE BIMBUM APP</div>
          <div>
            Hear about exclusive offers, get early access to collabs & quicker
            checkout
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="h-10 w-28 cursor-pointer">
              <Image
                width={200}
                height={100}
                src="/google-play.jpg"
                alt=""
                className="h-full w-full object-fill"
              />
            </div>
            <div className="h-10 w-28 cursor-pointer">
              <Image
                width={200}
                height={100}
                src="/app-store.jpg"
                alt=""
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavHeader;
