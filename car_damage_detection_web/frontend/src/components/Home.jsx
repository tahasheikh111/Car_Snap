import React, { Component } from "react";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
<<<<<<< Updated upstream
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
=======
          <Route path="/ReviewPage" element={<ReviewPage />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Ratingpage" element={<RatingPage />} />
>>>>>>> Stashed changes
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Pricing" element={<Pricing />} />

        </Routes>
      </Router>
    );
  }
}
