import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedin, FaBehance,  } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaLocationdot } from '@awesome.me/kit-KIT_CODE/icons';
import "./contact.css";

const Contact = () => (
  <>
  <div className="column">
    <span className="section-title">CONTACT</span>
    <h3>Get In Touch using the form</h3>
    <br />
    <p>
      You can stop by our office for a cup of coffee and just use the contact
      form beginning questioned and inquires
    </p>
    <br />
    <div className="contact-info-list-container">
      <div className="contact-info-item">
        <p>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />22nd Inovative street, San
          Francisco, CA 94043, US
        </p>
      </div>
      <div className="contact-info-item">
        <p>
          <FontAwesomeIcon className="fa-solid fa-phone-flip"></FontAwesomeIcon>+81 720 22 128
        </p>
      </div>
      <div className="contact-info-item">
        <p>
          <FontAwesomeIcon className="fa-solid fa-phone-flip"></FontAwesomeIcon>+81 720 22 126
        </p>
      </div>
      <div className="contact-info-item">
        <p>
          <i className="fa-regular fa-envelope"></i>office@domain.com
        </p>
      </div>
    </div>
    <br />
    <br />
    <h4>Follow Aria on Social Media</h4>
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
    </div>
    <div className="form">
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Email" name="email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <div className="terms">
          <input type="checkbox" name="terms" id="contact_terms" value="1" />
          <label htmlFor="terms">
            I agree with the Aria's stated
            <span className="underline">Privacy Policy</span>
            and
            <span className="underline">terms & conditions</span>
          </label>
        </div>
        <button type="submit">Submit Message</button>
      </form>
    </div>
  </>
);

export default Contact;