import { Link } from "gatsby";
import React from "react"
import logo from "../images/force/logo-white.png"

const Footer = () => {

    return(
        <footer className="footer-bg">
          <div className="footer-display1">  
          <div className="footer-display2">         
            <Link to="/company_information/Home" className="footer1">企業情報</Link>
            <Link to="/company_information/Greeting" className="footer2">ごあいさつ</Link>
            <Link to="/company_information/BusinessContent" className="footer2">事業内容</Link>
            <Link to="/company_information/CompanyProfile" className="footer2">会社概要</Link>
          </div> 
          <div className="footer-display2">
            <Link to="/recruitment/recruit" className="footer1">採用情報</Link>
            <Link to="/recruitment/newGraduate" className="footer2">新卒採用</Link>
            <Link to="/recruitment/midCareer" className="footer2">中途採用</Link>
          </div>
          <div className="footer-display2">
            <Link to="/access/access" className="footer3">アクセス</Link>
            <a href="#page-top" className="footer3">お問い合わせ</a>
            <Link to="/contact/PrivacyPolicy" className="footer3">プライバシーポリシー</Link>
            <a href="#page-top" className="footer3">リンク</a>
          </div>
          </div>
          <div className="text-center">
            <Link to="/"><img src={logo} alt="フォース株式会社" height={100}/></Link>
          </div>
          <a href="#page-top"><button type="button" class="btn btn-dark pagetop-button" href="#page-top">PAGE TOP</button></a>
        </footer>
    )
}

export default Footer;