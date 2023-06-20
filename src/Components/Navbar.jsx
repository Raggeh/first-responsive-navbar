import React, { useState } from "react";
import logo from "./logo.jpg";

import { Icon } from "@iconify/react";

const Navbar = () => {


  const [nav, setNav] = useState(false); 

  const hideMenu = ()=>{
    setNav(!nav);
  }


  return (
    <div className="w-full h-[82px]">
      <div className="px-4 flex justify-between items-center w-full h-full bg-blue-600">
        <div className="items-center flex">
          <img src={logo} className="pr-4 w-50 h-16 rounded-lg" alt="" />
          <h1 className="text-white font-bold font-times"> Class 0f 2020 </h1>
        </div>

        <div className="pr-4 flex">
          <ul className="hidden md:flex justify-between font-semibold text-xl text-white  mr-10  ">
            <li className="pr-4">Home</li>
            <li className="pr-4">Service</li>
            <li className="pr-4">Contact</li>
            <li className="pr-4">About Us</li>
            <li className="pr-4 text-red-500">Sign in</li>
          </ul>
        </div>

        <div className="md:hidden">
          {!nav ? (
            <Icon
              icon="ic:outline-menu"
              className="text-white w-12"
              onClick={hideMenu}
            />
          ) : (
            <Icon
              icon="uil:cancel"
              className="text-white w-12"
              onClick={hideMenu}
            />
          )}
        </div>
      </div>
      <ul
        className=" md:hidden font-bold text-gray-600 text-sm mr-10 bg-blue-200 w-full pr-4
      rounded-br-full absolute"
      >
        <li className="pr-4">Home</li>
        <li className="pr-4">Service</li>
        <li className="pr-4">Contact</li>
        <li className="pr-4">About Us</li>
        <li className="pr-4 text-red-500">Sign in</li>
      </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
