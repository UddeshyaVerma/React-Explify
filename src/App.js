import React from "react";
import "./App.css";
import NavBars from "./components/NavBars";
import IntroSection from "./components/IntroSection";
import AboutUs from "./components/AboutUs";
import 'bootstrap/dist/css/bootstrap.min.css'
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footers from "./components/Footers";

function App() {
  return (
    <div className="App" >
        <NavBars/>
        
       <IntroSection/> 
       <main id="main">
        <AboutUs/>
        <WhyUs/>
        <Features/>
        <Testimonial/>
        <Team/>
        <Footers/>

       </main>
    </div>
  );
}

export default App;
