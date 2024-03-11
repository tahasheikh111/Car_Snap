import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'
import 'flowbite/dist/flowbite.css'; // Import Flowbite styles
import BlackNav from "./BlackNav.jsx";
import Intro from "./Intro.jsx"
import Home_review from "./Home_review.jsx"
import "../styles/intro.css"
import imagepath from "../images/user.png"
import AiImage from "../images/Ai_Car_Snap.jpg"
import Ads_section from './Ads_section.jsx';
import Developers from "./Developers.jsx";
const Navbar_home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleString();

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
          <h1 style={{ fontSize: '25px', marginBottom: '10px', borderBottom: '2px solid' }}>Current Date:</h1>
            <h2 style={{ fontSize: '16px' }}>{formattedDate}</h2>
            <Ads_section
              heading={"CAR SNAP"}
              imageUrl={AiImage}
              features={['1- Cost-Effective Car Classification', '2- User-Friendly Interface', '3- Precise Car Damage Recognition']}
            />
          </div>
        </div>
        <Developers />


      </div>

    </div>


    </>
  );
};
export default Navbar_home;
