import React,{useState,useContext} from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link} from "react-scroll";
import {Link as Links,useHistory} from 'react-router-dom';
import { usercontext } from "../App";


function NavBars() {
  const [expanded, setExpanded] = useState(false);
  const { state, dispatch } = useContext(usercontext);
  const history=useHistory();
  const RenderList = () => {
    if (state) {
      return [
        <Nav className="ml-auto " >
        <li>
          <Link style={styles} to="/Profile">Profile</Link>
        </li>,
        <li>
          <Link style={styles} to="/CreatePost">Update</Link>
        </li>,
         <button
        
         onClick={() => {
           localStorage.clear()
           dispatch({type:"CLEAR"})
           history.push('/signin')
         }}
       >
         Log Out
       </button>
       </Nav>
      ];
    }else{
      return[ 
      <Nav className="ml-auto " >
            
      <Link
        to="about"
        activeClass="active"
        style={styles}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => setExpanded(false)}
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
        onClick={() => setExpanded(false)}
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
        onClick={() => setExpanded(false)}
      >
        Team
      </Link>
      
      
      <Link
        to=""
        activeClass="active"
        style={styles}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => setExpanded(false)}
      >
        <Links to='/signin'>
        Signin
        </Links>
      </Link>
      <Link
        to="footer"
        style={styles}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => setExpanded(false)}
      >
        ContactUs
      </Link>
    </Nav>
    ]

    }
    };
  return (
    <div className="container">
      <Navbar bg="light" expand="lg" fixed="top" expanded={expanded} >
        <div className="logo float-left">
          <h1 className="text-light">
            <Links to='/'>
              <span>Explify</span>
              </Links>
          </h1>
          <a href="#header" className="scrollto"></a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
         {RenderList()}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const styles={
  padding:'10px 20px',
  
}


export default NavBars;
