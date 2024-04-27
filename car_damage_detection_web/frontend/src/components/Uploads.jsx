import React, { useState, useEffect } from "react";
import "../styles/Uploads.css";

const Uploads = ({ name,senderAddress }) => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    // Fetch uploads data from the backend API
    const fetchUploads = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/images/${senderAddress}/`);
        if (response.ok) {
          const data = await response.json();
          // Assuming data is an array of objects with a 'photo' property
          setUploads(data.map(item => item.photo));
        } else {
          console.error("Failed to fetch uploads");
        }
      } catch (error) {
        console.error("Error fetching uploads:", error);
      }
    };

    // Call the fetchUploads function
    fetchUploads();
  }, [senderAddress]);

  return (
    <div className="uploads-container">
      <div className="left-column">
        <hr className="divider" />
        <h2 className="upload-text">Uploads By {name}</h2>
        <hr className="divider" />
        <div className="uploaded-photos">
          {uploads.map((photo, index) => (
            <div key={index} className="uploaded-photo-container">
              <img src={photo} alt={`Upload ${index + 1}`} className="uploaded-photo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uploads;
