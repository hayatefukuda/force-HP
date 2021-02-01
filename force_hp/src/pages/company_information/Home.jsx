import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Company_home from "../../images/force/company-home.png"
import Greeting from "../../images/force/icon-greeting.png"

import "./Home.scss"

const Home = () => {

    return (
        <Layout>
            <div>
                <div className="heading">
                    <img src={ Company_home } className="img-fluid" alt=""/>
                    <p>企業情報</p>
                </div>
                <div className="container">
                    <p className="mt-5 font-weight-bold">企業情報を表示します。</p>
                </div>
                <div className="d-flex justify-content-center button">
                    <div className="greetings">
                        <Link to="/company_information/Greeting" className="text-reset">
                            ごあいさつ
                            <img src={ Greeting } />
                        </Link>
                    </div>
                    <div className="business_content">
                        <Link to="/company_information/BusinessContent" className="ml-5 text-reset">事業内容</Link>
                    </div>
                    <div className="company_profile">
                        <Link to="/company_information/CompanyProfile" className="ml-5 text-reset">会社概要</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home