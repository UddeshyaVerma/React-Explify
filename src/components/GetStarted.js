import React from 'react'
import {Link} from 'react-router-dom'


function GetStarted() {
    return (
        <div className="GBanner-intro GBanner ">
        <h1 className="Glogo">Explify Logo</h1>
        <div className="GContainer">
            <div className="CardBox hoverImages">
                <h2>Student</h2>
                <img src="stu.png" className="org" alt=""/>
                <p>
                    Get yourself hired from Organizations in your own field of expertise.
                </p>
                <Link to="/signin">Get
                    Hired</Link>
            </div>
            <div className="CardBox hoverImages">
                <h2>Organizations</h2>
                <img src="org.png" className="org" alt=""/>
                <p>
                    Hire students according to your own need and get in touch with skilled students.
                </p>
                <Link to="/signup">Start Hiring</Link>
            </div>
        </div>
        <div className="Gfooter">
            <p>© Copyright Explify. All Rights Reserved</p>
        </div>
    </div>
    )
}

export default GetStarted
