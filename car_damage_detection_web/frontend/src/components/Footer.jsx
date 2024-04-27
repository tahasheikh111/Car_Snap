import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <Link to="/" className="footer-link"><button>Home</button></Link>
        <Link to="/UploadPage" className="footer-link"><button>Upload</button></Link>
        <Link to="/Contact" className="footer-link"><button>Contact </button></Link>
        <Link to="/AboutUs" className="footer-link"><button>About </button></Link>
        <Link to="/ChatForum" className="footer-link"><button>Chat Forum</button></Link>
        <Link to="/ReviewPage" className="footer-link"><button>Review</button></Link>
        <Link to="/" className="footer-link"><button>CarSnap</button></Link>
      </div>
      <div className="subscribe-section">
        <p>Latest updates<br />to your inbox</p>
        <input type="email" placeholder="Enter your email" />
        <button>Enter</button>
      </div>
    </footer>
  );
};


export default Footer;
