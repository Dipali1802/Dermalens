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
          {/* <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Our Services
            </h1>
            <p className=" mt-2 text-center lg:text-start">
            Advanced Skincare Insights : Oily Skin and Dark Spot Detection
            </p>
          </div> */}
          {/* <div className=" mt-4 lg:mt-0 "> */}
            {/* <Button title="See Services" /> */}
          {/* </div> */}
        </div>
      </div>
      <div className=" min-h-[30vw] flex flex-col justify-center px-[7%] bg-white text-blue-950  ">
      <div>
            <h1 className=" text-4xl font-bold text-left lg:text-start">
              Our Services
            </h1>
            <p className=" mt-2 text-left font-semibold lg:text-start text-blue-950">
            Advanced Skincare Insights : Oily Skin and Dark Spot Detection
            </p>
          </div>
        <div className=" flex flex-col lg:flex-row gap-5 pt-10 pb-5 ">
          <ServicesCard icon={icon1} title="Comprehensive Disease Coverage"         description="Our model is designed to predict a wide range of skin diseases, including renowned conditions such as acne, psoriasis, eczema, and more. We go beyond the ordinary, offering insights into both common and less common dermatological issues."
/>
          <ServicesCard icon={icon2} title="Tailored Solutions for Oily Skin
" description=" Uncover personalized skincare insights with our model's special focus on oily skin detection. Receive recommendations and predictions tailored to your skin's unique needs, helping you achieve a healthier complexion and balance." />
          <ServicesCard icon={icon3} title="Dark Spot Detection and Prevention 
" description="Address one of the most common skincare concerns with our dark spot detection feature. Our model identifies potential dark spots early on, allowing for proactive skincare routines and targeted prevention measures." />
        </div>
      </div>
    </>
  );
};

export default Services;

