import React from "react";
import {Link} from 'react-router-dom'
import NavBars from './NavBars'
import {FaStar,FaAngleRight} from 'react-icons/fa'

function AdminDashboard() {
  return (
    <>  
    <NavBars/>
   
    <div className="latest-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h1 className='bestStudent' style={{color:"#1bb1dc"}}>Best Students</h1>
              <Link to="/dashboard/students" style={{marginTop:"5px"}}>view all students <FaAngleRight/></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
            <a href="#"><img src="https://images.unsplash.com/photo-1598354945761-94c42ee0522f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" className="ratio-4-3" alt=""/></a>
              <div className="down-content">
                <a href="#"><h4>Graphic Designer</h4></a>
                <h6>Talat Misbah</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul >
                  <li><FaStar className="stars"/></li>
                  <li><FaStar className="stars"/></li>
                  <li><FaStar className="stars"/></li>
                  <li><FaStar className="stars"/></li>
                  <li><FaStar className="stars"/></li>
                </ul>
                <span>Reviews (24)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="#"><img className="ratio-4-3" src="https://images.unsplash.com/photo-1520345357567-f9b47af4c6ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/></a>
              <div className="down-content">
                <a href="#"><h4>Tittle goes here</h4></a>
                <h6>$30.25</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                </ul>
                <span>Reviews (21)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="#"><img className="ratio-4-3" src="https://images.unsplash.com/photo-1520345357567-f9b47af4c6ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/></a>
              <div className="down-content">
                <a href="#"><h4>Tittle goes here</h4></a>
                <h6>$20.45</h6>
                <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>
                <ul className="stars">
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                </ul>
                <span>Reviews (36)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="#"><img className="ratio-4-3" src="https://images.unsplash.com/photo-1520345357567-f9b47af4c6ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/></a>
              <div className="down-content">
                <a href="#"><h4>Tittle goes here</h4></a>
                <h6>$15.25</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                </ul>
                <span>Reviews (48)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="#"><img className="ratio-4-3" src="https://images.unsplash.com/photo-1520345357567-f9b47af4c6ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/></a>
              <div className="down-content">
                <a href="#"><h4>Tittle goes here</h4></a>
                <h6>$12.50</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                </ul>
                <span>Reviews (16)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="#"><img className="ratio-4-3" src="https://images.unsplash.com/photo-1520345357567-f9b47af4c6ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/></a>
              <div className="down-content">
                <a href="#"><h4>Tittle goes here</h4></a>
                <h6>$22.50</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                  <li><FaStar/></li>
                </ul>
                <span>Reviews (32)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
      
       
       

    </>
  )
}

export default AdminDashboard;
