import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  state = { 
    clicked: false, 
    activeItem: "home" // Default active item
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  setActiveItem = (item) => {
    this.setState({ activeItem: item });
  };

  render() {
    const { clicked, activeItem } = this.state;

    return (
      <>
        <nav>
          <Link to="/" className="text-[150%] hover:underline cursor-pointer font-bold leading-tight px-[0%]" onClick={() => this.setActiveItem("home")}>
            <span className="text-neutral-50">DERMALENS</span>
          </Link>
          <div>
            <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
              <li className={`px-[10%] ${activeItem === "home" ? "active" : ""}`}>
                <Link to="/home" onClick={() => this.setActiveItem("home")}>Home</Link>
              </li>
              <li className={`px-[10%] ${activeItem === "appointment" ? "active" : ""}`}>
                <Link to="/appointment" onClick={() => this.setActiveItem("appointment")}>Book Appointment</Link>
              </li>
              <li className={`px-[10%] ${activeItem === "profile" ? "active" : ""}`}>
                <Link to="/profile" onClick={() => this.setActiveItem("profile")}>Profile</Link>
              </li>
              <li className={`px-[10%] ${activeItem === "faq" ? "active" : ""}`}>
                <Link to="/faq" onClick={() => this.setActiveItem("faq")}>FAQ's</Link>
              </li>
              <li className={`px-[10%] ${activeItem === "login" ? "active" : ""}`}>
                <Link to="/login" onClick={() => this.setActiveItem("login")}>Login</Link>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
