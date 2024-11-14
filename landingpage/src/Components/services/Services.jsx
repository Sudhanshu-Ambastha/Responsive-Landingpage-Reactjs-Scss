import React, { useState, useEffect, useRef } from 'react';
import './services.scss';
import { Grid3X3, RectangleHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialsData from './testimonials.json';

const Services = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePoint, setActivePoint] = useState(1);
  const scrollContainerRef = useRef(null);
  
  const handlePointClick = (point) => {
    setActivePoint(point);
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
        {/* Service Item 1 */}
        <div className="service-item_1">
          <div className="CC" />
          <h4>Off The Ground</h4>
          <p>
            Perfect for fresh ideas or young startups, this package will help get your business off the ground.
          </p>
          <ul>
            <li><span>🟩</span> Environment and competition</li>
            <li><span>🟩</span> Design the marketing plan</li>
          </ul>
          <h6>Starting at <span className="price">$199</span></h6>
          <button>Details</button>
        </div>

        {/* Service Item 2 */}
        <div className="service-item_2">
          <div className="Book" />
          <h4>Accelerated Growth</h4>
          <p>
            Use this service pack to give your company the necessary impulse to become an industry leader.
          </p>
          <ul>
            <li><span>🟩</span> Business strategy planning</li>
            <li><span>🟩</span> Taking the planned actions</li>
          </ul>
          <h6>Starting at <span className="price">$299</span></h6>
          <button>Details</button>
        </div>

        {/* Service Item 3 */}
        <div className="service-item_3">
          <div className="Laptop" />
          <h4>Market Domination</h4>
          <p>
            You already are a reference point in your industry; now you need to learn about acquisitions.
          </p>
          <ul>
            <li><span>🟩</span> Maintaining the leader status</li>
            <li><span>🟩</span> Acquisitions the right way</li>
          </ul>
          <h6>Starting at <span className="price">$399</span></h6>
          <button>Details</button>
        </div>
      </div>

      {/* Propositions Section */}
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
            <div className="category-item active">
              <h3><span><Grid3X3/></span> Business</h3>
            </div>
            <div className="category-item">
              <h3><span><Grid3X3 /></span> Expertise</h3>
            </div>
            <div className="category-item">
              <h3><span><Grid3X3 /></span> Quality</h3>
            </div>
          </div>
          <h3>Business Services For Companies</h3>
          <p>
            Aria provides innovative and customized business services. Our <span href="#">Services</span> section showcases our flexibility for all budgets.
          </p>
          <div className="skill-list-container">
            <div className="skill-item">
              <h6>Business Development 100%</h6>
              <div className="progress-bar-p-100"><RectangleHorizontal color="#14bf98" /></div>
            </div>
            <div className="skill-item">
              <h6>Opportunity Spotting 76%</h6>
              <div className="progress-bar-p-76"><RectangleHorizontal color="#14bf98" /></div>
            </div>
            <div className="skill-item">
              <h6>Online Marketing 90%</h6>
              <div className="progress-bar-p-90"><RectangleHorizontal color="#14bf98" /></div>
            </div>
          </div>
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
