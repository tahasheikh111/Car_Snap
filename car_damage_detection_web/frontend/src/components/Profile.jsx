import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/Profile.css";
import ProfilePicture from '../images/user.png'
import Uploads from "./Uploads.jsx";
import Footer from "./Footer.jsx";


const Profile = ({web3, senderAddress }) => {
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        description: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        email: "",
        photo: null,
    });
    const [showSettings, setShowSettings] = useState(false);
    const [balance,setBalance]=useState(0);

    useEffect(() => {
        fetchUserData();
        console.log({userData});
        returnBalance(web3,senderAddress);
    }, [senderAddress]);

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

    const updateUserData = async (fieldName, fieldValue) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/update-user-profiles/${userData.id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ [fieldName]: fieldValue }), // Only send the specified field
            });
            if (response.ok) {
                fetchUserData(); // Refetch user data after successful update
            } else {
                console.error("Failed to update user data");
            }
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };
    

    const setProfilePhoto = async (photoData) => {
        try {
            console.log("IN SET PROFILE PHOTO");
            const formData = new FormData();
            formData.append("photo", photoData);

            const response = await fetch(`http://127.0.0.1:8000/api/set-dp/${userData.id}/`, {
                method: "PATCH",
                body: formData,
            });
            if (response.ok) {
                fetchUserData(); // Refetch user data after successful photo upload
            } else {
                console.error("Failed to set profile photo");
            }
        } catch (error) {
            console.error("Error setting profile photo:", error);
        }
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setProfilePhoto(file);
        }
    };

    return (
        <div className="profile-container">
            {/* Header and navigation */}
            <div className="top-bar">
                <div className="top-left"><strong>CAR SNAP</strong></div>
                <div className="top-right">
                    <a href="/" className="my-btn">HOME</a>
                    <button className="my-btn" onClick={() => setShowSettings(true)}>SETTINGS</button>
                </div>
            </div>
            <hr className="divider" />
            <div className="top-bar">
                <div className="top-left" style={{
                    color: 'black',
                    fontWeight: 'normal',
                    fontSize: '15px'
                }}>
                </div>
                <div className="top-right" style={{ fontWeight: 'normal', color: 'black' }}>
                    <strong>PROFILE</strong>
                </div>
            </div>
            <div className="top-bar-profile">
                    <div className="top-left-photo">
                        <img src={userData.photo || ProfilePicture} alt="Profile" className="profile-photo" />
                        <label htmlFor="photo-upload" className="edit-icon-label">
                            ✏️
                        </label>
                        <input type="file" id="photo-upload" onChange={handlePhotoChange} style={{ display: "none" }} />
                    
                        <hr className="photo-divider" />
                        <div className="user-info">
                            <div className="user">Current Balance : ETH( {balance} )</div>
                            <div className="social-icons">
                                <a href={userData.instagram}>Instagram &#x1F3A9;</a>
                                <a href={userData.linkedin}>LinkedIn &#x1F4C8;</a>
                                <a href={userData.facebook}>Facebook &#x1F4F1;</a>
                                <a href={`mailto:${userData.email}`}>Email &#x2709;</a>
                            </div>
                        </div>
                    </div>
                
                <div className="top-right-name">
                    <div className="profile-info">
                        <div className="name">{userData.name}</div>
                        <div className="id">ID: {userData.id}</div>
                        <p className="desc">{userData.description}</p>
                    </div>
                </div>
            </div>

            {/* Settings panel */}
            {showSettings && (
                <div className="settings-panel">
                <h3 className="info-label">Edit Profile</h3>
                {/* Input fields for editing profile */}
                <div className="info-item">
                    <span className="info-label">Name:</span>
                    <input type="text" name="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                    <button onClick={() => updateUserData('name', userData.name)}>Change</button>

                </div>
                <div className="info-item">
                    <span className="info-label">Description:</span>
                    <input type="text" name="description" value={userData.description} onChange={(e) => setUserData({ ...userData, description: e.target.value })} />
                    <button onClick={() => updateUserData('description', userData.description)}>Change</button>

                </div>
                <div className="info-item">
                    <span className="info-label">LinkedIn:</span>
                    <input type="text" name="linkedin" value={userData.linkedin} onChange={(e) => setUserData({ ...userData, linkedin: e.target.value })} />
                    <button onClick={() => updateUserData('linkedin', userData.linkedin)}>Change</button>

                </div>
                <div className="info-item">
                    <span className="info-label">Instagram:</span>
                    <input type="text" name="instagram" value={userData.instagram} onChange={(e) => setUserData({ ...userData, instagram: e.target.value })} />
                    <button onClick={() => updateUserData('instagram', userData.instagram)}>Change</button>

                </div>
                <div className="info-item">
                    <span className="info-label">Facebook:</span>
                    <input type="text" name="facebook" value={userData.facebook} onChange={(e) => setUserData({ ...userData, facebook: e.target.value })} />
                    <button onClick={() => updateUserData('facebook', userData.facebook)}>Change</button>

                </div>
                <div className="info-item">
                    <span className="info-label">Email:</span>
                    <input type="email" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    <button onClick={() => updateUserData('email', userData.email)}>Change</button>

                </div>
                {/* Additional input fields for other profile properties */}
                <button onClick={() => {
                    setShowSettings(false);
                }}>Done</button>
                </div>
            )}

            <Uploads name={userData.name} senderAddress={senderAddress}/>
            <Footer />
        </div>
    );
};

export default Profile;
