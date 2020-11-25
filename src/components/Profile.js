import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="img-responsive img-circle tm-border imgwidth"
                alt="templatemo easy profile"
              />
              <hr />
              <h1 className="tm-title bold">Hi, I am Talat</h1>
              <h1 className=" bold ">Designer</h1>
              <div>
                <ul className="social-icons">
                  <li>
                    <Link>
                      <FaInstagram style={{ width: "30px", height: "30px" }} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaGithub style={{ width: "30px", height: "30px" }} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaLinkedinIn style={{ width: "30px", height: "30px" }} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about">
              <h3 className="accent">Description</h3>
              <h2>Life of a Graphic Designer</h2>
              <p>
                being the graphic designer always make me more focus and involving with colors made me feel like my life is filled with joy <a href="index-green.html">Green</a>,{" "}
                <a href="index.html">Blue</a>,{" "}
                <a href="index-gray.html">Gray</a>, and{" "}
                <a href="index-orange.html">Orange</a>. i can make limitless flex posters etc just to play with colors
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="skills">
              <h2 className="white">Skills</h2>
              <ul>
                <li>
                  <strong>PHP MySQL</strong>
                </li>
                <li>
                  <strong>UI/UX Design</strong>
                </li>
                <li>
                  <strong>BootstrapL</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="education">
              <h2 className="white">Education</h2>
              <div className="education-content">
                <h4 className="education-title accent">New Web Design</h4>
                <div className="education-school">
                  <h5>School of Media</h5>
                  <span></span>
                  <h5>2030 January - 2034 December</h5>
                </div>
                <p className="education-description">
                  In lacinia leo sed quam feugiat, ac efficitur dui tristique.
                  Ut venenatis, odio quis cursus egestas, nulla sem volutpat
                  diam, ac dapibus nisl ipsum ut ipsum. Nunc tincidunt libero
                  non magna placerat elementum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="languages">
              <h2>Projects</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="contact">
              <h2>Contact</h2>
              <p>
                <i className="fa fa-map-marker"></i> 123 Rama IX Road, Bangkok
              </p>
              <p>
                <i className="fa fa-phone"></i> 010-020-0890
              </p>
              <p>
                <i className="fa fa-envelope"></i> easy@company.com
              </p>
              <p>
                <i className="fa fa-globe"></i> www.company.com
              </p>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="experience">
              <h2 className="white">Experiences</h2>
              <div className="experience-content">
                <h4 className="experience-title accent">Website Development</h4>
                <h5>New Media Company</h5>
                <span></span>
                <h5>2035 January - 2036 April</h5>
                <p className="education-description">
                  Cras porta tincidunt sem, in sollicitudin lorem efficitur ut.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
