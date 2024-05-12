import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MapPin, Mail } from 'lucide-react';
import "./contact.css";

const Contact = () => (
  <div>
    <div className="contact-container">
      <div className="contact-info">
        <span className="section-title">Contact</span>
        <h2>Get In Touch using the form</h2>
        <p>
          You can stop by our office for a cup of coffee and just use the
          contact form beginning questioned and inquires
        </p>
        <ul>
          <li>
           <MapPin />22nd Inovative street, San Francisco, CA 94043, US
          </li>
          <li>
            {/*<FontAwesomeIcon className="fa-solid fa-phone-flip" />*/}+81 720
            22 128
          </li>
          <li>
            {/*<FontAwesomeIcon className="fa-solid fa-phone-flip" />*/}+81 720
            22 126
          </li>
          <li>
            <Mail />office@domain.com
          </li>
        </ul>
        <br />
        <h3>Follow Aria on Social Media</h3>
        <div className="social-link-list-container">
      <div className="social-link-item">
        <span>
          <FaFacebookF />
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <FaTwitter />
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <FaPinterest />
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <FaInstagram />
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <FaLinkedin />
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <FaBehance />
        </span>
      </div>
    </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="message" placeholder="message" required />
          <label className="checkbox-container">
            <input type="checkbox" required />
            <span className="checkmark"></span>I agree with Aria's stated
            Privacy Policy and Terms & Conditions
          </label>
          <button>CALL ME</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
