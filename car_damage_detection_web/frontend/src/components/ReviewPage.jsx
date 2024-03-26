import React from 'react';
import Footer from "./Footer.jsx";
import '../styles/reviewpage.css'; // Import CSS file
import imagepath from "../images/car.jpeg";
import BlackNav from "./BlackNav.jsx";

// Sample comments data
const comments = [
  //  sample comments data 
  {
    id: 1,
    user: {
      name: 'John Doe',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  // Add more sample comments as needed
  {
    id: 3,
    user: {
      name: 'Alice Johnson',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    text: 'Donec auctor euismod massa, et lacinia mauris.',
  },
  {
    id: 4,
    user: {
      name: 'Bob Williams',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    text: 'Vestibulum ut nisl vel arcu euismod malesuada.',
  },
  {
    id: 5,
    user: {
      name: 'Eve Brown',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    text: 'Fusce euismod fermentum ante, vel egestas lorem facilisis vel.',
  },
  {
    id: 6,
    user: {
      name: 'Tom Wilson',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    text: 'Sed tincidunt auctor erat, at tristique risus varius sit amet.',
  },
  {
    id: 7,
    user: {
      name: 'Mary Davis',
      imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    text: 'Integer et augue et massa aliquam tempus.',
  },
  {
    id: 8,
    user: {
      name: 'Chris Miller',
      imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    text: 'Nulla vel tortor nec mauris pharetra lobortis.',
  },
  {
    id: 9,
    user: {
      name: 'Laura White',
      imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    text: 'Praesent nec neque nec orci sodales convallis id non lectus.',
  },
  {
    id: 10,
    user: {
      name: 'Alex Green',
      imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    text: 'Morbi venenatis metus non erat interdum, a mattis dui accumsan.',
  },
];

const ReviewPage = () => {
  return (
    <div className="review-page"style={{ backgroundImage: `url(${imagepath})`,  backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header>
        <h1>Reviews</h1>
      </header>
      <BlackNav />
      {/* Reviews */}
      <div className="review-container">
        <div className="comment-list">
          {/* List of comments */}
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <img src={comment.user.imageUrl} alt={comment.user.name} />
              <div>
                <h3>{comment.user.name}</h3>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
