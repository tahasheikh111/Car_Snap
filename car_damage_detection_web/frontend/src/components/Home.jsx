import React, { Component } from "react";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewPage from "./ReviewPage.jsx";
import RatingPage from "./RatingPage.jsx";



export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<p>This is the Own home page</p>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/AboutUs" element={<ReviewPage />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Pricing" element={<RatingPage />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </Router>
    );
  }
}
