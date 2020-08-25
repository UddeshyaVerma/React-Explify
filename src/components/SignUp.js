import React from 'react'
import '../components/Signup.css'
import signup from '../img/signup-image.jpg'
import {Link} from 'react-router-dom'
import {FaUserAlt,FaEnvelope,FaLock,FaUnlock} from 'react-icons/fa';

function SignUp() {
    return (
        <section class="signup">
        <div class="containerSign">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Sign up</h2>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><FaUserAlt class="zmdi zmdi-account material-icons-name"/></label>
                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                        </div>
                        <div class="form-group">
                            <label for="email"><FaEnvelope class="zmdi zmdi-email"/></label>
                            <input type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><FaLock class="zmdi zmdi-lock"/></label>
                            <input type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><FaUnlock class="zmdi zmdi-lock-outline"/></label>
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                            <Link to="/signin" className="signup-image-link" style={{color:"#A9A9A9"}} >I am already member</Link>
                        </div>
                       
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src={signup} alt="sing up image" className="responsive"/></figure>
                   
                </div>
            </div>
        </div>
    </section>

    )
}

export default SignUp
