import React from "react";
import "./App.scss";
import { Navbar, Home, Intro, Services, Calls, Project, About, Contact, Footer } from './Components';

const App = () => (
  <div className="App">
    <Navbar />
    
    <section id="home">
      <Home />
    </section>
    
    <section id="intro">
      <Intro />
    </section>
    
    <section id="services">
      <Services />
    </section>
    
    <section id="calls">
      <Calls /> 
    </section>
    
    <section id="project">
      <Project />
    </section>

    <section id="about">
      <About />
    </section>
    
    <section id="contact">
      <Contact />
    </section>

    <Footer />
  </div>
);

export default App;

