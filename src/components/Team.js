import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import uddeshya1 from '../../src/img/uddeshya1.jfif' 
import talat from '../../src/img/talat.jfif' 
import sarthak from '../../src/img/sarthak.jfif' 
function Team() {
  return (
    <section id="team" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>Team</h3>
          <p>
            "Teamwork is the ability to work together toward a common vision.
            The ability to direct individual accomplishments toward
            organizational objectives. It is the fuel that allows common people
            to attain uncommon results."
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="member">
              <img
                src={uddeshya1}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Uddeshya Verma</h4>
                  <span>FOUNDER</span>
                  <div className="social">
                    <a href="" style={{ padding: "10px" }}>
                      <FaFacebookF />
                    </a>
                    <a href="" style={{ padding: "10px" }}>
                      <FaGithub />
                    </a>

                    <a href="" style={{ padding: "10px" }}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="member">
              <img
                src={sarthak}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarthak Dixit</h4>
                  <span>Chief executive Officer</span>
                  <div className="social">
                    <a href="" style={{ padding: "10px" }}>
                      <FaFacebookF />
                    </a>
                    <a href="" style={{ padding: "10px" }}>
                      <FaGithub />
                    </a>

                    <a href="" style={{ padding: "10px" }}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="member">
              <img
                src={talat}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Talat Misbah</h4>
                  <span>Co-Founder</span>
                  <div className="social">
                    <a href="" style={{ padding: "10px" }}>
                      <FaFacebookF />
                    </a>
                    <a href="" style={{ padding: "10px" }}>
                      <FaGithub />
                    </a>

                    <a href="" style={{ padding: "10px" }}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
            
        </div>
      </div>
    </section>
  );
}

export default Team;
