"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="bg-black text-white p-1 text-xs h-10">
      <Carousel
        className="h-full flex justify-center items-center"
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={10000}
        transitionTime={2000}
      >
        <div className="hover:underline cursor-pointer">
          DOWNLOAD THE BOOHOO APP FOR EXCLUSIVE DISCOUNTS!
        </div>
        <div className="hover:underline cursor-pointer">
          30% OFF MENSWEAR!* + 99p NEXT DAY DELIVERY!** USE CODE: HURRY
        </div>
        <div className="hover:underline cursor-pointer">
          FURTHER REDUCTIONS - UP TO 70% OFF AUTUMN!*
        </div>
        <div className="hover:underline cursor-pointer">
          EXTRA 10% OFF EVERYTHING!* CODE: EXTRA
        </div>
        <div className="hover:underline cursor-pointer">
          40% OFF MENSWEAR!*{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
