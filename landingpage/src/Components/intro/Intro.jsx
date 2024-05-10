import React from 'react';

import './intro.css';

const Intro = () => (
  <div className="lp__header section__padding" id="home">
   <div className="lp_content">
        <div className="lp_text">
            <span className="lp_section-title">INTRO</span>
            <br />
            <h2>We offer Some of The Best Business Growth Services In Town </h2>
            <br />
            <p>
                Launching a new company or developing the market position of an existing one can be quite an 
                overwhelming process at times.
            </p>
            <br />
            <p className="lp_italic">
                "Our mission here at Aria is to get you through those tough moments relying on our team's
                expertise in starting and growing companies." I
            </p>
            <br />
            <h4>Louise Donovan - CEO</h4>    
        </div>
        <div className="lp_container">
        <div className="img"></div>  
        </div>
        </div>
        <div className="lp_skill-list-container">
        <div className="lp_skill-item">
        <span><i class="fa-solid fa-binoculars"></i></span>
        <h4>Environment Analysis</h4>
        <br />
        <p>
            The starting point of any success story is knowing your current position in the business
            environment.
        </p>
        </div>
        <div className="lp_skill-item">
        <span><i class="fa-solid fa-rectangle-list"></i></span>
        <h4>Development Planing</h4>
        <br />
        <p>
            After completing the environmental analysis the next stage is to design and plan your
            development strategy
        </p>
        </div>
        <div className="lp_skill-item">
        <span><i class="fa-solid fa-chart-pie"></i></span>
        <h4>Execution and evaluation</h4>
        <br />
        <p>
            In this phase you will focus on executing the actions plan and evaluating the results after each
            marketing campaign.
        </p>
        </div>
        </div>
  </div>
);

export default Intro;