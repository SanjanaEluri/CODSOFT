import React from 'react';
import './home.css';
import profile from './sanjana.jpg';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  const resume = () => {
    window.location.href = 'https://docs.google.com/document/d/1USdlaExeRPRGhmXmEGRT834DEYYcHbmT/edit?usp=drivesdk&ouid=115290437350363876771&rtpof=true&sd=true';
  };
  const linkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/d-m-sanjana-nagamani-eluri-19947825b/';
  };
  const github = () => {
    window.location.href = 'https://github.com/SanjanaEluri';
  };
  const contact = () => {
    navigate('/contact');
  }
  
  return (
    <div>
      <div className="container">
        <div className="content">
          <h5>Hello All I'm Sanjana👋</h5>
          <p>Pursuing B.Tech In KLU Computer Science and Information Technology Stream. I would like to improve my skills and also put my efforts to adept to learn new skills.</p>
          <img src="images/linkedin.png" alt="LinkedIn" style={{ width: '30px', height: '40px' }} onClick={linkedin} />&nbsp;&nbsp;
          <img src="images/github.jpg" alt="GitHub" style={{ width: '30px', height: '40px' }} onClick={github} /><br /><br />
          <button className="Button" onClick={contact}>Contact Me</button>&nbsp;&nbsp;
          <button className="Button" onClick={resume}>See My Resume</button>
        </div>
        <div className="image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Sanjana Nagamani Eluri. All rights reserved.</p>
        <p>
          <a href="https://www.linkedin.com/in/d-m-sanjana-nagamani-eluri-19947825b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/SanjanaEluri" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}
