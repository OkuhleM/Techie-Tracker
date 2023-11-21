import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styling/Profile.css";

function Profile() {
  return (
    <div>
      <nav>
          <div className="top-nav">
     
              <NavLink style={{ textDecoration: "none", float: "left" }}>Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                <NavLink style={{ textDecoration: "none" }} to="skilltracker">SkillTracker</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              
                <NavLink style={{ textDecoration: "none" }}to="../Components/CareerGoal.js">CareerGoal</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              
                <NavLink style={{ textDecoration: "none" }}to='../Components/YearInReview.js'>YearInReview</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              
                <NavLink style={{ textDecoration: "none" }}to="../Components/HabitTracker.js">HabitTracker</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink style={{ textDecoration: "none", float: "right" }}>Log out</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          </div>
      </nav>
        </div>
  );
}

export default Profile;
