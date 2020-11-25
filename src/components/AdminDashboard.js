import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NavBars from "./NavBars";
import { usercontext } from "../App";
import { FaStar, FaAngleRight } from "react-icons/fa";

function AdminDashboard() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(usercontext);
  useEffect(() => {
    fetch("/alltask", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      });
  };
  const unlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      });
  };

  return (
    <>
      <NavBars />

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h1 className="bestStudent" style={{ color: "#1bb1dc" }}>
                  Students
                </h1>
                
              </div>
            </div>
            {data &&
              data.map((item) => {
                return (
                  <div className="col-md-4">
                    <div className="product-item ">
                      <a href="#">
                        <img src={item.photo} className="ratio-4-3" alt="" />
                      </a>
                      <div className="down-content">
                        <h3 className="StudentH">{item.name}</h3>
                        <p className="StudentP">{item.profession}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <footer id="footer" className="section-bg">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Explify</strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default AdminDashboard;
