import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
 import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7"  >
        <h1
          className="lg:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-blue-800">DERMALENS</span> By Aim4u Software Solutions
          
        </h1>
        <div classname = "sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" >
          {/* <input
            type="text"
            // placeholder="An AI powered Skincare Assistant to check your skin issues and connect with the dermatologists anytime, anywhere."
            // className="text-gray-800 w-full outline-none"
          /> */}
          {/* <p className="text-white-800">Get the app to start your skin journey now!
Available on Android and IOS</p>
        </div>
      </div> */}  
      <ItemsContainer />
      <div
  className="flex flex-col sm:flex-row items-center justify-center text-center text-gray-400 text-sm pb-8"
>
  <span>Copyright © All rights reserved 2024 - by AIM4U Software Solutions, Mumbai Maharashtra.</span>
  
  {/* <SocialIcons Icons={Icons} /> */}
</div>

    </footer>
  );
};

export default Footer;