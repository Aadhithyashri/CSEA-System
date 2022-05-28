import React from "react";
import "../styles/NavBar.css"
import logo from  "../img/psg.png"

const NavBar = () => {
  return (
    
    <nav className="nav-container">
      <div className="left-container">
        <img src= {logo} alt="psg" width="55" height="50"/>
        <div className="text-wrapper">
          <h1 className="">PSG College of Technology</h1>
          <h2 className="">CSEA Management System</h2>
        </div>
      </div>
      <div className="filler"></div>
      <div className="right-container">
          <div className="profile-wrapper"></div>
          <div className="other-apps-button"></div>
      </div>
    </nav>
  );
};
export default NavBar;
