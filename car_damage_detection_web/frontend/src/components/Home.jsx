import React, { Component } from "react";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";
import Profile from "./Profile.jsx";
import Navbar_home from "./Navbar_home.jsx";
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
          <Route path="/" element={<p>This is the My Own home page</p>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </Router>
    );
  }
}
