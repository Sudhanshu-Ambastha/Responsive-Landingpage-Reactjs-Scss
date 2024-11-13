import React from "react";
import "./about.scss";
import images from "../../assets";

const About = () => (
  <div className="about-container">
    <img src={images.Glacier} alt="Mountain" loading="lazy" className="Mountain" />
    <div className="content">
      <span className="section-title">ABOUT</span>
      <h3>We're Passionate About<br/> Delivering Growth Services</h3>
      <p>
        Our goal is to provide the right business growth services at the<br/>
        appropriate time so companies can benefit from the created<br/>
        momentum and thrive for a long period of time
      </p>
      <ul>
        <li>Everything we recommend has direct positive impact</li>
        <li>You will become an important partner of our company</li>
      </ul>
      <div className="stats-list-container">
        <div className="stat-items">
          <p className="number">231</p>
          <p>Happy Users</p>
        </div>
        <div className="stat-items">
          <p className="number">121</p>
          <p>Issues Solved</p>
        </div>
        <div className="stat-items">
          <p className="number">159</p>
          <p>Good Reviews</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
