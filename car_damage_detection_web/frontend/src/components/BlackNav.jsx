import React, { Component } from "react";
import '../styles/blacknav.css';
const BlackNav = () => {
    return (
        <div class="navbar">
            <div class="center-box">
                <a href="/" class="nav-link">Home</a>
                <a href="/Contact" class="nav-link">Contact</a>
                <a href="/ChatForum" class="nav-link">Community</a>
                <a href="/AboutUs" class="nav-link">About</a>
                <a href="/ReviewPage" class="nav-link">Reviews</a>
                <a href="/RatingPage" class="nav-link">Ratings</a>
                <a href="/Profile" class="nav-link">Login/Signup</a>
            </div>
        </div>
    )
};
export default BlackNav;