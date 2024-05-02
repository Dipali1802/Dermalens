// import React from "react";
// // import img from "../assets/img/about.jpg";

// const About = () => {
//   return (
//     <>
//       <div className=" flex flex-col lg:flex-row justify-between items-center px-[30%] pt-10 gap-5 bg-white">
//         <div className=" w-full space-y-4">
//           <h1 className=" text-4xl font-semibold text-center lg:text-start text-black ">
//             About Us
//           </h1>
//         </div>
//       </div>
//       <div className=" min-h-[25vw] flex flex-col lg:flex-row justify-between items-center px-[10%] gap-5 bg-white">
//         <div className=" w-full space-y-4">
//           <p className=" text-justify lg:text-start text-black">
//             At AiM4u, the health of our user is our priority. Research is the
//             core of our organization. Our algorithm detects skin diseases with
//             95% accuracy.
//           </p>
//           <p className="text-justify lg:text-start text-black">
//             The preview of the Detection Algorithm can be used from the website
//             in the features section. 90% of the skin patients do not visit a
//             dermatologist. There are just 10,000 dermatologists for 1.3 billion
//             people. Our app helps users connect with the dermatologist from
//             anywhere, at anytime.
//           </p>
//         </div>
//         <div className=" w-full">
//           <img className=" rounded-lg" />
//         </div>
//         </div>

//     <div className=" min-h-[30vw] flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-10 lg:pt-5 gap-5  bg-teal-100" >
//       <div className=" w-full lg:w-3/4 space-y-4" >
//         <h1 className=" text-4xl font-semibold text-center lg:text-start text-black ">About Us</h1>
//         <p className="  lg:text-start text-black text-align-justify">
//         At AiM4u, the health of our user is our priority. Research is the core of our organization.
// Our algorithm detects skin diseases with 95% accuracy.

//         </p>
//         <p className="text-justify lg:text-start text-black">
//         The preview of the Detection Algorithm can be used from the website in the features section.
// 90% of the skin patients do not visit a dermatologist. There are just 10,000 dermatologists for 1.3 billion people. Our app helps users connect with the dermatologist from anywhere, at anytime.
//         </p>
        
//       </div>
//       <div className=" w-full lg:w-3/4">
//         <img className=" rounded-lg"  />
//         </div>
//     </>
//   );
// };

// export default About;

import React from "react";
// import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center px-[30%] pt-10 gap-5 bg-white">
        <div className="w-full space-y-4">
          <h1 className="text-4xl font-semibold text-center lg:text-start text-black">
            About Us
          </h1>
        </div>
      </div>
      <div className="min-h-[25vw] flex flex-col lg:flex-row justify-between items-center px-[10%] gap-5 bg-white">
        <div className="w-full space-y-4">
          <p className="text-justify lg:text-start text-black">
            At AiM4u, the health of our user is our priority. Research is the
            core of our organization. Our algorithm detects skin diseases with
            95% accuracy.
          </p>
          <p className="text-justify lg:text-start text-black">
            The preview of the Detection Algorithm can be used from the website
            in the features section. 90% of the skin patients do not visit a
            dermatologist. There are just 10,000 dermatologists for 1.3 billion
            people. Our app helps users connect with the dermatologist from
            anywhere, at anytime.
          </p>
        </div>
        <div className="w-full">
          {/* Assuming you have an image URL and want to display it */}
          <img src="your_image_url.jpg" alt="About" className="rounded-lg" />
        </div>
      </div>

      
    </>
  );
};

export default About;
