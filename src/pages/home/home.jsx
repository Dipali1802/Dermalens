// import React from "react";
// import "./home.css";
// import Navbar from "../../components/navbar/nav";
// // import logo from "../images/logo.png";
//  import logo from "../images/logo.png";

// function App() {
//   return (
//     <></>
//   );
// }

// export default App;
import React from "react";
// import Button from "../layouts/Button";
import logo from "../../images/logo.png";
// import Home from "../../images/home.png";
 import Screennn from "../../images/Screennn.png";
// import Hii from "../../images/hii.png";
// import Hii from "../../images/hii.png";
const Homee = () => {
  return (
    <div
      className="min-h-[30vw] flex flex-col justify-center  bg-cyan-200 bg-cover bg-center   mx-auto "
      style={{
        backgroundImage: `url(${Screennn})`, backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right'
      }}
    >
  
      {/* <div className="text-5xl font-bold leading-tight float-right text-black px-[42%]">
          <img src={logo} className="h-30 md:h-50  mr-0 mt-2 float-right" />
        </div> */}
      {/* <div className="w-full space-y-5 mt-10  text-black  float-right bg-transparent">
       
        <div className="text-2xl flex justify-end space-x-4 font-bold mr-10">
          <a href="#" className="text-blue-900 hover:underline">Click</a>
          <span className="text-blue-900">|</span>
          <a href="#" className="text-blue-900 hover:underline">Connect</a>
          <span className="text-blue-900">|</span>
          <a href="#" className="text-blue-900 hover:underline">Detect</a>
        </div>
        <div className="text-right font-bold mr-10 ">
          <p>
            An AI-powered Skincare Assistant to check your skin issues and connect with dermatologists anytime, anywhere.
          </p>
        </div>
      </div> */}
<div className=" bg-center w-full space-y-5 mt-10" >
  <div className="absolute top-0 left-0 w-1/3 h-full flex flex-col justify-center  2items-end space-y-5 px-10">
    <div className="text-5xl font-bold leading-tight text-black">
      <img src={logo} className="h-30 md:h-50 " />
    </div>
    <div className="space-y-5 mt-10 text-black bg-transparent">
      <div className="text-2xl flex  space-x-4 font-bold">
        <a href="#" className="text-blue-900 hover:underline">Click</a>
        <span className="text-blue-900">|</span>
        <a href="#" className="text-blue-900 hover:underline">Connect</a>
        <span className="text-blue-900">|</span>
        <a href="#" className="text-blue-900 hover:underline">Detect</a>
      </div>
      <div className=" text-justify font-bold">
        <p>
          An AI-powered Skincare Assistant to check your skin issues and connect with dermatologists anytime, anywhere.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Homee;



