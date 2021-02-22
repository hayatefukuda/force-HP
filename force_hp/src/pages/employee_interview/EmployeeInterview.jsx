import React from "react"
import Layout from "../../components/layout"
import Interview from "../../images/force/interbiew_fullsize.jpg"
import Person from "../../images/force/interview-person.png"

const EmployeeInterview = () => {

    return (
        <Layout>
            <div id="interview">
                <div className="heading">
                    <img src={ Interview } className="img-fluid" alt=""/>
                    <p>社員インタビュー</p>
                </div>
                    <div className="interview text-white">
                        <img src={ Person } className="img-fluid" alt=""/>
                        <p>職種　名　　　　前</p>
                    </div>
                <div className="rightside">
                    <div className="interview2 text-white">
                        <img src={ Person } className="img-fluid" alt=""/>
                        <p>職種　<span>名　　　　前</span></p>
                    </div>
                </div>
                <div className="interview3 text-white">
                    <img src={ Person } className="img-fluid" alt=""/>
                    <p>職種　名　　　　前</p>
                </div>
                <br />
            </div>
        </Layout>
    )
}

export default EmployeeInterview;