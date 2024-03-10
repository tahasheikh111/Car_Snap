import React from 'react';


// Sample comments data
const comments = [
  // Your sample comments data here

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
        <h1 style={{ fontWeight: 'bold', fontSize: '32px', margin: '0' }}>Reviews</h1>
      </header>

      {/* Reviews */}
      <div style={{
        flex: 1, // Grow to fill remaining space
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        overflowY: 'auto', // Enable vertical scroll
      }}>
        <div style={{
          minWidth: '80%', // Minimum width for content
          maxWidth: 'calc(100vw - 40px)', // Maximum width for content (40px for padding)
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}>
          {/* List of comments */}
          {comments.map((comment) => (
            <div key={comment.id} style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              maxWidth: '400px',
              width: '100%',
            }}>
              <img src={comment.user.imageUrl} alt={comment.user.name} style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginRight: '20px',
              }} />
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <h3>{comment.user.name}</h3>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 20px' }}>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Home</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Contact Us</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>About Us</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Pricing</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Review</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Rating</button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>CarSnap</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '0 20px' }}>
          <p style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '22px', lineHeight: '1.0' }}>Latest updates <br  />to your inbox</p>
          <input type="email" placeholder="Enter your email" style={{ padding: '5px 8px', marginLeft: 'auto' }} />
          <button style={{ backgroundColor: 'white', color: '#333', border: 'none', padding: '5px 10px', cursor: 'pointer' }}> Enter</button>
        </div>
      </footer>
    </div>
  );
};

export default ReviewPage;
