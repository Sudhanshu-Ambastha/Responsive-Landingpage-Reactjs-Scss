import React from "react";
import "./about.scss";

const About = () => (
  <div>
     <img src="../../assets/Mountain.jpg" alt="Mountain" loading="lazy"/>
        <div class="content">
          <span class="section-title">ABOUT</span>
          <h3>We're Passionate about Delivering Growth Services</h3>
          <p>
            <ul>
                <li>Everything we recommend has direct positive impact</li>
                <li>You will become an important partner of our company</li>
            </ul>
            <div class="stats-list-container">
                <div class="stat-items">
                    <p className="number">231</p>
                    <p>Happy Users</p>
                </div>
                <div class="stat-items">
                    <p className="number">121</p>
                    <p>Issues Solved</p>
                </div>
                <div class="stat-items">
                    <p className="number">159</p>
                    <p>Good Reviews</p>
                </div>
            </div>
            </p>
        </div>
  </div>
);

export default About;