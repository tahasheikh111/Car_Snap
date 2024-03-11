import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Home</button>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Contact Us</button>
        </Link>
        <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>About Us</button>
        </Link>
        <Link to="/Pricing" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Chat Forum</button>
        </Link>
        <Link to="/ReviewPage" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Review</button>
        </Link>
        <Link to="/RatingPage" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Rating</button>
        </Link>
        <Link to="/Home" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>CarSnap</button>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '0' }}>
        <p style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '22px', lineHeight: '1.0' }}>Latest updates<br />to your inbox</p>
        <input type="email" placeholder="Enter your email" style={{ padding: '5px 8px', marginLeft: 'auto' }} />
        <button style={{ backgroundColor: 'white', color: '#333', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Enter</button>
      </div>
    </footer>
  );
};

export default Footer;
