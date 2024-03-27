import React from 'react';
import Footer from "./Footer.jsx";
import '../styles/ratingpage.css'; // Import CSS file
import imagepath from "../images/dreamcar.jpg";
import BlackNav from "./BlackNav.jsx";

// Sample ratings data
const ratings = [
  // sample ratings data here
  {
    id: 1,
    user: {
      name: 'John Doe',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    rating: 4.5,
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
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
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
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
        stars.push(<span key={i} className="rating-stars">★</span>);
      } else {
        stars.push(<span key={i} className="nonrating-stars">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="rating-page" style={{ backgroundImage: `url(${imagepath})`,  backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Header */}
      <header>
        <h1>Ratings</h1>
      </header>
      <BlackNav />
      {/* Ratings list */}
      <div className="rating-container">
        {ratings.map((rating) => (
          <div key={rating.id} className="rating-item">
            <div className="rating-user">
              <img src={rating.user.imageUrl} alt={rating.user.name} />
              <div>
                <h3>{rating.user.name}</h3>
                <p className="rating-value">
                  {renderStars(rating.rating)} ({rating.rating.toFixed(1)})
                </p>
              </div>
            </div>
            {rating.description && <p className="rating-description">{rating.description}</p>}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RatingPage;





