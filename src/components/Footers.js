import React from 'react'
import {FaLinkedinIn,FaFacebookF,FaGithub,FaTwitter} from "react-icons/fa"
function Footers() {
    return (
    <footer id="footer" className="section-bg">
    <div className="footer-top">
      <div className="container">

        <div className="row">

          <div className="col-lg-6">

            <div className="row">

                <div className="col-sm-6">

                  <div className="footer-info">
                    <h3>Explify</h3>
        
                  </div>

            </div>

                <div className="col-sm-6">
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Terms of service</a></li>
                      <li><a href="#">Privacy policy</a></li>
                    </ul>
                  </div>

                  <div className="footer-links">
                    <h4>Contact Us</h4>
                    <p>
                      GLA <br/>
                      University   <br/>
                      Mathura<br/>
                      <strong>Phone:</strong> +1 5589 55488 55<br/>
                      <strong>Email:</strong> info@example.com<br/>
                    </p>
                  </div>

                  <div className="social-links">
                    <a href="#" className="twitter"><FaTwitter/></a>
                    <a href="#" className="facebook"><FaFacebookF/></a>
                    <a href="#" className="instagram"><FaGithub/></a>
                    <a href="#" className="linkedin"><FaLinkedinIn/></a>
                  </div>

                </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="form">
              
              <h4>Send us a message</h4>
              
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validation"></div>
                </div>

                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage">

                </div>

                <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>

          </div>

          

        </div>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Explify</strong>. All Rights Reserved
      </div>
      
    </div>
  </footer>
    )
}

export default Footers
