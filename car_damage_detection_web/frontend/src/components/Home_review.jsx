import React from 'react';
import PropTypes from 'prop-types';
import '../styles/homereview.css'; // Make sure to create a CSS file for styling


const Home_review = ({ photoSrc, heading, description, name, date, rating }) => {
  return (
    <div className="photo-card">
      <div className="photo-container">
        <img src={photoSrc} alt="Photo" className="photo" />
      </div>
      <div className="photo-card-content-container">
        <h2 className="photo-card-heading">{heading}</h2>
        <p className="photo-card-description">{description}</p>
        <div className="photo-card-meta-info">
          <p className="photo-card-name">{name}</p>
          <p className="photo-card-date">{date}</p>
          <p className="photo-card-rating">{`Rating: ${rating}`}</p>
        </div>
      </div>
    </div>
  );
};

Home_review.propTypes = {
  photoSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Home_review;
