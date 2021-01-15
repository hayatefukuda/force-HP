import React from "react"
import Company_home from "../../images/force/company-home.png"
import Greeting from "../../images/force/icon-greeting.png"

import "./Home.scss"

const Home = () => {

    return (
        <div>
            <div className="heading">
                <img src={ Company_home } className="img-fluid" alt=""/>
                <p>企業情報</p>
            </div>
            <div className="contents">
                <p>企業情報を表示します</p>
            </div>
            <div className="button">
                <div className="greetings">
                    <a href="#" className="text-reset">
                        ごあいさつ
                        {/* <img src={ Greeting } /> */}
                    </a>
                </div>
                <div className="business_content">
                    <a href="#" className="text-reset">事業内容</a>
                </div>
                <div className="company_profile">
                    <a href="#" className="text-reset">会社概要</a>
                </div>
            </div>
        </div>
    )
}

export default Home