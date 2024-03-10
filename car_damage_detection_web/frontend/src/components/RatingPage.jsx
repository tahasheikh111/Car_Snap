import React from 'react';
import { Link } from 'react-router-dom';

// Sample ratings data
const ratings = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    rating: 4.5,
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    rating: 3.8,
  },
  {
    id: 3,
    user: {
      name: 'Alice Johnson',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    rating: 5,
  },
  {
    id: 4,
    user: {
      name: 'Bob Williams',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    rating: 2.5,
  },
  {
    id: 5,
    user: {
      name: 'Eve Anderson',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    rating: 4,
  },
  {
    id: 6,
    user: {
      name: 'Mike Wilson',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    rating: 3.2,
  },
];

const RatingPage = () => {
  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
      } else {
        stars.push(<span key={i}>★</span>);
      }
    }
    return stars;
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100vw', // Full width of the viewport
      backgroundColor: 'grey', 
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '20px',
        width: '100%',
        textAlign: 'center',
      }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '24px', margin: '0' }}>Ratings</h1>
      </header>

      {/* Ratings list */}
      <div style={{
        flex: 1, // Grow to fill remaining space
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background with opacity
      }}>
        {ratings.map((rating) => (
          <div key={rating.id} style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white', // White background color for each rating
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            width: '100%',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={rating.user.imageUrl} alt={rating.user.name} style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                marginRight: '20px',
              }} />
              <div>
                <h3 style={{ margin: '0' }}>{rating.user.name}</h3>
                <p style={{ margin: '0', fontSize: '14px', color: '#888' }}>
                  {renderStars(rating.rating)} ({rating.rating.toFixed(1)})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* Footer */}
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

      
    </div>
  );
};

export default RatingPage;
