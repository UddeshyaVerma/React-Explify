import React from "react";
import about from "../img/about-img.png";

function AboutUs() {
  return (
    <section id="about">
          <h2 style={{textAlign:"center",marginBottom:"15px"}}>About Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src={about} alt="aboutu" />
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              
              <h3>
                Welcome to EXPLIFY, a gateway to amplify your expertise in an
                effective way!
              </h3>
              <p>
                Here is a social network that renders valuable resources and
                support to organizations/clubs in and outside your college
                premises.
              </p>
              <p>
                It is an ideal platform for students who are ready to connect to
                the outside world where they can be hired by people of upper
                heirarchy, thus making them industry- ready. The site is a
                perfect aid to create alliances with people interested in your
                field instead of 'Letting your skills be wasted since you
                couldn't find someone who could guide or hire you!' EXPLIFY
                gears in finding freelance work, potential partners, base for
                industrial work and even a means to keep your career prospects
                open while you are studying in college!
              </p>
              <ul>
                <li>
                  <i className="material-icons" style={{ color: " #5c598b" }}>
                    trending_flat
                  </i>{" "}
                  Vision : Create a well known platform for every skilled
                  college student.
                </li>
                <li>
                  <i className="material-icons" style={{ color: " #5c598b" }}>
                    trending_flat
                  </i>{" "}
                  Mission: Provide a golden opportunity to students to nurture
                  their expertise in a productive way.
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
