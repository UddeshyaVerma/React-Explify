import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
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
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
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
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
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
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
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

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
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
