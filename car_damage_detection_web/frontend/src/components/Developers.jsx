import React from 'react';
import '../styles/developers.css'; // Import your stylesheet
import abdullah from '../images/abdullah.png';
import taha from '../images/taha.png';
import mousa from '../images/mousa.png';
import rameez from '../images/rameez.png';


const Developers = () => {
  const developersData = [
    { name: 'Muhammad Abdullah Naeem', photo: abdullah },
    { name: 'Taha Sheikh', photo: taha },
    { name: 'Mirza Musa Baig', photo: mousa },
    { name: 'Rameez', photo: rameez},
  ];

  return (
    <>
    <h1 className='developers-heading'> Meet the team!</h1>
    <div className="developers-container">
      {developersData.map((developer, index) => (
        <div key={index} className="developer-box">
          <img src={developer.photo} alt={developer.name} className="developer-photo" />
          <p className="developer-name">{developer.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Developers;
