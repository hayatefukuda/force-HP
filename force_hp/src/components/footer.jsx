import React from "react"
import logo from "../images/force/logo-white.png"

const Footer = () => {

    return(
        <footer className="footer-bg">
          <div className="footer-display1">  
          <div className="footer-display2">         
            <a href="#page-top" className="footer1">企業情報</a>
            <a href="#page-top" className="footer2">ごあいさつ</a>
            <a href="#page-top" className="footer2">事業内容</a>
            <a href="#page-top" className="footer2">会社概要</a>
          </div> 
          <div className="footer-display2">
            <a href="#page-top" className="footer1">採用情報</a>
            <a href="#page-top" className="footer2">新卒採用</a>
            <a href="#page-top" className="footer2">中途採用</a>
          </div>
          <div className="footer-display2">
            <a href="#page-top" className="footer3">アクセス</a>
            <a href="#page-top" className="footer3">お問い合わせ</a>
            <a href="#page-top" className="footer3">プライバシーポリシー</a>
            <a href="#page-top" className="footer3">リンク</a>
          </div>
          </div>
          <div className="text-center">
            <img src={logo} alt="フォース株式会社" height={100}/>
          </div>
          <a href="#page-top"><button type="button" class="btn btn-dark pagetop-button" href="#page-top">PAGE TOP</button></a>
        </footer>
    )
}

export default Footer;