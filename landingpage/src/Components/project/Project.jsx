import React from 'react';
import './project.css';

const Project = () => (
  <div className="gpt3__header section__padding" id="home">
  <section>
    <span class="section-title">PROJECTS</span>
          <h3>Projects That We've Proud of</h3>
          <div class="category-list-container">
            <ul>
              <li>
                <button className="active">Show All</button>
              </li>
              <li>
                <button>Design</button>
              </li>
              <li>
                <button>Development</button>
              </li>
              <li>
                <button>Marketing</button>
              </li>
              <li>
                <button>SEO</button>
              </li>
            </ul>
          </div>
          <div class="project-list-container">
          <div className="project-item-container">
            <div class="project-item p-1">
            </div>
            <h3>Online Banking</h3>
          </div>
          <div className="project-item-container">
            <div class="project-item p-2"></div>
            <h3>Classic Industry</h3>
          </div>
          <div className="project-item-container">
            <div class="project-item p-3"></div>
            <h3>BoomBap Audio</h3>
          </div>
          <div className="project-item-container">
            <div class="project-item p-4"></div>
            <h3>Van Moose</h3>
          </div>
          <div className="project-item-container">
            <div class="project-item p-5"></div>
            <h3>Jay Moments</h3>
          </div> 
          <div className="project-item-container">
            <div class="project-item p-6"></div>
            <h3>Spark Events</h3>
          </div> 
          <div className="project-item-container">
            <div class="project-item p-7"></div>
            <h3>Casual Wear</h3>
          </div>
          <div className="project-item-container">
            <div class="project-item p-8"></div>
            <h3>Zazoo Apps</h3>
          </div>
          </div>
          </section>

          <section className="team">
            <h3>Our Team of Consultants</h3>
            <p>
              We're only as strong and as knowledge as our team. 
              <br />
              So here are the men and women customers meet goals and grow companies
            </p>
            <div class="team-member-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg" alt="Member 1" loading="lazy" />
              </div>
              <p>John Whitelong</p>
              <h5>General Manager</h5>
              <div class="social-links">
                <span><i class="fa-brands fa-facebook-f"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
              </div>
            </div>
            <div class="team-member-container">
            <div className="profile-picture" >
              <img src="https://xsgames.co/randomusers/assets/avatars/female/77.jpg" alt="Member 2" loading="lazy" />
              </div>
              <p>Veronica Smith</p>
              <h5>Business Developer</h5>
              <div class="social-links">
                <span><i class="fa-brands fa-facebook-f"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
              </div>
            </div>
            <div class="team-member-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg" alt="Member 3" loading="lazy" />
              </div>
              <p>Chris Zimerman</p>
              <h5>Online Marketer</h5>
              <div class="social-links">
                <span><i class="fa-brands fa-facebook-f"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
              </div>
            </div>
            <div class="team-member-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/female/70.jpg" alt="MEmber 4" loading="lazy" />
              </div>
              <p>Mary Villalonge</p>
              <h5>Community Manager</h5>
              <div class="social-links">
                <span><i class="fa-brands fa-facebook-f"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
              </div>
            </div>
            </section>
  </div>
);

export default Project;