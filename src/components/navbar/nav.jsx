import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./nav.css";

// import logo from "../../images/logo.png";

// // const nav = () => {
// //   return (
// //     <div>
// //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //         <div className="container-fluid">
// //           <a class="navbar-brand" href="#">
// //             DERMALENS
// //           </a>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarNav"
// //             aria-controls="navbarNav"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarNav">
// //             <ul className="navbar-nav">
// //               <li className="nav-item">
// //                 <a className="nav-link active" aria-current="page" href="#"></a>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/detect" className="nav-link">
// //                   Detect
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/brainteaser" className="nav-link">
// //                   Brain Teaser
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/profile" className="nav-link">
// //                   Profile
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/settings" className="nav-link">
// //                   Settings
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/support" className="nav-link">
// //                   Support
// //                 </Link>
// //               </li>
// //               {/* <li className="nav-item">
// //           <a className ="nav-link" href="#" style={{ color: '#1C1678', fontFamily: 'Georgia' }}>Log out</a>
// //         </li> */}
// //               {/* <li className="nav-item">
// //           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
// //         </li> */}
// //               <li className="nav-item">
// //               <Link to="/logout" className="logout-button">Logout</Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default nav;

class nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a class="navbar-brand" href="#">
            {/* <img src="logo.png" alt=""/> */}
            {/* <img src={logo} alt = " DERMALENS " width="49"
              height="48"
              viewBox="0 0 49 48" /> */}
<h1 className="text-[150%] font-bold leading-tight px-[10%]">
          <span className="text-neutral-50">DERMALENS</span>
        </h1>
            {/* <svg
              id="logo-15"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                class="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                class="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                class="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                class="ccustom"
                fill="#17CF97"
              ></path>{" "}
            </svg> */}
              
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="px-[10%]">
                <a className = "active "href="home">Home</a>
              </li>
              
              <li className="px-[10%]">
                <a href="appointment">Book Appointment</a>
              </li>
              <li>
                <a href="profile">Profile</a>
              </li>
              
              <li className="px-[10%]">
                <a href="contact">Help and Support</a>
              </li>
              <li className="px-[10%]">
                <a href="login">Login</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          
        </nav>
      </>
    );
  }
}
export default nav;
