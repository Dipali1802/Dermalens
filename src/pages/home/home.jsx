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
    <div className=" min-h-[30vw] flex flex-col justify-center lg:px-32 px-5 text-white bg-teal-300 bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10 text-black">
        <h1 className="text-5xl font-bold leading-tight text-black">
        <img src={logo} alt="DERMALENS" className="h-16 md:h-24" />.
        </h1>
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