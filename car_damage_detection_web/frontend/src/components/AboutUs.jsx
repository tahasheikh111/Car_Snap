import React, { Component } from "react";
import BlackNav from "./BlackNav.jsx";
import Intro from "./Intro.jsx";
import "../styles/aboutus.css";
import imagepath from "../images/car.jpeg";

import Developers from "./Developers.jsx";

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="header">
                    <div className="about-us-container">
                        <h1 className="about-us-heading">About Us</h1>
                        <BlackNav />
                    </div>
                </div>
                <div className="section-container">
                    <div className="section">
                        <div className="left-content">
                            <h2>Damaged Car Classification</h2>
                        </div>
                        <div className="right-content">
                            <p>
                                Our website bridges the gap with accessible AI-powered car damage classification, potentially integrating with systems like CCC ONE. Unlike PlantSnap and Google Cloud Vision, we focus specifically on detailed car damage assessment. Utilizing advanced AI, we go beyond broad categories, empowering users in the automotive industry for streamlined workflows and fair assessments.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={imagepath} alt="Damage Car Classification" />
                </div>
                <div className="our-idea">
                    <div className="left-section">
                        <h2>Car Snap</h2>
                    </div>
                    <div className="right-section">
                        <h2>Our Car Damage Classification project is at the forefront of reshaping the automotive industry's approach to damage assessment. In a realm historically fraught with subjectivity and inaccuracy, our project leverages cutting-edge machine learning techniques to offer a detailed, objective, and accessible solution for car damage classification.</h2>
                        <h3>Machine Learning Techniques:</h3>
                        <p>Convolutional Neural Networks (CNNs): Central to our project is the implementation of Convolutional Neural Networks. These specialized neural networks are tailored for image recognition tasks, making them ideal for accurately identifying and categorizing various types of car damage. CNNs excel at learning hierarchical features, enabling our system to discern intricate patterns in images, from minor scratches to significant dents.</p>
                        <p>Transfer Learning: We incorporate transfer learning, a technique where a pre-trained model's knowledge is applied to a new, specific task. By utilizing a pre-trained neural network, our system taps into a wealth of information garnered from vast datasets, enhancing the model's ability to generalize across different types of car damage. This accelerates the training process and ensures robust performance even with limited labeled data.</p>
                        <p>Ensemble Learning: To further enhance accuracy, our project employs ensemble learning, combining predictions from multiple machine learning models. This approach boosts the system's overall reliability and robustness by mitigating the impact of individual model errors. Through collaboration, our ensemble of models ensures a more comprehensive and dependable car damage classification.</p>
                        <h2 className="quote">"Effort sculpted into precision. Your reviews, the masterpiece finale Car Snap."</h2>
                        <h2>The creation of Car Damage Classification required an extensive effort, involving a dedicated team of machine learning experts, data scientists, and domain specialists. Countless hours were invested in curating diverse datasets, fine-tuning models, and ensuring the system's adaptability to real-world scenarios. This project is a testament to the diligence and expertise of our team in crafting a solution that stands at the forefront of automotive technology.</h2>
                        <p>We invite you to experience the transformative power of Car Damage Classification. Your feedback is invaluable as it contributes to the ongoing enhancement of our system. Rate and review our project to share your insights and help us refine this revolutionary solution. Your input fuels our commitment to delivering excellence in automotive damage assessment, driving the industry towards a future of precision and objectivity.</p>
                    </div>
                </div>
                <Developers/>
            </>
        );
    }
}
