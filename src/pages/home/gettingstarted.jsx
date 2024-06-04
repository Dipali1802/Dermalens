// // import React from "react";
// // // import Button from "../layouts/Button";
// // import Click from "../../images/click.png";
// // import Connect from "../../images/connect.png";
// // import Detect from "../../images/detect.png";

// // const Gettingstarted = () => {
// //   return (
// //     <>
// //       <div className=" flex flex-col justify-center px-[30%] pt-0 bg-pink text-black">
// //         <div className=" flex flex-col items-center lg:flex-row justify-between  "></div>
// //       </div>
// //       <div className=" min-h-[30vw] flex flex-col justify-center px-[7%] bg-white text-blue-950  ">
// //         <div>
// //           <h1 className=" text-4xl font-bold text-left lg:text-start">
// //            Getting Started
// //           </h1>
          
// //           {/* <p className=" mt-2 text-left font-semibold lg:text-start text-blue-950">
// //           Take the photo of your skin problem.          </p> */}
// // <div className="flex items-center mt-2 text-left font-semibold lg:text-start text-blue-950">
// //     <img src={Click} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
// //     <span>Take the photo of your skin problem.</span>
// // </div>
// // <div className="flex items-center mt-2 text-left font-semibold lg:text-start text-blue-950">
// //     <img src={Connect} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
// //     <span>Our AI assistant will provide three most prominent diseases.</span>
// // </div>
// // <div className="flex items-center mt-2 text-left font-semibold lg:text-start text-blue-950">
// //     <img src={Detect} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
// //     <span>          Talk to the dermatologist over a Video Call. Only on receiving a prescription by the dermatologists, the money will get deducted from the wallet.
// // </span>
// // </div>
          
// //           <p className=" mt-2 text-left font-semibold lg:text-start text-blue-950">
// //           </p>
// //          <h5  className=" mt-2 text-left font-bold lg:text-start text-blue-950">Why Dermalens?</h5> 

// // <p className= " mt-2 text-left font-semibold lg:text-start text-blue-950" >DermaLens Uses AI to analyze an uploaded photo of your skin and detect a wide array of skin diseases</p>

// // <p className=" mt-2 text-left font-semibold lg:text-start text-blue-950">DermaLens can predict skin conditions with 95% accuracy.</p>
// // <p className=" mt-2 text-left font-semibold lg:text-start text-blue-950">DermaLens helps you take control of your skin.
// // </p>
// //         </div>
// //         <div className=" flex flex-col lg:flex-row gap-5 pt-10 pb-5 "></div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Gettingstarted;
// import React from "react";
// import Click from "../../images/click.png";
// import Connect from "../../images/connect.png";
// import Detect from "../../images/detect.png";
// import "./gettingstarted.css"; // Importing the CSS file

// const GettingStarted = () => {
//   return (
//     <div className="container bg-blue-200 text-blue-950">
//       <h1 className="title">Getting Started</h1>
//       <div className="grid-container">
//         <div className="column">
//           {/* <div className="flex items-center mt-2 text-left font-semibold lg:text-start text-blue-950">
//             <img src={Click} className="icon"  />
//             <span>Take the photo of your skin problem.</span>
//           </div> */}
           
//           <div className="flex items-center mt-2 text-left font-semibold lg:text-start text-blue-950">
//             <img src={Detect} className="icon" alt="Detect icon" />
//             <span>Our AI assistant will provide three most prominent diseases.</span>
//           </div>
//           <div className="flex items-center mt-2 text-left font-semibold lg:text-start text-blue-950">
//             <img src={Connect} className="icon" alt="Consult icon" />
//             <span>Talk to the dermatologist over a Video Call. Only on receiving a prescription by the dermatologists, the money will get deducted from the wallet.</span>
//           </div>
//         </div>
//         <div className="image-column">
//           <img src="path_to_your_phone_image.png" alt="Phone" className="phone-image" />
//         </div>
//         <div className="column">
//           <h5 className="subtitle">Why Dermalens?</h5>
//           <p className="description">DermaLens Uses AI to analyze an uploaded photo of your skin and detect a wide array of skin diseases</p>
//           <p className="description">DermaLens can predict skin conditions with 95% accuracy.</p>
//           <p className="description">DermaLens helps you take control of your skin.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GettingStarted;
import React from "react";
import Click from "../../images/click.png";
import Connect from "../../images/connect.png";
import Detect from "../../images/detect.png";
import Ai from "../../images/ai.png";
import Ninetyfive from "../../images/ninetyfive.png";
import Plus from "../../images/plus.png";

import Background from "../../images/background.png";
import "./gettingstarted.css"; // Import the CSS file

const GettingStarted = () => {
  return (
    <div
  className="container bg-white text-blue-950"
  style={{
    backgroundImage:`url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
      <h1 className="title ">Getting Started</h1>
      <div className="grid-container ">
        <div className="column">
          <div className="item">
            <img src={Click} className="icon" alt="Click icon" />
            <div>
              <span className="heading">Click</span>
              <span className="subheading">Take the photo of your skin problem.</span>
            </div>
          </div>
          <div className="item">
            <img src={Detect} className="icon" alt="Detect icon" />
            <div>
              <span className="heading">Detect</span>
              <span className="subheading">Our AI assistant will provide three most prominent diseases.</span>
            </div>
          </div>
          <div className="item">
            <img src={Connect} className="icon" alt="Consult icon" />
            <div>
              <span className="heading">Consult</span>
              <span className="subheading">Talk to the dermatologist over a Video Call. Only on receiving a prescription by the dermatologists, the money will get deducted from the wallet.</span>
            </div>
          </div>
        </div>
        <div className="image-column">
          {/* <img src={Mobile}  className="phone-image" /> */}
        </div>
        <div className="column">
          <h5 className="subtitle">Why Dermalens ?</h5>
          <div className="item">
            <img src={Ai} className="icon" alt="Consult icon" />
            <div>
             
              <span className="subheading">DermaLens Uses AI to analyze an uploaded photo of your skin and detect a wide array of skin diseases.</span>
            </div>
          </div>

          <div className="item">
            <img src={Ninetyfive} className="icon" alt="Consult icon" />
            <div>
             
              <span className="subheading">DermaLens can predict skin conditions with 95% accuracy.</span>
            </div>
          </div>
          <div className="item">
            <img src={Plus} className="icon" alt="Consult icon" />
            <div>
             
              <span className="subheading">DermaLens helps you take control of your skin.</span>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
