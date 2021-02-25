import { Link } from "gatsby";
import React from "react"
import logo from "../images/force/logo-white.png"
import { Container , Row , Col } from "react-bootstrap"

const Footer = () => {

    return(
        <footer className="footer-bg">
          <Container>
            <Row>
              <Col md={3} className="mt-5">
                <Link to="/company_information/Home" className="footer1">
                  企業情報
                </Link>
              </Col>
              <Col md={3} className="mt-5">
                <Link to="/recruitment/recruit" className="footer1">
                  採用情報
                </Link>
              </Col>
              <Col md={3} className="mt-5">
                <Link to="/employee_interview/EmployeeInterview" className="footer1">
                  社員インタビュー
                </Link>
              </Col>
              <Col md={3} className="mt-5">
                <Link to="/access/access" className="footer1">
                  アクセス
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 9 }}>
                <Link to="/contact/Contact" className="footer1">
                  お問い合わせ
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 9 }}>
                <Link to="/contact/PrivacyPolicy" className="footer1">
                  プライバシーポリシー
                </Link>
              </Col>
            </Row>
          </Container>
          {/* <div className="footer-display1">  
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
            <Link to="/employee_interview/EmployeeInterview" className="footer1">社員インタビュー</Link>
          </div>
          <div className="footer-display2">
            <Link to="/access/access" className="footer3">アクセス</Link>
            <Link to="/contact/Contact" className="footer3">お問い合わせ</Link>
            <Link to="/contact/PrivacyPolicy" className="footer3">プライバシーポリシー</Link>
          </div>
          </div> */}
          <div className="text-center">
            <Link to="/"><img src={logo} alt="フォース株式会社" height={100}/></Link>
          </div>
          <a href="#page-top"><button type="button" className="btn btn-dark pagetop-button" href="#page-top">PAGE TOP</button></a>
        </footer>
    )
}

export default Footer;