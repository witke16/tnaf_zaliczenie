import React from 'react';
import './About.css';
import helper from '../todo_helper.jpg'
const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>This is a final project for the subject "Tworzenie nowoczesnych aplikacji frontendowych w praktyce".</p>
      <p>The website was created by Witold Weiner</p>
      <img src={helper} alt="ToDoList helper" className="helper-image" />
    </div>
  );
};

export default About;