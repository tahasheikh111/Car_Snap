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
          return {
            userDetails: user,
            reviews: userReviews,
          };
        })
      );
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };
  const fetchUserData = async () => {
    console.log("IN FETCH USER DATA");
    console.log(senderAddress);
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/get-user/${senderAddress}/`);
        if (response.ok) {
            const data = await response.json();
            setUserData(data);
            console.log("USER DATA IN ${data}");
            console.log(userData);
        } else {
            console.error("Failed to fetch user data");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};
const returnBalance=async (web3,senderAddress)=>{
    const balanceInWei = await web3.eth.getBalance(senderAddress);

    // Convert balance from Wei to Ether
    const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
    setBalance(balanceInEther);
}

// Function to render rating stars
const renderRatingStars = (rating) => {
  const stars = [];
    // Fill complete stars
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
    }
    // Fill half star if applicable
    if (rating % 1 !== 0) {
      stars.push(<span key={stars.length} style={{ color: 'gold' }}>½</span>);
    }
    // Fill remaining empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={stars.length + i}>★</span>);
    }
    return stars;
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
            {reviewData.reviews.map((review, reviewIndex) => (
              console.log(review),
              <div key={reviewIndex} className="comment-item">
                <div>
                  <h2 ><b>Review: </b> {review.reviewText}</h2>
                   
                  <h2><b>Rating: </b>{review.rating}</h2>
                  {renderRatingStars(review.rating)}
                  <img
                    src={`http://127.0.0.1:8000/api/image/${review.imageHash}/`}
                    alt={`Review Image ${reviewIndex}`}
                    className="review-image"
                    onError={() => console.error('Failed to load image')}
                  />
  
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
