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
import ReviewStorageArtifact from "../../../Blockchain/build/contracts/ReviewStorage.json"
import ResultStorageArtifact from "../../../Blockchain/build/contracts/ResultStorage.json"
import TruffleContract from '@truffle/contract'; // Adjust the import path
const Navbar_home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reviewStorageInstance, setReviewStorageInstance] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [result, setResult] = useState('');
  useEffect(() => {
    const initializeContract = async () => {
      try {
        const reviewStorageContract = TruffleContract(ReviewStorageArtifact);
        reviewStorageContract.setProvider(web3.currentProvider);
        const instance = await reviewStorageContract.deployed();
        setReviewStorageInstance(instance);
        loadReviews(instance);
        const resultStorageContract = TruffleContract(ResultStorageArtifact);
        resultStorageContract.setProvider(web3Instance.currentProvider);
        const instance1 = await resultStorageContract.deployed();
        setResultStorageInstance(instance1);
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
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
          const reviewsWithResults = await Promise.all(
            userReviews.map(async (review) => {
              const result = await fetchResult(review.imageHash);
              return { ...review, result };
            })
          );
          return {
            userDetails: user,
            reviews: reviewsWithResults,
          };
        })
      );
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };

  const fetchResult = async (imageHash) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/get-result/${imageHash}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch result');
      }
      const data = await response.json();
      return data.result || 'No result found'; // Return default value if result is null
    } catch (error) {
      console.error('Error:', error);
      return 'Error fetching result';
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
// Inside your component

useEffect(() => {
  const initializeContract = async () => {
    try {
      const web3Instance = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      setWeb3(web3Instance);



      // Call your contract methods here
    } catch (error) {
      console.error('Error initializing contract:', error);
    }
  };

  if (web3) {
    initializeContract();
  }
}, [web3]);




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
  {reviews.map((reviewData, index) => (
    <div key={index}>
      {reviewData.reviews.slice(0, 10).map((review, reviewIndex) => ( 
        <Home_review
          key={reviewIndex}
          photoSrc={`http://127.0.0.1:8000/api/image/${review.imageHash}/`}
          heading={<b>{review.result}</b>}
          description={review.reviewText}
          date={new Date(review.date * 1000).toLocaleDateString()} // Format the date
          rating={review.rating}
        />
      ))}
    </div>
  ))}
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
