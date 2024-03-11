import React, { Component } from "react";
import '../styles/navbar.css'
import 'flowbite/dist/flowbite.css'; // Import Flowbite styles
import BlackNav from "./BlackNav.jsx";
import Intro from "./Intro.jsx"
import Home_review from "./Home_review.jsx"
import "../styles/intro.css"
import imagepath from "../images/user.png"
import Ads_section from './Ads_section.jsx';
import Developers from "./Developers.jsx";
const Navbar_home = () => {
  return (
    <><div className="header">
      <div className="car-snap-container">
        <p className="car-snap-text">CAR SNAP</p>
        <h1 className="car-snap-heading">CAR SNAP</h1>
        <BlackNav />
        <Intro />
        <div style={{ display: 'flex' }}>
          {/* Left side: Home_review components */}
          <div style={{ flex: 2, marginRight: '20px' }}>
            <Home_review
              photoSrc={imagepath}
              heading="Example Heading"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              name="John Doe"
              date="March 10, 2024"
              rating={4.5}
            />
            <Home_review
              photoSrc={imagepath}
              heading="Example Heading"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              name="John Doe"
              date="March 10, 2024"
              rating={4.5}
            />
            <Home_review
              photoSrc={imagepath}
              heading="Example Heading"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              name="John Doe"
              date="March 10, 2024"
              rating={4.5}
            />
          </div>

          {/* Right side: Ads_section component */}
          <div style={{ flex: 1 }}>
            <Ads_section
              heading="AddCard Heading"
              imageUrl={imagepath}
              features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
          </div>
        </div>
      <Developers/>


      </div>

    </div>


    </>
  );
};
export default Navbar_home;
