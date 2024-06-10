import React, { useState, useEffect } from 'react';
import './home.scss';

const Home = () => {
  const [index, setIndex] = useState(0);
  const phrases = ["TEMPLATE", "SERVICES", "SOLUTIONS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lp__header section__padding" id="home">
      <div className="bg">
        <h1>BUSINESS <span>{phrases[index]}</span></h1>
        <p>
          Aria is a top consultancy specializing in business growth using online marketing and 
          conversion optimization tactics
        </p>
        <button>Discover</button>
      </div>
    </div>
  );
};

export default Home;
