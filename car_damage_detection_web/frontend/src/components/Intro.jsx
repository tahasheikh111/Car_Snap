import React from 'react';
import '../styles/intro.css'; // Import your stylesheet
import imagepath from '../images/homepage.png'

const Intro = () => {
  return (
    <>
    <div className="Intro_container">
      <div className="header_component">
        <h2>Visualize, Decode, Check Smart</h2>
      </div>
      <div className="content_component">
        <p>
        Harnessing intelligent technology, our Car Damage Classifier swiftly and precisely identifies diverse car damages, expediting decisions on repairs and insurance for a seamless and efficient process.
        </p>
        <button className="action-button_component">Upload</button>
      </div>
    </div>
    <div className="picture">
        <img src={imagepath} alt="CAR SNAP" />
    </div>
    </>
    
  );
};

export default Intro;
