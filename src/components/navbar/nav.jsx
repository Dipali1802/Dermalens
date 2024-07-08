import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";


class nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          
<a href="https://aim4u.co.in/#/" className="text-[150%] hover:underline cursor-pointer font-bold leading-tight px-[0%]" >
          <span className="text-neutral-50">DERMALENS</span> 
       </ a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="px-[10%]">
                <a href="home">Home</a>
              </li>
              
              <li className="px-[10%]">
                <a href="appointment">Book Appointment</a>
              </li>
              <li>
                <a href="profile">Profile</a>
              </li>
              
              <li className="px-[10%]">
                <a href="FAQ">FAQ's</a>
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
