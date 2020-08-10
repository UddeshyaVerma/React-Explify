import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link} from "react-scroll";
function NavBars() {
  return (
    <div class="container">
      <Navbar bg="light" expand="lg" fixed="top">
        <div class="logo float-left">
          <h1 class="text-light">
            <a href="#intro" class="scrollto">
              <span>Explify</span>
            </a>
          </h1>
          <a href="#header" class="scrollto"></a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto " >
            <Link
              to="about"
              activeClass="active"
              style={styles}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              AboutUs
            </Link>
            <Link
              to="why-us"
              activeClass="active"
              style={styles}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Why Us
            </Link>
            <Link
              to="team"
              activeClass="active"
              style={styles}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Team
            </Link>
            <Link
              to="#link"
              activeClass="active"
              style={styles}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SignUp
            </Link>
            <Link
              to="#link"
              activeClass="active"
              style={styles}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SignIn
            </Link>
            <Link
              to="footer"
              style={styles}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ContactUs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
const styles={
  padding:'10px 20px',
  
}


export default NavBars;
