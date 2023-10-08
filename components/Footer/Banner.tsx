import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="p-4 border flex justify-center items-center">
      <img src="/footer_strip_desk_mob.svg" alt="" className="lg:hidden" />
      <img src="/footer_strip_desk.svg" alt="" className="lg:flex hidden" />
    </div>
  );
};

export default Banner;
