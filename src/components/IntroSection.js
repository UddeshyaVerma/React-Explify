import React from "react";
import bg from '../img/bg.png'
import {Link} from 'react-router-dom'
function IntroSection() {
  return (
    <section id="intro" className="clearfix">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 intro-info order-md-first order-last">
            
              <h2>
              <span>Let's</span><br/>
              <span>Amplify.Expertise</span>
            </h2>
            <div>
              <Link to="/GetStarted" className="btn-get-started scrollto" >
                Get Started
              </Link>
            </div>
          </div>

          <div
            className="col-md-6 intro-img order-md-last order-first"
            style={{width: "100%"}}
          >
            <img src={bg} alt="backgroundImage" style={{marginTop:"25px"}} className="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
