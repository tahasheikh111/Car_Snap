import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaArrowRight } from 'react-icons/fa';

const socialMediaAccounts = [
  { name: 'Facebook', icon: <FaFacebook size={36} color="#4267B2" />, url: 'https://www.facebook.com/yourpage' },
  { name: 'Instagram', icon: <FaInstagram size={36} color="#E1306C" />, url: 'https://www.instagram.com/yourpage' },
  { name: 'LinkedIn', icon: <FaLinkedin size={36} color="#0A66C2" />, url: 'https://www.linkedin.com/yourpage' },
  { name: 'YouTube', icon: <FaYoutube size={36} color="#FF0000" />, url: 'https://www.youtube.com/yourpage' },
];

const ContactPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif', overflowY: 'auto' }}>
      {/* Header */}
      <header style={{ padding: '10px', backgroundColor: 'white', color: 'black', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '38px', margin: '0' }}>Contact CarSnap</h1>
      </header>

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, padding: '20px' }}>
        {socialMediaAccounts.map((account) => (
          <div key={account.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
            <div style={{ marginRight: '10px' }}>{account.icon}</div>
            <div style={{ flexGrow: 1 }}>{account.name}</div>
            <a href={account.url} target="_blank" rel="noopener noreferrer">
              <button style={{ backgroundColor: 'transparent', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}><FaArrowRight /></button>
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Home</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Contact Us</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>About Us</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Pricing</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Review</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Rating</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>CarSnap</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '0' }}>
          <p style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '22px', lineHeight: '1.0' }}>Latest updates<br />to your inbox</p>
          <input type="email" placeholder="Enter your email" style={{ padding: '5px 8px', marginLeft: 'auto' }} />
          <button style={{ backgroundColor: 'white', color: '#333', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Enter</button>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
