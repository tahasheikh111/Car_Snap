import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Profile.css";
import ProfilePicture from '../images/taha.png'
import Uploads from "./Uploads.jsx";
import Footer from "./Footer.jsx";
const profileData = {
    photo: ProfilePicture,
    name: "Taha Sheikh",
    id: "1234567890"
};
const Profile = () => {
    return (
        <div className="profile-container">
            <div className="top-bar">
                <div className="top-left"><strong>CAR SNAP</strong></div>
                <div className="top-right">
                    <a href="/home" className="my-btn">HOME</a>
                    <a href="/settings" className="my-btn">SETTING</a>
                    <button className="logout-btn" style={{ color: 'white' }}>LOGOUT</button>
                </div>
            </div>
            <hr className="divider" />
            <div className="top-bar">
                <div className="top-left" style={{
                    color: 'black',
                    fontWeight: 'normal',
                    fontSize: '15px'
                }}>
                    <Link to="/previousPage">
                        <strong>GO BACK</strong> <span className="arrow">←</span>
                    </Link>
                </div>
                <div className="top-right" style={{ fontWeight: 'normal', color: 'black' }}>
                    <strong>PROFILE</strong>
                </div>
            </div>
            <div className="top-bar-profile">
                <div className="top-left-photo">
                    <img src={profileData.photo} alt="Profile" className="profile-photo" />
                    <hr className="photo-divider" />
                    <div className="user-info">
                        <div className="user">USER</div>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/">Instagram &#x1F3A9;</a>
                            <a href="https://www.linkedin.com/">LinkedIn &#x1F4C8;</a>
                            <a href="https://www.facebook.com/">Facebook &#x1F4F1;</a>
                            <a href="mailto:example@gmail.com">Email &#x2709;</a>
                        </div>
                    </div>
                </div>
                <div className="top-right-name">
                    <div className="profile-info">
                        <div className="name">{profileData.name}</div>
                        <div className="id">ID: {profileData.id}</div>
                        <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat error modi quibusdam adipisci exercitationem possimus necessitatibus recusandae. Laboriosam ab ullam corrupti repellat aperiam, sed eligendi excepturi mollitia necessitatibus deleniti odit iusto ut illo. Laboriosam quae cumque deserunt aut, nihil hic iusto numquam ea quisquam blanditiis eaque possimus, officia minus. Dolorum!</p>
                    </div>
                </div>
            </div>
            <Uploads/>
            <Footer/>
        </div >
    );
};

export default Profile;
