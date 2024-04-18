import React, { useState } from "react";
import "../styles/Upload_page.css";
import BlackNav from "./BlackNav.jsx";
import backgroundImage from "../images/_49e4c801-00d4-4429-a534-46d5ed9e0d5f.jpeg"; // Import your background image
import Fotter from './Footer.jsx';

const Upload_page = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [result, setResult] = useState("");
    const [file,setFile]=useState("");

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
            formData.append('image', file);

            const response = await fetch('http://127.0.0.1:8000/api/predict_model_1/', {
                method: 'POST',
                body: formData
            });
            const responseData = await response.json();
            if (responseData.predicted_class === "Not Damaged") {
                // Code to execute if predicted_class is "Not Damaged"
                console.log("NOT DAMAGED");
                setResult(`- ${responseData.predicted_class}`);
            } else {
                try{
                    console.log("DAMAGED SO AGAIN DO CATEGORIES");
                    const response2=await fetch('http://127.0.0.1:8000/api/predict_model_2/',{
                        method:'POST',
                        body:formData
                    });
                    const responseData2=await response2.json();
                    console.log(responseData2.predicted_class);
                    setResult(`- ${responseData2.predicted_class}`);



                } catch(error){
                    console.error('Error uploading image:', error);
                    // Handle error
                }
                // Code to execute if predicted_class is not "Not Damaged"
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error
        }
    };

    return (
        <>
            <div className="header">
                <div className="car-snap-container">
                    <p className="car-snap-text">CAR SNAP</p>
                    <h1 className="car-snap-heading">CAR SNAP</h1>
                    <BlackNav />
                </div>
            </div>
            
            <div className="upload-page" style={{ 
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)' // Adjust the alpha value (0.5 is 50% opacity)
                        }}>

                <div className="upload-container"> 
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    {selectedImage && (
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={selectedImage} alt="Selected" className="selected-image" />
                                </div>
                                <div className="card-back">
                                    <p>Result: {result}</p>
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
            <Fotter/>
        </>
    );
};

export default Upload_page;
