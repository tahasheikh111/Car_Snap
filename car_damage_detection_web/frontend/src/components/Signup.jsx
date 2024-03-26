// Signup.jsx
import React from 'react';
import '../styles/signup.css'; // Import the CSS file
import imagepath from "../images/dima-panyukov-DwxlhTvC16Q-unsplash.jpg";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-page" style={{ backgroundImage: `url(${imagepath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="signup-container">
        <header>
          <h1>Sign Up</h1>
        </header>

        {/* Signup form */}
        <div className="form-container">
          <form className="signup-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
          </form>
          <div className="options">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
