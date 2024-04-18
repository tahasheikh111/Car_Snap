import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/intro.css'; // Import your stylesheet
import imagepath from '../images/homepage.png';

const Intro = () => {
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleUploadButtonClick = () => {
    navigate('/UploadPage'); // Navigate to UploadPage route
  };

  return (
    <>
      <div className="Intro_container">
        <div className="header_component">
          <h2>Visualize, Decode, Check Smart</h2>
        </div>
        <div className="content_component">
          <p>
            Harnessing intelligent technology, our Car Damage Classifier swiftly and precisely identifies diverse car damages, expediting decisions on repairs and insurance for a seamless and efficient process.
            <br />
            <br />
            <br />
            <strong>Text:</strong>
            <span style={{ margin: '0px 75px 0px 5px' }}>team@carsnap</span>
            <strong>Duration</strong>: Classifies in seconds
          </p>
          <button className="action-button_component" onClick={handleUploadButtonClick}>Upload</button>
        </div>
      </div>
      <div className="picture">
        <img src={imagepath} alt="CAR SNAP" />
      </div>
    </>
  );
};

export default Intro;
