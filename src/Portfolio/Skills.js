import React from 'react';
import './skills.css';

export default function Skills() {
  const aws = () => {
    window.location.href = 'https://www.credly.com/badges/ddc0c878-3f8a-407f-8328-727e4883546d/public_url';
  };
  const food= () => {
    window.location.href = 'https://feastexpress19.netlify.app';
  };
  return (
    <div className="skills-container">
      <h1 className="skills-header">Skills</h1>
      <ul className="skills-list">
        <li className="skills-item">Problem Solving</li>
        <li className="skills-item">Teamwork and collaboration</li>
        <li className="skills-item">MERN Full Stack development</li>
        <li className="skills-item">C,Java</li>
      </ul>
      <h1 className="achievements-header">Achievements</h1>
      <div className="achievements-item">
        <img
          src="images/aws.png"
          alt="AWS"
          className="achievements-image"
          onClick={aws}
        />
        <h3>AWS CLOUD PRACTITIONER</h3>
      </div>

      <h1 className="achievements-header">Projects  </h1>
      <div className="achievements-item">
        <img
          src="images/feastexpress.jpg"
          alt="feastexpress"
          className="achievements-image"
          onClick={food}
        />
        <h3 onClick={food}>FeastExpress</h3><br/>&nbsp;&nbsp;&nbsp;
        
        <h5>Online Food ordering </h5>
        <p>Using MERN Full Stack</p>
      </div>
      
    </div>
  );
}