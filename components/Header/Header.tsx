"use client";
import React, {useEffect, useRef} from "react";
import Banner from "./Banner";
import MainHeader from "./MainHeader";
import SubNavHeader from "./SubNavHeader";
import {closeSubNavOpen} from "@/redux/features/AppSlice";
import {useAppDispatch} from "@/redux/hooks";
import SubHeader from "./SubHeader";

type Props = {};

const Header = (props: Props) => {
  const headerRef: any = useRef(null);
  const dispatch = useAppDispatch();
  const handleClickOutside = (event: any) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      dispatch(closeSubNavOpen());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav ref={headerRef} className="relative ">
      <Banner />
      <MainHeader />
      <SubNavHeader />
      <SubHeader />
    </nav>
  );
};

export default Header;
