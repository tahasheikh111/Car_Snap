import React, { Component } from "react";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";
import Profile from "./Profile.jsx";
import RatingPage from "./RatingPage.jsx";
import ReviewPage from "./ReviewPage.jsx";
import Navbar_home from "./Navbar_home.jsx";
import ChatForum from "./ChatForum.jsx";
import Upload_page from "./Upload_page.jsx";
import loginpage from "./login.jsx";
import signup from "./Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Login from "./login.jsx";

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
              <Route path="/RatingPage" element={<RatingPage />} />
              <Route path="/ReviewPage" element={<ReviewPage />} />
              <Route path="/ChatForum" element={<ChatForum />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/UploadPage" element=
              {<Upload_page/>} />

            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

