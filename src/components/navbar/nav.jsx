import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            DERMALENS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <Link to="/detect" className="nav-link">
                  Detect
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/brain teaser" className="nav-link">
                  Brain Teaser
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link">
                  Support
                </Link>
              </li>
              {/* <li className="nav-item">
          <a className ="nav-link" href="#" style={{ color: '#1C1678', fontFamily: 'Georgia' }}>Log out</a>
        </li> */}
              {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
              <li className="nav-item">
                <button className="logout-button">Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default nav;
