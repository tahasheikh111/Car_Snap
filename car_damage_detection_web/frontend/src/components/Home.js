import React, { Component } from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Profile from "./Profile";
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
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </Router>
    );
  }
}
