import React from 'react'
import signin from '../img/signin-image.jpg'
import '../components/Signup.css'
import {Link} from 'react-router-dom'
import {FaEnvelope,FaLock} from 'react-icons/fa';
function SignIn() {
    return (
        <section className="signup">
        <div className="containerSign">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign In</h2>
                    <form method="POST" className="register-form" id="register-form">
                        
                        <div className="form-group">
                            <label for="email"><FaEnvelope className="zmdi zmdi-email" /></label>
                            <input type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label for="pass"><FaLock className="zmdi zmdi-lock" /></label>
                            <input type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                       
                       
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Log In"/>
                            <Link to="/signup" className="signup-image-link" style={{color:"#A9A9A9"}}>Don't Have an account</Link>
                        </div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure><img src={signin} alt="sign image" className="responsive"/></figure>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SignIn
