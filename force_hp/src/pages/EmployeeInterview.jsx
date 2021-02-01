import React from "react"
import Interview from "../images/force/interview.png"
import Person from "../images/force/interview-person.png"

const EmployeeInterview = () => {

    return (
        <div id="interview">
            <div className="title">
                <img src={ Interview } className="img-fluid" alt=""/>
                <p>社員インタビュー</p>
            </div>
            <div className="interview text-white">
                <img src={ Person } className="img-fluid" alt=""/>
                <p>職種　名　　　　　前</p>
            </div>
            <div className="interview2 text-white">
                <img src={ Person } className="img-fluid" alt=""/>
                <p>職種　名　　　　　前</p>
            </div>
            <div className="interview3 text-white">
                <img src={ Person } className="img-fluid" alt=""/>
                <p>職種　名　　　　　前</p>
            </div>
        </div>
    )
}

export default EmployeeInterview;