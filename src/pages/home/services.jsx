import React from "react";
// import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <>
      <div className=" flex flex-col justify-center px-[30%] pt-10 bg-white text-black">
        <div className=" flex flex-col items-center lg:flex-row justify-between  ">
          <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Our Services
            </h1>
            <p className=" mt-2 text-center lg:text-start">
            Advanced Skincare Insights : Oily Skin and Dark Spot Detection
            </p>
          </div>
          <div className=" mt-4 lg:mt-0 ">
            {/* <Button title="See Services" /> */}
          </div>
        </div>
      </div>
      <div className=" min-h-[30vw] flex flex-col justify-center px-[5%] bg-white text-black  ">
        <div className=" flex flex-col lg:flex-row gap-5 pt-14 pb-10 ">
          <ServicesCard icon={icon1} title="Comprehensive Disease Coverage" />
          <ServicesCard icon={icon2} title="Tailored Solutions for Oily Skin
" />
          <ServicesCard icon={icon3} title="Dark Spot Detection and Prevention 
" />
        </div>
      </div>
    </>
  );
};

export default Services;
