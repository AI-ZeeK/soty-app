"use client";
import React, {Fragment} from "react";
import Banner from "./Banner";
import {FaAngleDown, FaAngleRight, FaAngleUp, FaTiktok} from "react-icons/fa6";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import {FooterType} from "@/data/data";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {setFooterNav} from "@/redux/features/AppSlice";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  // setFooterNav
  const {footerData} = useAppSelector((state) => state.AppReducer);
  const dispatch = useAppDispatch();

  const handleSetFooterNav = (D: FooterType) => {
    dispatch(setFooterNav(D));
  };

  return (
    <footer>
      <Banner />
      <section className="grid gap-0 py-8 lg:grid-cols-[1fr_1fr_1fr_1.5fr] lg:gap-4 lg:px-4">
        {footerData.map((data, i) => (
          <>
            {data.grid ? (
              <>
                <div className="flex flex-col gap-2 py-12" key={i}>
                  <h1 className="p-4 font-semibold cursor-pointer">
                    {data.head}
                  </h1>
                  <ul>
                    <div className="grid grid-cols-2 border text-sm lg:grid-cols-1">
                      {data.subLink?.map((dat, il) => (
                        <li
                          key={il}
                          className="flex justify-between w-full items-center gap-2 border p-4 cursor-pointer hover:bg-gray-100"
                        >
                          <span>{dat.head}</span>
                          <FaAngleRight />
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col border lg:border-none" key={i}>
                  <h1
                    onClick={() => handleSetFooterNav(data)}
                    className="p-4 py-6 font-semibold cursor-pointer flex lg:cursor-default justify-between w-full items-center gap-2 lg:hover:bg-white hover:bg-gray-100"
                  >
                    <span>{data.head}</span>
                    <div className="lg:hidden">
                      {data.state ? (
                        <FaAngleUp fontSize={24} />
                      ) : (
                        <FaAngleDown fontSize={24} />
                      )}
                    </div>
                  </h1>
                  <ul
                    className={`px-4 transition-all duration-300 ${
                      data.state ? "max-h-full" : "max-h-0"
                    } overflow-hidden lg:!max-h-full`}
                  >
                    {data.subLink?.map((dat, il) => (
                      <Fragment key={il}>
                        <div className="w-full h-[2px] bg-gray-100 lg:hidden" />
                        <li className="p-2 text-sm cursor-pointer hover:underline hover:bg-gray-50 lg:hover:bg-white">
                          {dat.head}
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </>
        ))}
        <div className="flex flex-col gap-6 bg-gray-50 lg:bg-white">
          <div className="flex flex-col gap-6 p-4 py-8">
            <h1 className="p-2 font-semibold cursor-pointer text-center">
              SUBSCRIBE! GET AN EXTRA 10% OFF & INSIDE INFO!*
            </h1>
            <div className=" w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none border p-3 w-full text-sm"
              />
            </div>
            <small className="text-xs">
              *Extra 10% discount sent via email to new subscribers only. By
              subscribing, you agree to receive marketing communications from
              boohoo by email. You can unsubscribe at any point.
            </small>
            <div className="flex gap-2 justify-start items-center">
              <input
                id="checkbox"
                type="checkbox"
                className="p-2 w-8 h-8 cursor-pointer"
              />
              <label htmlFor="checkbox" className="flex gap-2 text-sm">
                <span>By signing up, you agree to our </span>
                <Link href="#" className="underline hover:decoration-clone">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button className="p-3 justify-center items-center flex bg-black text-white text-sm hover:bg-[#1a1a1a] transition-all">
              SUBSCRIBE
            </button>
          </div>
          <div className="bg-[#aeaeae] p-8 flex flex-col gap-8 justify-center items-center text-sm">
            <p>Download The Bohoo App</p>
            <strong>
              Hear about exclusive offers, get early access to collabs & quicker
              checkout
            </strong>
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-4 justify-center items-center font-semibold">
                <p>SCAN TO DOWNLOAD</p>
                <img
                  src="/QR.jpeg"
                  alt=""
                  className="p-4 bg-white max-w-[10rem] max-h-[10rem]"
                />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="h-12 w-36 cursor-pointer">
                  <Image
                    width={200}
                    height={100}
                    src="/google-play.jpg"
                    alt=""
                    className="h-full w-full object-fill"
                  />
                </div>
                <div className="h-12 w-36 cursor-pointer">
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
          <div className="flex gap-8 p-4 justify-center items-center">
            <div className="cursor-pointer">
              <BsInstagram fontSize={32} />
            </div>
            <div className="cursor-pointer">
              <BsFacebook fontSize={32} />
            </div>
            <div className="cursor-pointer">
              <BsTwitter fontSize={32} />
            </div>
            <div className="cursor-pointer">
              <FaTiktok fontSize={32} />
            </div>
            <div className="cursor-pointer">
              <BsYoutube fontSize={32} />
            </div>
            <div className="cursor-pointer">
              <BsPinterest fontSize={32} />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 py-8 justify-center items-start lg:hidden">
            <label htmlFor="" className="font-semibold text-lg">
              COUNTRY
            </label>
            <select name="" id="" className="p-2 border w-full text-sm">
              <option value="UK">COUSIJSKNSJ</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 justify-center items-center text-sm lg:col-span-4 lg:justify-between lg:flex-row">
          <p>COPYRIGHT © 2023 BOOHOO</p>
          <div className="flex gap-8 ">
            <Link href={"#"} className="underline">
              Terms & Conditions
            </Link>
            <Link href={"#"} className="underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
