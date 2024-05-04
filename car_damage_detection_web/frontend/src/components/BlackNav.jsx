import React, { Component } from "react";
import '../styles/blacknav.css';
const BlackNav = () => {
    return (
        <div className="navbar">
            <div className="center-box">
                <a href="/" className="nav-link">Home</a>
                <a href="/Contact" className="nav-link">Contact</a>  
                <a href="/AboutUs" className="nav-link">About</a>
                <a href="/ReviewPage" className="nav-link">Reviews</a>
                <a href="/ChatForum" className="nav-link">Community</a>
                <a href="/Profile" className="nav-link">Profile</a>
                <a href="/StorePage" className="nav-link">Store Page</a>
            </div>
        </div>
    )
};
export default BlackNav;