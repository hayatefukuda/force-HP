import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Company_home from "../../images/force/company-home_fullsize.jpg"
import icon1 from "../../images/force/icon-greeting.png"
import icon2 from "../../images/force/icon-business.png"
import icon3 from "../../images/force/icon-company.png"

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
                    <p className="mt-5 font-weight-bold h4">企業情報を表示します。</p>
                </div>
                {/* <div className="d-flex justify-content-center button">
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
                </div> */}

                <div className="row justify-content-center">
                    <Link className="company-button btn-danger" href="#services"
                    to="/company_information/Greeting"><p>ごあいさつ</p><img src={icon1} alt="" height={80}/></Link>
                    <Link className="company-button btn-danger" href="#services"
                    to="/company_information/BusinessContent"><p>事業内容</p><img src={icon2} alt="事業内容" height={80}/></Link>
                    <Link className="company-button btn-danger" href="#services"
                    to="/company_information/CompanyProfile"><p>企業概要</p><img src={icon3} alt="企業概要" height={80}/></Link>
                </div>
                <br />
            </div>
        </Layout>
    )
}

export default Home