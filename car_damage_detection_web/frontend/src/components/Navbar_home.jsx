import React, { Component } from "react";
import '../styles/navbar.css'
import 'flowbite/dist/flowbite.css'; // Import Flowbite styles
import BlackNav from "./BlackNav.jsx";
import Intro from "./Intro.jsx"
import "../styles/intro.css"
const Navbar_home = () => {
  return (
    <><div className="header">
      <div className="car-snap-container">
        <p className="car-snap-text">CAR SNAP</p>
      </div>
    </div><div className="line">
        <div className="car-snap-container-head">
          <p className="car-snap-heading">CAR SNAP</p>
        </div>
        <BlackNav />
        <Intro/>
      </div>


    </>
  );
};
export default Navbar_home;
