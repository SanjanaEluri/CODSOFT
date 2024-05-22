import React from 'react';
import './contact.css'



export default function Contact() {

  return (
       <div div className="card">
        
    
    
        <img src="images/sanjana.jpg" className="card-img-top" alt="Profile" style={{ width: '100%', height: '100%' ,borderRadius:'1rp'}} />
        <h3>Name: Sanjana Eluri</h3><br></br>
       <br></br>
         
            <img src="images/email.jpg" alt="Email" style={{ width: '20px', height: '20px' }} />{' '}
            Email: <a href="mailto:2200090021@kluniversity.in" style={{ color: '#ea7f05' }}>2200090021@kluniversity.in</a>
        <br>
        </br>
          
            <img src="images/linkden.jpg" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />{' '}
            LinkedIn: <a href="https://www.linkedin.com/in/d-m-sanjana-nagamani-eluri-19947825b/" target="_blank" rel="noopener noreferrer">sanjana-nagamani</a>
         
       
        </div>
  );
}
