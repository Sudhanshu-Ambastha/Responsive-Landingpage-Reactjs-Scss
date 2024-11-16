import React, { useState, useEffect, useRef } from 'react';
import './services.scss';
import { RectangleHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialsData from './testimonials.json';

const Services = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePoint, setActivePoint] = useState(1);
  const [enabledStates, setEnabledStates] = useState({
    1: false,
    2: false,
    3: false,
  }); 
  const scrollContainerRef = useRef(null);
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setEnabledStates((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map(key => [key, false])),
      [category]: !prevState[category], 
    }));
  };

  const handlePointClick = (point) => {
    setActivePoint(point);
  };

  const getCategoryContent = () => {
    switch (activeCategory) {
      case 1:
        return (
          <div className="skill-list-container">
          <h3>Business Services For Companies</h3>
          <p>Aria provides the most innovative and customized business services in the industry. Our <span className='underline'>Services</span> section shows how flexible we are for all types of budgets.</p>
            <div className="skill-item">
              <h6>Business Development 100%</h6>
              <div className="progress-bar-p-100">
                <RectangleHorizontal color="#14bf98" />
              </div>
            </div>
            <div className="skill-item">
              <h6>Opportunity Spotting 76%</h6>
              <div className="progress-bar-p-76">
                <RectangleHorizontal color="#14bf98" />
              </div>
            </div>
            <div className="skill-item">
              <h6>Online Marketing 90%</h6>
              <div className="progress-bar-p-90">
                <RectangleHorizontal color="#14bf98" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="skill-list-container">
          <ul className="Grid">
            <li><span className='bold'>High quality</span> is on top of our list when it comes to the way we deliver the services</li>
            <li><span className='bold'>Maximum impact</span> is what we look for in our actions</li>
            <li><span className='bold'>Quality standards</span> are important but meant to be exceeded</li>
            <li><span className='bold'>We're always looking</span> for industry leaders to help them win their market position</li>
            <li><span className='bold'>Evaluation</span> is a key aspect of this business and important</li>
            <li><span className='bold'>Ethic</span> procedures are always at the base of everything we do</li>
          </ul>
        </div>
        );
      case 3:
        return (
          <div className="skill-list-container">
            <text className='textarea'>
              <span className='bold'>We strive to achieve</span> 100% customer satisfaction for both types of customers:<br/> hiring companies and job seekers. Types of customers <span className='underline'>with huge potential</span><br/><br/>
              <span className='bold'>Our goal is to help</span> your company achieve its full potential and establish long term<br/> stability for <span className='underline'>the stakeholders</span><br/><br/>
              <li>It's easy to get a quotation, just call our office anytime</li>
              <li>We'll get back to you with an initial estimate soon</li>               
              <li>Get ready to see results even after only 30 days</li>
              <li>Ask for a quote and start improving your business</li>
              <li>Just fill out the form and we'll call you right away</li>
            </text>
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const extendedData = [...testimonialsData, ...testimonialsData.slice(0, 3)];
    setTestimonialData(extendedData);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonialsData.length - 3;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= testimonialsData.length - 3) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= testimonialsData.length - 3) {
          return 0; 
        }
        return prevIndex + 1;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const translateValue = -(currentIndex * (100 / 3));
      scrollContainerRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentIndex]);

  const renderVisibleTestimonials = () => {
    return testimonialData.map((testimonial, index) => (
      <div
        key={index}
        className="testimonial-item"
      >
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          loading="lazy"
        />
        <p className="italic">{testimonial.text}</p>
        <h4>{testimonial.name}</h4>
      </div>
    ));
  };

  return (
    <div className="lp__header_section__padding" id="home">
      <span className="lp_section-title">Services</span>
      <h2>
        Choose The Services Package
        <br />
        That Suits Your Needs
      </h2>

      <div className="lp_service-list-container">
        <div className="service-item_1">
          <div className="CC" />
          <h4>Off The Ground</h4>
          <p>
            Perfect for fresh ideas or young startups, this package will help get your business off the ground.
          </p>
          <ul>
            <li>Environment and competition</li>
            <li>Design the marketing plan</li>
          </ul>
          <h6>Starting at <span className="price">$199</span></h6>
          <button>Details</button>
        </div>

        <div className="service-item_2">
          <div className="Book" />
          <h4>Accelerated Growth</h4>
          <p>
            Use this service pack to give your company the necessary impulse to become an industry leader.
          </p>
          <ul>
            <li>Business strategy planning</li>
            <li>Taking the planned actions</li>
          </ul>
          <h6>Starting at <span className="price">$299</span></h6>
          <button>Details</button>
        </div>

        <div className="service-item_3">
          <div className="Laptop" />
          <h4>Market Domination</h4>
          <p>
            You already are a reference point in your industry; now you need to learn about acquisitions.
          </p>
          <ul>
            <li>Maintaining the leader status</li>
            <li>Acquisitions the right way</li>
          </ul>
          <h6>Starting at <span className="price">$399</span></h6>
          <button>Details</button>
        </div>
      </div>

      <div className="propositions propositions-1">
        <div className="img" />
        <div className="content">
          <h3>Accelerate Business Growth To Improve Revenue Numbers</h3>
          <div className="dropdown-container">
            {[1, 2, 3].map((point) => (
              <div key={point} className={`dropdown ${activePoint === point ? "active" : ""}`}>
                <h4
                  onClick={() => handlePointClick(point)}
                  className={activePoint === point ? "active" : ""}
                >
                  <span className={`numbering ${activePoint === point ? "active" : ""}`}>
                    {point}
                  </span>
                  {point === 1
                    ? "How Can Aria Help Your Business"
                    : point === 2
                      ? "Great Strategic Business Planning"
                      : "Online Marketing Campaign"}
                </h4>
                <p className={activePoint === point ? "active" : ""}>
                  {point === 1
                    ? "At Aria solutions, we've taken the consultancy concept one step further by offering a full-service management organization with expertise."
                    : point === 2
                      ? "Aria partners with businesses to promote growth and development ideas, including environment analysis, plan execution, and evaluation."
                      : "A strong online marketing plan paired with a great product can achieve amazing results."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="propositions propositions-2">
        <div className="content">
          <div className="category-list-container">
            {[1, 2, 3].map((category) => (
              <div
                key={category}
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                <h3 style={{ 
                  color: activeCategory === category ? '#14bf98' : '#c1cace',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#14bf98'}
                onMouseLeave={(e) => e.currentTarget.style.color = activeCategory === category ? '#14bf98' : '#c1cace'}
                >
                  <span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 17 17"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M0 0h5v5h-5v-5zM6 5h5v-5h-5v5zM12 0v5h5v-5h-5zM0 11h5v-5h-5v5zM6 11h5v-5h-5v5zM12 11h5v-5h-5v5zM0 17h5v-5h-5v5zM6 17h5v-5h-5v5zM12 17h5v-5h-5v5z" />
                    </svg>
                  </span>
                  {category === 1
                    ? "Business"
                    : category === 2
                      ? "Expertise"
                      : "Quality"}
                </h3>
              </div>
            ))}
          </div>
          {getCategoryContent()}
        </div>
        <div className="img" />
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
      <div className="testimonials">
        <h3>Read Our Customer Testimonials</h3>
        <p>Our clients are our partners, and we aim to help them reach their objectives.</p>
      </div>

      <div className="testimonial-carousel">
        <button 
          className="carousel-arrow left" 
          onClick={handlePrevClick}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={30} />
        </button>
        <div className="testimonial-list-container">
          <div 
            className="testimonial-wrapper"
            ref={scrollContainerRef}
          >
            {renderVisibleTestimonials()}
          </div>
        </div>
        <button 
          className="carousel-arrow right" 
          onClick={handleNextClick}
          aria-label="Next testimonial"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Services;