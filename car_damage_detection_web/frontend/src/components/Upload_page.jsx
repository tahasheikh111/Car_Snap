import React, { useState, useEffect } from "react";
import "../styles/Upload_page.css";
import BlackNav from "./BlackNav.jsx";
import backgroundImage from "../images/_49e4c801-00d4-4429-a534-46d5ed9e0d5f.jpeg"; // Import your background image
import ImageStorageArtifact from "../../../Blockchain/build/contracts/ImageStorage.json";
import ReviewStorageArtifact from "../../../Blockchain/build/contracts/ReviewStorage.json";
import Fotter from "./Footer.jsx";
import TruffleContract from "@truffle/contract"; // Adjust the import path

const Upload_page = ({ web3, senderAddress }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState("");
  const [file, setFile] = useState("");
  const [imageStorageInstance, setImageStorageInstance] = useState(null);
  const [reviewStorageInstance, setReviewStorageInstance] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [imageHash, setImageHash] = useState("");
  const [rating, setRating] = useState(0); // State for rating

  // Initialize the contract instance
  const initializeContract = async () => {
    try {
      console.log(web3); // Print web3 instance
      console.log(senderAddress);
      console.log("ENTER INTO INITIALIZE CONTRACT");
      const imageStorageContract = TruffleContract(ImageStorageArtifact);
      const reviewStorageContract = TruffleContract(ReviewStorageArtifact);
      imageStorageContract.setProvider(web3.currentProvider);
      reviewStorageContract.setProvider(web3.currentProvider);
      const instance = await imageStorageContract.deployed();
      const instance2 = await reviewStorageContract.deployed();
      setReviewStorageInstance(instance2);
      setImageStorageInstance(instance);
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const hashImage = async (buffer) => {
    // Create a SHA-256 hash object
    const hash = await crypto.subtle.digest("SHA-256", buffer);

    // Convert the hash to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };


  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleSubmitReview = async () => {
    // Handle review submission
    console.log("Submitting review:", reviewText);
    const result = await reviewStorageInstance.addReview(
      imageHash,
      reviewText,
      rating, // Pass rating to the contract function
      {
        from: senderAddress, // Specify sender's address
      }
    );

    console.log("Review added:", result);
    // Reset the review text and rating after submission
    setReviewText("");
    setRating(0);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    try {
      // Perform image upload and API call here
      const formData = new FormData();
      console.log(file);
      console.log("-----------------------");
      console.log(selectedImage);
      formData.append("image", file);

      const response = await fetch(
        "http://127.0.0.1:8000/api/predict_model_1/",
        {
          method: "POST",
          body: formData,
        }
      );
      const responseData = await response.json();
      if (responseData.predicted_class === "Not Damaged") {
        // Code to execute if predicted_class is "Not Damaged"
        console.log("NOT DAMAGED");
        setResult(`- ${responseData.predicted_class}`);
      } else {
        try {
          console.log("DAMAGED SO AGAIN DO CATEGORIES");
          const response2 = await fetch(
            "http://127.0.0.1:8000/api/predict_model_2/",
            {
              method: "POST",
              body: formData,
            }
          );
          const responseData2 = await response2.json();
          console.log(responseData2.predicted_class);
          setResult(`- ${responseData2.predicted_class}`);
        } catch (error) {
          console.error("Error uploading image:", error);
          // Handle error
        }
      }
      // Check if image and contract instance exist
      if (!selectedImage || !imageStorageInstance) {
        console.error("Image or contract instance not available.");
        return;
      }

      // Read the contents of the image file
      const reader = new FileReader();
      reader.onload = async () => {
        const buffer = Buffer.from(reader.result); // Convert to buffer
        const hash = await hashImage(buffer); // Hash the buffer
        setImageHash(hash);
        // Call the storeImage function of the ImageStorage contract
        console.log("Image Hashed ");
        console.log(hash);
        try {
          const newformData = new FormData();
          newformData.append("photo", file);
          newformData.append("id", hash); // Append the user ID
          newformData.append("owner_address",senderAddress)
          console.log(newformData);
      
          const response = await fetch("http://127.0.0.1:8000/api/images/", {
            method: "POST",
            body: newformData,
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log("Image uploaded successfully:", responseData);
            // Handle further processing if needed
          } else {
            console.error("Failed to upload image:", response.statusText);
            // Handle error
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          // Handle error
        }
        const uploadResult = await imageStorageInstance.storeImage(hash, {
          from: senderAddress, // Specify sender's address
          value: web3.utils.toWei("0.1", "ether"), // Sending ether along with the transaction
        });
        // Handle the upload result
        console.log("Upload result:", uploadResult);

    
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error
    }
    // storing image
    
  };

  useEffect(() => {
    initializeContract();
  }, []);


  return (
    <>
      <div className="header">
        <div className="car-snap-container">
          <p className="car-snap-text">CAR SNAP</p>
          <h1 className="car-snap-heading">CAR SNAP</h1>
          <BlackNav />
        </div>
      </div>

      <div
        className="upload-page"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value (0.5 is 50% opacity)
        }}
      >
        <div className="upload-container">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {selectedImage && (
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="selected-image"
                  />
                </div>
                <div className="card-back">
                  <p>Result: {result}</p>
                  {result && (
                    <div>
                      <h2>Write a Review</h2>
                      <textarea
                        rows="5"
                        cols="50"
                        value={reviewText}
                        onChange={handleReviewChange}
                        placeholder="Write your review here..."
                      ></textarea>
                      <br />
                      {/* Render dynamic star rating bar */}
                      <div>
                         <h2>Your Rating: {rating}</h2>
                         {[...Array(5)].map((_, index) => {
                           const value = index + 1;
                             return (
                                  <span
                                 key={index}
                                 style={{ cursor: 'pointer' }}
                                  onClick={() => handleRatingChange(value)}
                                    >
                             {value <= rating ? '★' : '☆'}
                              </span>
                               );
                                   })}
                                    </div>
                      <button onClick={handleSubmitReview}>
                        Submit Review
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <h1>Instructions: </h1>
          <p>
            1) First Choose the Image <br />
            2) Press On Upload Button <br />
            3) Press On the Card to See the Result
          </p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Upload_page;
