import React from 'react';
import '../styles/intro.css'; // Import your stylesheet
import imagepath from '../images/homepage.png'

const Intro = () => {
  return (
    <>
    <div className="Intro_container">
      <div className="header_component">
        <h2>Visualize, Decode, Check Smart</h2>
      </div>
      <div className="content_component">
        <p>
        Harnessing intelligent technology, our Car Damage Classifier swiftly and precisely identifies diverse car damages, expediting decisions on repairs and insurance for a seamless and efficient process.
        </p>
        <button className="action-button_component">Upload</button>
      </div>
    </div>
    <div className="picture">
        <img src={imagepath} alt="CAR SNAP" />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum voluptas corporis ab excepturi voluptatibus! Earum, itaque, illo sapiente aperiam optio distinctio ullam ad dolores quam rem id natus cum laudantium iure! Nihil necessitatibus, odit vero mollitia incidunt nemo maxime hic perspiciatis fuga architecto assumenda placeat, inventore quo amet. Facere assumenda et in magnam suscipit odit consectetur, eligendi nihil, a at aperiam, vel harum! Ratione neque amet dolorem officia ipsum expedita recusandae voluptates quasi consectetur quas quisquam, quos quidem assumenda? Quas illo inventore nulla deleniti necessitatibus suscipit exercitationem, doloremque harum eos! Illum nam porro, modi tenetur perspiciatis cupiditate quidem asperiores.</p>
    </>
    
  );
};

export default Intro;
