import React, { Component } from "react";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
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
import Web3 from "web3";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      isConnected: false,
      senderAddress: "" // Add senderAddress state
    };
  }

  componentDidMount() {
    this.initializeWeb3();
  }

  async initializeWeb3() {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Initialize Web3 with MetaMask's provider
      const web3 = new Web3(window.ethereum);
      try {
        // Request user's permission to connect
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts(); // Retrieve Ethereum accounts
        const senderAddress = accounts[0]; // Take the first account as senderAddress
        console.log(senderAddress);
        this.callAPI(senderAddress);
        this.setState({ web3, isConnected: true,senderAddress });
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.error("MetaMask not detected");
    }
  }
    // Function to call your API
    async callAPI(sender) {
      // Placeholder API call, replace with your actual API call
      await fetch("http://127.0.0.1:8000/api/create-user-profiles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: sender
          // Add other necessary data for your API call
        })
      })
        .then(response => response.json())
        .then(data => {
          // Handle API response
          console.log("API response:", data);
        })
        .catch(error => {
          console.error("Error calling API:", error);
        });
    }
  render() {
    const { web3, isConnected,senderAddress } = this.state;
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
              <Route path="/Profile" element={<Profile web3={web3} senderAddress={senderAddress}/>} />
              <Route path="/RatingPage" element={<RatingPage />} />
              <Route path="/ReviewPage" element={<ReviewPage web3={web3} senderAddress={senderAddress} />} />
              <Route path="/ChatForum" element={<ChatForum senderAddress={senderAddress}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/UploadPage" element=
              {<Upload_page web3={web3} senderAddress={senderAddress}/>} />

            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

