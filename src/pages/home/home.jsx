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

const Home = () => {
  return (
    <div className=" min-h-[30vw] flex flex-col justify-center lg:px-24 px-8 bg-white">
      <div className=" w-full space-y-5 mt-10 text-black text-center">
        <h1 className="text-5xl font-bold leading-tight text-black px-[42%] ">
          <img src={logo} alt="DERMALENS" className="h-30 md:h-50 " />.
        </h1>
        <div className="text-2xl flex justify-center space-x-[1%] font-semibold">
          <a href="#" className="text-blue-900 hover:underline">
            Click
          </a>
          <span className="text-blue-900 ">|</span>
          <a href="#" className="text-blue-900 hover:underline">
            Connect
          </a>
          <span className="text-blue-900 ">|</span>
          <a href="#" className="text-blue-900 hover:underline">
            Detect
          </a>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        {/* <Button title="See Services" /> */}
      </div>
    </div>
  );
};

export default Home;
