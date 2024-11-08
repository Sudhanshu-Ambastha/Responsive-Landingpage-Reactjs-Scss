import React from "react";
import "./App.scss";
import { Navbar, Home, Intro, Services, Calls, Project, Contact,Footer} from './Components';

const App = () => (
  <div className="App">
    
      <Navbar />
      <Home />

    <Intro />
    <Services />
    <Calls /> 
    <Project />
    <Contact />
    <Footer />
  </div>
);

export default App;
