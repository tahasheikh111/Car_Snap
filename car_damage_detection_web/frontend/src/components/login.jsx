import React from 'react';
import '../styles/login.css'; // Import the CSS file
import imagepath from "../images/marek-pospisil-oUBjd22gF6w-unsplash.jpg";
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    
      // Redirect to the Navbar_home page
      history.push("/Navbar_home");
  };
  return (
    <div className="login-page" style={{ backgroundImage: `url(${imagepath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="login-container">
        <header>
          <h1>Login</h1>
        </header>

        {/* Login form */}
        <div className="form-container">
          <form className="login-form" onSubmit={handleLogin} >
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" >Login</button>
          </form>
          <div className="options">
            <Link to="/signup">Create New Account</Link>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
