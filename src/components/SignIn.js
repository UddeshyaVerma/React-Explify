import React,{ useState, useContext } from 'react'
import signin from '../img/signin-image.jpg'
import '../components/Signup.css'
import {Link,useHistory} from 'react-router-dom'
import { usercontext } from "../App";
import {FaEnvelope,FaLock} from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignIn() {
    const { state, dispatch } = useContext(usercontext);
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const PostData = (e) => {
      e.preventDefault();
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          return toast.error(data.error);
          
        } else {
          toast.success("logged In");

          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          dispatch({ type: "USER", payload: data.user });
          history.push("/dashboard");
        }
    });
  }
     return (
        <section className="signup">
        <div className="containerSign">
            <ToastContainer/>
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign In</h2>
                    <form  className="register-form" id="register-form">
                        
                        <div className="form-group">
                            <label for="email"><FaEnvelope className="zmdi zmdi-email" /></label>
                            <input type="email" name="email" id="email" placeholder="Your Email" value={email}
          onChange={(e) => setemail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label for="pass"><FaLock className="zmdi zmdi-lock" /></label>
                            <input type="password" name="pass" id="pass" placeholder="Password" value={password}
          onChange={(e) => setpassword(e.target.value)}/>
                        </div>
                       
                       
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Log In" onClick={(e) => PostData(e)}/>
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

export default SignIn;
