import React from 'react';
import Footer from "./Footer.jsx";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaArrowRight } from 'react-icons/fa';
import '../styles/contactus.css'; // Import the CSS file
import imagepath from "../images/dreamcar.jpg";
import BlackNav from "./BlackNav.jsx";

const socialMediaAccounts = [
  { name: 'Facebook' , icon: <FaFacebook size={36} color="#4267B2" />, url: 'https://www.facebook.com/yourpage' },
  { name: 'Instagram', icon: <FaInstagram size={36} color="#E1306C" />, url: 'https://www.instagram.com/yourpage' },
  { name: ' LinkedIn', icon: <FaLinkedin size={36} color="#0A66C2" />, url: 'https://www.linkedin.com/yourpage' },
  { name: '  YouTube', icon: <FaYoutube size={36} color="#FF0000" />, url: 'https://www.youtube.com/yourpage' },
];

const ContactPage = () => {
  return (
    <div className="contact-page" style={{ backgroundImage: `url(${imagepath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <header>
        <h1>Contact CarSnap</h1>
      </header>
      <BlackNav />
      {/* Main content */}
      <div className="main-content">
    
        {socialMediaAccounts.map((account) => (
          <div key={account.name} className="social-media-item">
            <div className="icon">{account.icon}</div>
            <div className="name">{account.name}</div>
            <div className="button">
            <a href={account.url} target="_blank" rel="noopener noreferrer">
              <button><FaArrowRight /></button>
            </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
