import React, { useState, useEffect } from 'react';
import TruffleContract from '@truffle/contract';
import ReviewStorageArtifact from 'path/to/ReviewStorage.json';

const RatingPage = ({ web3 }) => {
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
        console.error('Error initializing contract:', error);
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
          return {
            userAddress: user,
            reviews: userReviews,
          };
        })
      );
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error loading reviews:', error);
    }
  };

  return (
    <div>
      <h1>Rating Page</h1>
      <div>
        {reviews.map((userData, index) => (
          <div key={index}>
            <h2>User Address: {userData.userAddress}</h2>
            {userData.reviews.map((review, index) => (
              <div key={index}>
                <p>Review Text: {review.reviewText}</p>
                <p>Rating: {review.rating}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
