import React from "react";
import { Carousel } from "react-bootstrap";
import { testimonial1 } from "../img/testimonial-1.jpg";

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
              <Carousel>
                <Carousel.Item>
              <div className="testimonial-item">
                <img src="https://github.com/Yash728/explify_miniproject/blob/master/img/testimonial-1.jpg?raw=true" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="testimonial-item">
                <img src="https://github.com/Yash728/explify_miniproject/blob/master/img/testimonial-1.jpg?raw=true" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
              </div>
              </Carousel.Item>
              </Carousel>

            </div>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Testimonial;
