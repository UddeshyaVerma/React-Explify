import React from "react";
import "./App.css";
import NavBars from "./components/NavBars";
import IntroSection from "./components/IntroSection";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footers from "./components/Footers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import StudentList from "./components/StudentList";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
const Homepage = () => {
  return (
    <div className="App">
      <IntroSection />
      <main id="main">
        <AboutUs />
        <WhyUs />
        <Features />
        <Testimonial />
        <Team />
        <Footers />
      </main>
    </div>
  );
};
function App() {
  return (
    <Router>
      <NavBars />
      <Switch>
      <Route exact path="/React-Explify"><Homepage /></Route>
        <Route exact path="/dashboard"><AdminDashboard/></Route>
        <Route exact path="/dashboard/students"><StudentList/></Route>
        <Route exact path="/signup"><SignUp/></Route>
        <Route exact path="/signin"><SignIn/></Route>
      
      </Switch>
    </Router>
  );
}

export default App;
