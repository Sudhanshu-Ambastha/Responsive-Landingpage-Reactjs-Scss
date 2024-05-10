import React from 'react';
import './services.css';

const Services = () => (
  <div className="gpt3__header section__padding" id="home">
   <span className='Section-title'>Services</span>
      <h3>Choose The Services Package
          <br />
          That Suits Your Needs</h3>
      <div className='service-list-container'>
        <div className='service-item'>
          <img src='./assets/Book.jpg' alt='Book' />
          <h4>Off The Ground Off The Ground</h4>
          <p>
            Perfect for fresh ideas or young startups, this packages will help to get the business off the ground.
          </p>  
          <ul>
            <li>Environment and competition</li>
            <li>Design the marketing plan</li>
          </ul>
          <h6>Starting at <span className='price'>$199</span></h6>
          <button>Details</button>
        </div>
        
        <div className='service-item'>
          <img src='./assets/Coffeecup.jpg' alt='Coffeecup' loading="lazy"/>
          <h4>Accelerated Growth</h4>
          <p>
            Use this service pack to give your company the necessary impulse to become an industry leader
          </p>  
          <ul>
            <li>Business strategy planning</li>
            <li>Taking the planned actions</li>
          </ul>
          <h6>Starting at <span className='price'>$299</span></h6>
          <button>Details</button>
        </div>
        
        <div className='service-item'>
          <img src="./assets/Laptop.jpg" alt="Laptop" loading="lazy"/>
          <h4>Market Domination</h4>
          <p>
            You already are a reference point in your industry now you need to learn about acquisitions
          </p>  
          <ul>
            <li>Maintaining the leader status</li>
            <li>Acquisitions the right way</li>
          </ul>
          <h6>Starting at <span className='price'>$299</span></h6>
          <button>Details</button>
        </div>

         <div className='propositions propositions-1'>
          <img src='./assets/Mountain.jpg' alt='Mountain' loading="lazy"/>
          <div className='content'>
            <h3>Accelerate Business Growth To Improve Revenue Numbers</h3>
            <h4 className='active'><span className='order'>1</span>How Can Aria Help Your Business</h4>
            <br />
            <p>
              At Aria solutions we've taken the consultancy concept one step further by offering a full 
              service management organization with expertise.
            </p>
            <br />
            <h4><span className='order'>2</span>Great Strategic Business Planning</h4>
            <br />
            <h4><span className='order'>3</span>Online Marketing Campaign</h4>
          </div>
         </div>
         <div className='propositions propositions-2'>
         <div className='content'>
         <div className='category-list-container'>
          <div className='category-item active'>
            <h3><i class="fa fa-th" aria-hidden="true"></i>Business</h3>
          </div>
          <div className='category-item'>
            <h3><i class="fa fa-th" aria-hidden="true"></i>Expertise</h3>
          </div>
          <div className='category-item'>
            <h3><i class="fa fa-th" aria-hidden="true"></i>Quality</h3>
          </div>
         </div>
         <br />
         <h3>Business Services For Companies</h3>
         <br />
        <p>
            Aria provides the most innovative and customized business services in the industry. Our <span className='green-text underline'>Services</span>
            section shows how flexible we are for all types of budgets.
        </p>
        <div className='skill-list-container'>
          <div className='skill-item'>
            <h6>Business Development 100%</h6>
            <div className='progress-bar p-100'></div>
          </div>
          <div className='skill-item'>
            <h6>Opportunity Spotting 76%</h6>
            <div className='progress-bar p-76'></div>
          </div>
          <div className='skill-item'>
            <h6>Online Marketing 90%</h6>
            <div className='progress-bar p-90'></div>
          </div>
        </div>
        </div>
        <img src='./assets/Forest.jpg' alt='Forest' loading="lazy"/>
         </div>
         </div>
         <div className='testimonials'>
          <h3>Read Our Customer Testimonials</h3>
          <br />
          <p>
            Our clients are our partners and we can not imagine a bettter future for our 
            <br />      
            company without helping them reach their objectives 
            <br />
          </p>
         </div>
         <div className='testimonial-list-container'>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/male/75.jpg' alt='Customer 1' loading="lazy"/> 
            <p className='italic'>
              At the beginning I thought the prices are a little high for what they offer but they over
              deliver each and every time.
            </p>          
            <h4>
              Ronald Spice - Owner
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/female/76.jpg' alt='Customer 2' loading="lazy"/> 
            <p className='italic'>
              I recommend Aria to every business owner or growth leader that wants to take his company to
              the next level
            </p>            
            <h4>
              Lindsay Rune - Manager
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/female/75.jpg' alt='Customer 3' loading="lazy"/> 
            <p className='italic'>
              My goals for using Aria's services seemed high when I first set them but they've met them with
              no problem
            </p>            
            <h4>
              Ann Black - Consultant
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/male/73.jpg' alt='Customer 4' loading="lazy" /> 
            <p className='italic'>
              The guys from Aria helped with getting my business off the ground and turing into a
              profitable company.
            </p>            
            <h4>
              Jude Thorn - Founder
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/female/74.jpg' alt='Customer 5' loading="lazy"/> 
            <p className='italic'>
              I purchased the Growth Accelerator service pack a few years ago and I renewed the contract
              each year.
            </p>
            <h4>
              Marsha Singer - Marketer
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/female/73.jpg' alt='Customer 6' loading="lazy"/> 
            <p className='italic'>
              Aria's CDP personally attends client meetings and his feedback on business growth
              strategies.
            </p>
            <h4>
              Any Smith - Developer
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/female/72.jpg' alt='Customer 7' loading="lazy"/> 
            <p className='italic'>
              I purchased the Growth Accelerator service pack a few years ago and I renewed the contract
              each year.
            </p>
            <h4>
              Marsha Singer - Marketer
            </h4>
          </div>
          <div className='testimonial-item'>
            <img src='https://xsgames.co/randomusers/assets/avatars/male/72.jpg' alt='Customer 8' loading="lazy" /> 
            <p className='italic'>
              At the beginning I thought the prices are a little high for what they offer 
              deliver each and every time.
            </p>
            <h4>
              Ronald Spice - Owner
            </h4>
          </div>
         </div>
  </div>
);

export default Services;