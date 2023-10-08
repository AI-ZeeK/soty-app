import {womenSubNav, menSubNav} from "@/data/data";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";

type Props = {};

const SubHeader = (props: Props) => {
  const pathName = usePathname();
  const [isMen, setIsMen] = useState("MEN");

  useEffect(() => {
    if (pathName.toUpperCase() === "/WOMEN") setIsMen("/WOMEN");
    if (pathName.toUpperCase() === "/MEN") setIsMen("/MEN");
  });

  return (
    <div className="hidden lg:flex justify-center items-center border-b bg-gray-50">
      {isMen === "/WOMEN"
        ? womenSubNav.map((data, i) => (
            <div
              className={`px-2 flex justify-center items-center h-12 hover:border-gray-300 border border-gray-50 text-sm cursor-pointer leading-3 ${
                data.sale ? "font-semibold  text-pink-600 " : ""
              } ${data.bold ? "font-bold text-[0.6rem]" : ""} ${
                data.ad
                  ? "bg-pink-400 text-yellow-200 !text-xs border-pink-400"
                  : ""
              }`}
              key={i}
            >
              {data.bold ? (
                <>
                  <img src="/kk.svg" alt="KOURTNEY-KARDASHIAN" />
                </>
              ) : (
                <> {data.head}</>
              )}
            </div>
          ))
        : menSubNav.map((data, i) => (
            <div
              className={`px-2 flex justify-start items-center h-12 hover:border-gray-300 border border-gray-50 text-sm cursor-pointer`}
              key={i}
            >
              <span>{data.head}</span>
            </div>
          ))}
    </div>
  );
};

export default SubHeader;
