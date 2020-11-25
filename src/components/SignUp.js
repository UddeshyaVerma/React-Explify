import React, { useState, useEffect } from "react";
import "../components/Signup.css";
import signup from "../img/signup-image.jpg";
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaEnvelope, FaLock, FaUnlock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [profession, setprofession] = useState("");
  const history = useHistory();
  const [image, setImage] = useState("");
  const [url, seturl] = useState("");
  useEffect(() => {
    if (url) {
      console.log(image, url);
      fetch("/addphoto", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            return toast.error(data.error);
          }
          history.push("/");
          console.log("success");
          toast.success("uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const PostImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "instagram-clone111");

    
    fetch("https://api.cloudinary.com/v1_1/instagram-clone111/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        seturl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postData = (e) => {
    e.preventDefault()
    console.log(name,email,password,profession,url)
    
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
        profession,
        url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);

          toast.info(data.msg);
        }
      });
  };
  return (
    <section class="signup">
      <div class="containerSign">
        <ToastContainer />
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">Sign up</h2>
            <form class="register-form" id="register-form">
              <div class="form-group">
                <label for="name">
                  <FaUserAlt class="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="email">
                  <FaEnvelope class="zmdi zmdi-email" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="profession">
                  <FaEnvelope class="zmdi zmdi-email" />
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Your Profession"
                  value={profession}
                  onChange={(e) => setprofession(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="pass">
                  <FaLock class="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <div>
                  <label class="custom-file-label" for="inputGroupFile03">
                    Choose your photo
                  </label>
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile02"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" />
                </div>

                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="inputGroupFileAddon03"
                  onClick={(e) => PostImage(e)}
                >
                  Upload
                </button>
              </div>

              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                  onClick={(e) => postData(e)}
                />
                <Link
                  to="/signin"
                  className="signup-image-link"
                  style={{ color: "#A9A9A9" }}
                >
                  I am already member
                </Link>
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure>
              <img src={signup} alt="sing up image" className="responsive" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
