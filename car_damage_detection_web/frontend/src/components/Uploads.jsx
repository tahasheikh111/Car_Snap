import React from "react";
import "../styles/Uploads.css";
import img1 from "../images/dreamcar.jpg"

const uploads = [
    { photo: img1, result: "Result 1" },
    { photo: img1, result: "Result 2" },
    { photo: img1, result: "Result 3" },
    { photo: img1, result: "Result 4" },
    // Add more photos and results as needed
];

const Uploads = ({senderAddress}) => {
    return (
        <div className="uploads-container">
            <div className="left-column">
                <hr className="divider" />
                <h2 className="upload-text">Uploades By Taha Sheikh</h2>
                <hr className="divider" />
                <div className="uploaded-photos">
                    {uploads.map((upload, index) => (
                        <div key={index} className="uploaded-photo-container">
                            <img src={upload.photo} alt={`Upload ${index + 1}`} className="uploaded-photo" />
                            <div className="result">{upload.result}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Uploads;
