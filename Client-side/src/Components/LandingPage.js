import React from "react";
import "../styling/LandingPage.css";
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="navigation-bar">
        
        <Link to='login'  style={{ textDecoration: 'none' }}>sign In</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='register'  style={{ textDecoration: 'none' }}>sign up</Link>
        
      </div>

      <div>
        <h2 className="welcome"> Techie Year Planner</h2>
      </div>

      <div className="box">
    <div className="slogan">

        <p>Planning just got even better</p>

    </div>
     
      </div>
    </div>
  );
};

export default LandingPage;
