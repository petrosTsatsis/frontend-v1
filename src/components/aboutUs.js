import React from 'react';
import '../App.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
          <div className="text-container-about">
            <h1 style={{paddingTop:40}}>About us</h1>
            <p style={{marginTop:'30px', paddingLeft:20, paddingRight:20}}>
              myCrm is the ultimate tool to organize customers, software, view the history 
              of purchases for each customer, keep contact points and book appointments with customers.
              Save ssl certificates, software licenses and view dashboards based on their status. myCrm
              can give a new taste in the organization section.
            </p>     
          </div>
          <div className="image">
            <img src="/getin.png" alt="About" style={{height:'370px'}}/>
          </div>
        </div>
      );
};

export default AboutUs;