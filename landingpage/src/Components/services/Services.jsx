import React, { useState } from 'react';
import './services.scss';
import {Grid3X3, RectangleHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [activePoint, setActivePoint] = useState(1);
  const [activeHeader, setActiveHeader] = useState(1);

  const handlePointClick = (point) => {
    setActivePoint(point);
    setActiveHeader(point);
  };

  const testimonialData = [
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/male/75.jpg',
    text: 'At the beginning I thought the prices are a little high for what they offer but they over deliver each and every time.',
    name: 'Ronald Spice - Owner',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/female/76.jpg',
    text: 'I recommend Aria to every business owner or growth leader that wants to take his company to the next level',
    name: 'Lindsay Rune - Manager',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/female/75.jpg',
    text: 'My goals for using Aria\'s services seemed high when I first set them but they\'ve met them with no problem',
    name: 'Ann Black - Consultant',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/male/73.jpg',
    text: 'The guys from Aria helped with getting my business off the ground and turing into a profitable company.',
    name: 'Jude Thorn - Founder',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/female/74.jpg',
    text: 'I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year.',
    name: 'Marsha Singer - Marketer',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/female/73.jpg',
    text: 'Arias CDP personally attends client meetings and provides feedback on business growth strategies.',
    name: 'Amy Smith - Developer',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/female/72.jpg',
    text: 'I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year.',
    name: 'Marsha Singer - Marketer',
  },
  {
    image: 'https://xsgames.co/randomusers/assets/avatars/male/72.jpg',
    text: 'At the beginning I thought the prices are a little high for what they offer deliver each and every time.',
    name: 'Ronald Spice - Owner',
  },
  
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="lp__header_section__padding" id="home">
      <span className='lp_section-title'>Services</span>
      <h2>Choose The Services Package
        <br />
        That Suits Your Needs</h2>
      <div className='lp_service-list-container'>
        <div className='service-item_1'>
          <div className="CC" />
          <h4>Off The Ground Off The Ground</h4>
          <p>
            Perfect for fresh ideas or young startups, this packages will help to get the business off the ground.
          </p>
          <br />
          <ul>
            <li><span>🟩</span>Environment and competition</li>
            <li><span>🟩</span>Design the marketing plan</li>
          </ul>
          <h6>Starting at <span className='price'>$199</span></h6>
          <button>Details</button>
        </div>

        <div className='service-item_2'>
          <div className="Book" />
          <h4>Accelerated Growth</h4>
          <p>
            Use this service pack to give your company the necessary impulse to become an industry leader
          </p>
          <br />
          <ul>
            <li><span>🟩</span>Business strategy planning</li>
            <li><span>🟩</span>Taking the planned actions</li>
          </ul>
          <h6>Starting at <span className='price'>$299</span></h6>
          <button>Details</button>
        </div>

        <div className='service-item_3'>
          <div className="Laptop" />
          <h4>Market Domination</h4>
          <p>
            You already are a reference point in your industry now you need to learn about acquisitions
          </p>
          <ul>
            <li><span>🟩</span>Maintaining the leader status</li>
            <li><span>🟩</span>Acquisitions the right way</li>
          </ul>
          <h6>Starting at <span className='price'>$299</span></h6>
          <button>Details</button>
        </div>
      </div>

       
       <div className="propositions propositions-1">
        <div className="img">
        </div>
        <div className="content">
          <h3>Accelerate Business Growth To Improve Revenue Numbers</h3>
          <div className="dropdown-container">
            {[1, 2, 3].map((point) => (
              <div
                key={point}
                className={`dropdown ${activePoint === point ? "active" : ""}`}
              >
                <h4
                  onClick={() => handlePointClick(point)}
                  style={{
                    color: activePoint === point ? "#14BF98" : "inherit",
                  }}
                >
                  <span
                    className={`numbering ${
                      activePoint === point ? "active" : ""
                    }`}
                  >
                    {point}
                  </span>
                  {point === 1
                    ? "How Can Aria Help Your Business"
                    : point === 2
                    ? "Great Strategic Business Planning"
                    : "Online Marketing Campaign"}
                </h4>
                {activePoint === point && (
                  <p>
                    {point === 1
                      ? "At Aria solutions we've taken the consultancy concept one step further by offering a full service management organization with expertise."
                      : point === 2
                      ? "Aria partners with businesses to business growth and development ideas including environment analysis, plan execution and evaluation."
                      : "An awesome online marketing plan won't save your bad product but paired with a good product, the sky is the limit for what can be achieved."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='propositions propositions-2'>
        <div className='content'>
          <div className='category-list-container'>
            <div className='category-item active'>
              <h3><span><Grid3X3/></span>Business</h3>
            </div>
            <div className='category-item'>
              <h3><span><Grid3X3/></span>Expertise</h3>
            </div>
            <div className='category-item'>
              <h3><span><Grid3X3/></span>Quality</h3>
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
              <div className='progress-bar-p-100'><span><RectangleHorizontal/></span></div>
            </div>
            <div className='skill-item'>
              <h6>Opportunity Spotting 76%</h6>
              <div className='progress-bar-p-76'><RectangleHorizontal/></div>
            </div>
            <div className='skill-item'>
              <h6>Online Marketing 90%</h6>
              <div className='progress-bar-p-90'><RectangleHorizontal/></div>
            </div>
          </div>
        </div>
        <div className='img'/>
        {/* <img src='./assets/Forest.jpg' alt='Forest' loading="lazy" /> */}
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
    <div className="testimonial-list-container">
      <ChevronLeft onClick={handlePrevClick} />
      <div className="testimonial-item">
        <img src={testimonialData[currentIndex].image} alt={testimonialData[currentIndex].name} loading="lazy" />
        <p className="italic">{testimonialData[currentIndex].text}</p>
        <h4>{testimonialData[currentIndex].name}</h4>
      </div>
      <ChevronRight onClick={handleNextClick} />
    </div>
    </div>
  );
};

export default Services;