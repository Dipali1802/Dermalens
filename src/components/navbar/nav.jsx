import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";

const Nav = ({ isLoggedIn, handleLogout }) => {
  const [clicked, setClicked] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <nav>
        <Link
          to="/"
          className="text-[150%] hover:underline cursor-pointer font-bold leading-tight px-[0%]"
          onClick={() => setActiveItem("home")}
        >
          <span className="text-neutral-50">DERMALENS</span>
        </Link>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li className={`px-[10%] ${activeItem === "home" ? "active" : ""}`}>
              <Link to="/home" onClick={() => setActiveItem("home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-[10%] ${
                activeItem === "appointment" ? "active" : ""
              }`}
            >
              <Link
                to="/appointment"
                onClick={() => setActiveItem("appointment")}
              >
                Book Appointment
              </Link>
            </li>
            <li className={`px-[10%] ${activeItem === "faq" ? "active" : ""}`}>
              <Link to="/faq" onClick={() => setActiveItem("faq")}>
                FAQ's
              </Link>
            </li>
            {!isLoggedIn ? (
              <li
                className={`px-[10%] ${activeItem === "login" ? "active" : ""}`}
              >
                <Link to="/login" onClick={() => setActiveItem("login")}>
                  Login
                </Link>
              </li>
            ) : (
              <li className="px-[10%]">
                <button
                  className="profile-button py-[10%]"
                  onClick={() => handleItemClick("profile")}
                >
                  {/* Replace with your profile image */}
                  <img
                    className="profile-icon"
                    src={logo} // Replace with the actual path to your image
                    alt="Profile"
                    style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
                  />
                </button>
              </li>
            )}
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Nav;
