import React from 'react'
import feature1 from '../img/features-1.svg'
import feature2 from '../img/features-2.svg'
function Features() {
    return (
        <section id="features">
      <div className="container">

        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
            <img src={feature1} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>EXPLIFY offers a Basic account for anyone who wants to create and maintain a professional profile online.</h4>
            <p>
            Using the basic account, you can maintain a trusted professional network, find and reconnect with your peers, build a work oriented identity and obtain recommendations from upper heirarchy.
            </p>
            
          </div>
        </div>

        <div className="row feature-item mt-5 pt-5">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={feature2} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Blogging Interface</h4>
            <p>
            Drafting creative content and publishing it on your web account is the most influencing way to create a powerful presence of your brand.
            </p>
            <p>
            Earlier, brands used LinkedIn for sharing their posts and other content. But now, the easy-to-use LinkedIn editor allows users to create a blog post and articles on its interface.
            </p>
            
          </div>
          
        </div>

      </div>
    </section>
    
    )
}

export default Features;
