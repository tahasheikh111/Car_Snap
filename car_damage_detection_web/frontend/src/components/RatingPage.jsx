import React, { useState, useEffect } from 'react';
import Footer from "./Footer.jsx";
import BlackNav from "./BlackNav.jsx";
import '../styles/ratingpage.css';
import TruffleContract from '@truffle/contract';
import ReviewStorageArtifact from "../../../Blockchain/build/contracts/ReviewStorage.json";

const RatingPage = ({ web3 }) => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const ReviewStorage = TruffleContract(ReviewStorageArtifact);
        ReviewStorage.setProvider(web3.currentProvider);
        const instance = await ReviewStorage.deployed();
        const users = await instance.getAllUsers();
        const ratingsData = await Promise.all(
          users.map(async (user) => {
            const userReviews = await instance.getReviewsByUser(user);
            const totalRating = userReviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = totalRating / userReviews.length;
            const userDetails = await fetchUserDetails(user); // Fetch user details
            return {
              userDetails: userDetails,
              averageRating: averageRating.toFixed(1),
            };
          })
        );
        setRatings(ratingsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (web3) {
      fetchRatings();
    }
  }, [web3]);

  // Function to fetch user details from Django API based on user ID
  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/user_detail/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        return userData;
      } else {
        console.error('Failed to fetch user details:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
    return null;
  };

  return (
    <div className="rating-page">
      <header>
        <h1>Ratings</h1>
      </header>
      <BlackNav />
      <div className="rating-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          ratings.length === 0 ? (
            <p>No ratings available</p>
          ) : (
            ratings.map((rating, index) => (
              <div key={index} className="rating-item">
                {rating.userDetails && (
                  <div className="user-details">
                    <h3>User Name: {rating.userDetails.username}</h3>
                    {/* Add other user details you want to display */}
                  </div>
                )}
                <div className="rating-info">
                  <p>Average Rating: {rating.averageRating}</p>
                </div>
              </div>
            ))
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RatingPage;
