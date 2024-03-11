import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Ads_section.css'; // Make sure to create a CSS file for styling

const Ads_section = ({ heading, imageUrl, features }) => {
  return (
    <div className="Ads_section-card-container">
      <div className="add-card-heading">
        <h2>{heading}</h2>
      </div>
      <div className="add-card-image">
        <img src={imageUrl} alt="AddCard Image" />
      </div>
      <div className="add-card-features">
        <h3>Features:</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Ads_section.propTypes = {
  heading: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ads_section;
