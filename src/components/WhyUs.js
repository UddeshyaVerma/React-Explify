import React from "react";
import whyus from "../img/why-us.jpg";

function WhyUs() {
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container-fluid">
        <header className="section-header">
          <h3>Why choose us?</h3>
          <p>
            "Why us?" is a very vast open-ended question which can have a
            complete plethora of answers attached to it.
          </p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <div className="why-us-img">
              <img src={whyus} alt="zxccvm" style={{width:"80%",marginLeft:"60px"}} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-us-content">
              <p>
                Finding one you can count on and build a relationship with for a
                long term is a difficult task. Here are some reasons why you
                have made the best decision by choosing us :
              </p>

              <div className="features wow bounceInUp clearfix">
                <i class="material-icons" style={{ color: " #5c598b" }}>
                  short_text
                </i>
                <h4>OUR APPROACH:</h4>
                <p>
                  To us, it's not just work - we take pride in the solutions we
                  deliver. We encourage everyone to achieve excellence in all
                  endeavours.Setting a clear goal – it's where every great
                  network starts. And that's where we start too. 
                </p>
              </div>

              <div className="features wow bounceInUp clearfix">
                <i class="material-icons" style={{ color: " #5c598b" }}>
                  short_text
                </i>
                <h4>OUR AIM & OBJECTIVE:</h4>
                <p>
                  Our main focus is to provide a platform for people who really
                  want to exhibit their skills and talent. We're here to enhance
                  your expertise and make you industry ready.
                </p>
              </div>

              <div className="features wow bounceInUp clearfix">
                <i class="material-icons" style={{ color: " #5c598b" }}>
                  short_text
                </i>
                <h4>OUR POLICIES:</h4>
                <p>
                  We’ve designed a set of policies that ensure about sticking to
                  our promise and give 24 hours support.<br/>
                   -Equal Opportunity:
                    It is the policy and practice of Explify to comply with all
                  applicable fair employment and give everyone fair and equal
                  opportunity to show their work. <br/>
                  -Privacy Policy:
                  "Confidentiality is a virtue of the loyal, as loyalty is the
                  virtue of faithfulness. We make sure that there is no user
                  privacy voilation. <br/>-Site terms & conditions: By accessing this
                  site, you acknowledge and agree to all of our terms,
                  conditions and privacy policies, and otherwise contained on or
                  referenced in this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
