import React,{ useState, useEffect } from 'react';
import Footer from "./Footer.jsx";
import '../styles/reviewpage.css'; // Import CSS file
import imagepath from "../images/dreamcar.jpg";
import BlackNav from "./BlackNav.jsx";
import ReviewStorageArtifact from "../../../Blockchain/build/contracts/ReviewStorage.json"
import TruffleContract from '@truffle/contract'; // Adjust the import path



const ReviewPage = ({web3,senderAddress}) => {

  const [reviewStorageInstance, setReviewStorageInstance] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const initializeContract = async () => {
      try {
        console.log("IN REVIEW PAGE");
        console.log(web3);
        console.log(senderAddress);
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
    console.log("In loadReviews to show instance");
    console.log(instance);
    try {
      const users = await instance.getAllUsers();
      console.log("USERSn");
      console.log(users);
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
      console.log("REVIEW DATA");
      console.log(reviewsData);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };

  return (
    <div className="review-page" style={{ backgroundImage: `url(${imagepath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header>
        <h1>Reviews</h1>
      </header>
      <BlackNav />
      <div className="review-container">
        {reviews.map((userData, index) => (
          <div key={index} className="user-reviews">
            <h2>User Address: {userData.userAddress}</h2>
            {userData.reviews.map((review, index) => (
              <div key={index} className="comment-item">
                <div>
                  <h3>Image Hash: {review.imageHash}</h3>
                  <p>Review: {review.reviewText}</p>
                  <p>Review: {review.rating}</p>
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
