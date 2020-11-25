import React from "react";

function UpdateProfile() {
  return (
<>
    <header>
            <label for="check">
                <i className="fas fa-bars" id="sidebar_btn"></i>
            </label>
            <div className="left_area">
                <h3>EX<span>PLIFY</span></h3>
            </div>
            <div className="right_area">
                <a href="#" className="logout_btn">Logout</a>
            </div>
    </header>


<div className="mobile_nav">
    <div className="nav_bar">
        <img src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg" className="mobile_profile_image" alt=""/>
        <i className="fa fa-bars nav_btn"></i>
    </div>
    <div className="mobile_nav_items">

        <a href="./accountSettings.html"><i className="fas fa-desktop"></i><span>Account Settings</span></a>
        <a href="#"><i className="fas fa-cogs"></i><span>Personal Settings</span></a>
        <a href="./profile.html"><i className="fas fa-table"></i><span>Profile Picture</span></a>
         <a href="#"><i className="fas fa-th"></i><span>Forms</span></a>
        <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a>
        <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>

    </div>
</div>

<div className="sidebar">
    <div className="profile_info">
        <img src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg" className="profile_image" alt=""/>
        <h4>Mohit Tiwari</h4>
    </div>

    <a href="./accountSettings.html"><i className="fas fa-desktop"></i><span>Account Settings</span></a>
    <a href="#"><i className="fas fa-cogs"></i><span>Personal Settings</span></a>
    <a href="./profile.html"><i className="fas fa-table"></i><span>Profile Picture</span></a>
  <a href="#"><i className="fas fa-th"></i><span>Forms</span></a>
    <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a>
    <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a> 
</div>

<div className="content">   
    <div className="card">
        <div className="container">
            <form > 
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="fname"><b>First Name:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="First Name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="lname"><b>Last Name:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="country"><b>Headline:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="headline" name="lastname" placeholder="Headline"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="subject"><b>Bio:</b></label>
                    </div>
                    <div className="col-75">
                        <textarea className="textarea" id="subject" name="subject" placeholder="Write something.."
                            style={{height:"100px"}}></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <hr/>
    <div className="card" style={{marginTop:"20px"}}>
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="Git">GitHub:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="Git" name="Git" placeholder="Profile Link"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="link"><b>LinkedIn:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="link" name="link" placeholder="Profile Link"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="la" for="insta"><b>Instagram:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="insta" name="insta" placeholder="Profile Link"/>
                    </div>
                </div>

            </form>
        </div>
    </div>
    <hr/>
    <button type="submit" className="registerbtn">Save</button>

</div>
</>
  )
}

export default UpdateProfile;
