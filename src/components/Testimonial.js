import React from "react";
import { Carousel } from "react-bootstrap";
import arish from "../img/arish.jfif";
import harshit from "../img/harshit.jfif";

function Testimonial() {
  return (
    <section id="testimonials">
      <div className="container">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel testimonials-carousel wow fadeInUp">
              <Carousel
                nextIcon={
                  <span
                    aria-hidden="true"
                    className="carousel-control-next-icon"
                  />
                }
                prevIcon={
                  <span
                    aria-hidden="true"
                    className="carousel-control-prev-icon"
                  />
                }
              >
                <Carousel.Item style={{padding:"60px",paddingBottom:"0px",paddingTop:"0px"}}>
                  <div className="testimonial-item">
                    <img src={arish} className="testimonial-img" alt="" />
                    <h3>Arish Faiz</h3>
                    <h4>UI/UX Designer</h4>
                    <p>
                      I'm really happy with your determination to finish this
                      project. I know it wasn't easy, but I knew you could do
                      it.
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{padding:"60px",paddingBottom:"0px",paddingTop:"0px"}}>
                  <div className="testimonial-item">
                    <img src={harshit} className="testimonial-img" alt="" />
                    <h3>Harshit Saxena</h3>
                    <h4>Architect</h4>
                    <p>
                      I really think you have a superpower around making new
                      hires feel welcome. One of the things I admire about you
                      is your ability to manage a team remotely.
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
