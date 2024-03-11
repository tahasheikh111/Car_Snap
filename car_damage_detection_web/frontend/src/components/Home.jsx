import React, { Component } from "react";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";
import Profile from "./Profile.jsx";
import Navbar_home from "./Navbar_home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<div>
                                          <Navbar_home />

                                      </div>} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

