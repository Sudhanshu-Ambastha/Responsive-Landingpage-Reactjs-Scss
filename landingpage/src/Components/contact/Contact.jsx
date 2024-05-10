import React from "react";
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
          <i className="fa-solid fa-location-pin"></i>22nd Inovative street, San
          Francisco, CA 94043, US
        </p>
      </div>
      <div className="contact-info-item">
        <p>
          <i className="fa-solid fa-phone-flip"></i>+81 720 22 128
        </p>
      </div>
      <div className="contact-info-item">
        <p>
          <i className="fa-solid fa-phone-flip"></i>+81 720 22 126
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
          <i className="fa-brands fa-facebook-f"></i>
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <i className="fa-brands fa-pinterest"></i>
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <i className="fa-brands fa-linkedin-in"></i>
        </span>
      </div>
      <div className="social-link-item">
        <span>
          <i className="fa-brands fa-behance"></i>
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