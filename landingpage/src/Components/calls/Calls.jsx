import React from "react";
import "./calls.css";

const Calls = () => (
  <div className="calls-container">
    <div className="calls-info">
    <span className="section-title">Call Me</span>
      <h2>Have Us Contact You By Filling And Submitting The Form</h2>
      <p>
        You are just a few steps away from a personalized offer. Just fill in
        the form and send it to us and we'll get right back with a call to help
        you decide what service package works.
      </p>
      <ul>
        <i className="fas fa-square square-icon"></i><li>It's very easy just fill in the form so we can call</li>
        <i className="fas fa-square square-icon"></i><li>During the call we'll require some info about the company</li>
        <i className="fas fa-square square-icon"></i><li>Don't hesitate to email us for any questions or inquiries</li>
      </ul>
    </div>
    <form className="calls-form">
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Phone" required />
      <input type="email" placeholder="Email" required />
      <select required>
        <option value="">Interested in...</option>
        <option value="service1">Service 1</option>
        <option value="service2">Service 2</option>
        <option value="service3">Service 3</option>
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
