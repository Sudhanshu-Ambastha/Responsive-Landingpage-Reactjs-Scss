import React from "react";
import "./calls.scss";

const Calls = () => (
  <div className="calls-container">
    <div className="calls-info">
    <span className="section-title">Call Me</span>
      <h2>Have Us Contact You By Filling<br/> And Submitting The Form</h2>
      <p>
        You are just a few steps away from a personalized offer. Just<br/> 
        fill in the form and send it to us and we'll get right back with a<br/> 
        call to help you decide what service package works.
      </p>
      <ul>
        <li><span/>It's very easy just fill in the form so we can call</li>
        <li><span/>During the call we'll require some info about the company</li>
        <li><span/>Don't hesitate to email us for any questions or inquiries</li>
      </ul>
    </div>
    <form className="calls-form">
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Phone" required />
      <input type="email" placeholder="Email" required />
      <select required>
        <option value="">Interested in...</option>
        <option value="service1">Off The Ground</option>
        <option value="service2">Accelerated Growth</option>
        <option value="service3">Market Domain</option>
      </select>
      <label className="checkbox-container">
        <input type="checkbox" required />
        <span className="checkmark"></span>I agree with Aria's stated Privacy
        Policy and Terms & Conditions
      </label>
      <button>CALL ME</button>
    </form>
  </div>
);

export default Calls;
