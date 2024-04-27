import React, { useState, useEffect } from 'react';
import Footer from "./Footer.jsx";
import '../styles/reviewpage.css'; // Import CSS file
import BlackNav from "./BlackNav.jsx";
import ReviewStorageArtifact from "../../../Blockchain/build/contracts/ReviewStorage.json"
import TruffleContract from '@truffle/contract'; // Adjust the import path

const ReviewPage = ({ web3, senderAddress }) => {
  const [reviewStorageInstance, setReviewStorageInstance] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const initializeContract = async () => {
      try {
        const reviewStorageContract = TruffleContract(ReviewStorageArtifact);
        reviewStorageContract.setProvider(web3.currentProvider);
        const instance = await reviewStorageContract.deployed();
        setReviewStorageInstance(instance);
        loadReviews(instance);
      } catch (error) {
        console.error("Error initializing contract:", error);
      }
    };

    if (web3) {
      initializeContract();
    }
  }, [web3]);

  const loadReviews = async (instance) => {
    try {
      const users = await instance.getAllUsers();
      const reviewsData = await Promise.all(
        users.map(async (user) => {
          const userReviews = await instance.getReviewsByUser(user);
          const userDetails = await fetchUserDetails(user); // Fetch user details
          return {
            userDetails: userDetails,
            reviews: userReviews,
          };
        })
      );
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };

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
    <div className="review-page">
      <header>
        <h1>Reviews</h1>
      </header>
      <BlackNav />
      <div className="review-container">
        {reviews.map((reviewData, index) => (
          <div key={index} className="user-reviews">
            {reviewData.userDetails && (
              <div className="user-details">
                <h2>User Name: {reviewData.userDetails.username}</h2>
                {/* Add other user details you want to display */}
              </div>
            )}
            {reviewData.reviews.map((review, index) => (
              <div key={index} className="comment-item">
                <div>
                  <h3>Review:</h3>
                  <img src={`http://127.0.0.1:8000/api/image_detail/${review.imageHash}`} alt={`Review Image ${index}`} onError={() => console.error('Failed to load image')} />
                  <p>Review Text: {review.reviewText}</p>
                  <p>Rating: {review.rating}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
