<<<<<<< Updated upstream
import React, { Component } from "react";

export default class Pricing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // if we insert javascript code in tags we use {} this bracket to write
        return <h1> This is Pricing Page </h1>
    }
}
=======
import React from 'react';
import { Link } from 'react-router-dom';

// Sample user messages data
const userMessages = [
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

const SnapTalksPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif', }}>
      {/* Header */}
      <header style={{ padding: '10px', backgroundColor: 'white', color: 'black', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '38px', margin: '0' }}>Snap Talks</h1>
      </header>
  
      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, padding: '20px' }}>
        {userMessages.map((msg) => (
          <div key={msg.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
            <img src={msg.user.imageUrl} alt={msg.user.name} style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
              <div style={{ fontWeight: 'bold' }}>{msg.user.name}</div>
              <div>{msg.text}</div>
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

export default SnapTalksPage;
>>>>>>> Stashed changes
