import React, { useState } from 'react';
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
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleUserInput = async () => {
    const newMessages = [...messages, { text: inputText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');
  
    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: inputText
              }
            ]
          }
        ]
      };
  
      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message to bot');
      }
  
      const data = await response.json();
      const botResponse = data.message;
      const updatedMessages = [...newMessages, { text: botResponse, sender: 'bot' }];
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error sending message to bot:', error);
    }
  };

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${imagepath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header>
        <h1>CONTACT US</h1>
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
      {/* Chat container */}
      <div className="chat-container">
        <div className="chat-box">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <input
          type="text"
          placeholder="Customer Support: Feel Free to Ask..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') { handleUserInput() }}}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
