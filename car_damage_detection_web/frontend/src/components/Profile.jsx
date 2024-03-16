import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="top-bar">
                <div className="top-left"><strong>CAR SNAP</strong></div>
                <div className="top-right">
                    <a href="/home">HOME</a>
                    <a href="/settings">SETTING</a>
                    <button className="logout-btn" style={{color:'white'}}>LOGOUT</button>
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
        </div >
    );
};

export default Profile;
