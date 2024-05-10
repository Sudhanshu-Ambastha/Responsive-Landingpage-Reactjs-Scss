import React from "react";
import "./calls.css";

const Calls = () => (
  <div id="callMe" className="form-1">
    <div className="lp_container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <div className="lp_section-title">Call Me</div>
            <h2>Have us contact you by Filling and Submitting the Form</h2>
            <br />
            <p className="white">
              "You are just a few steps away from the personalized offer. Just
              fill in the form and send it to us and we'll get right back with a
              call to help you decide what service package works."
            </p>
            <ul className="list-unstyled li-space-lg white">
              <li className="media">
                <i className="fas fa-square"></i>
                <div className="media-body">
                  It's very easy fill in the form so we can call
                </div>
              </li>
              <li>During the call we'll require some info about the company</li>
              <li>Don't hesitate to email us for any questions or inquires</li>
            </ul>
          </div>
          <div className="lp_form">
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="phone" placeholder="Phone" />
              <input type="email" name="email" placeholder="Email" />
              <select name="plan">
                <option disabled selected>
                  Interested In
                </option>
                <option value="off_the_ground">Off the Ground</option>
                <option value="accelerated_growth">accelerated growth</option>
                <option value="market_domination">Market Domination</option>
              </select>
              <div className="lp_terms-container">
                <input type="checkbox" name="terms" value="1" id="terms" />
                <label htmlFor="terms">
                  I agree with the Aria's stated{" "}
                  <span className="underline">Privacy Policy</span>
                  and
                  <span className="underline">terms & conditions</span>
                </label>
              </div>
              <button>Call Me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Calls;