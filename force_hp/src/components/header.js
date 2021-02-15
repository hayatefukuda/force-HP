import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import logo from '../images/force/logo-white.png'
import { Link } from "gatsby"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-0" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
          <a className="navbar-brand js-scroll-trigger" 
            // href="#page-top"
            ><Link to="/"><img src={logo} alt="フォース株式会社" height={100}/></Link></a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center">
                <Scrollspy className="navbar-nav"
                           items={["about", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>                  
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} 
                    // href="#about"
                    ><Link class="nav-link primary" to="/company_information/Home">企業情報</Link></Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} 
                    // href="#services"
                    ><Link class="nav-link" to="/recruitment/recruit">採用情報</Link></Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} 
                    // href="#portfolio"
                    ><Link class="nav-link" to="/access/access">アクセス</Link></Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} 
                    // href="#contact"
                    ><Link class="nav-link" to="/contact/Contact">お問い合わせ</Link></Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>



        // <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-0" id="mainNav" expand="lg"
        //         collapseOnSelect={true}>
        //   <div className="container">
        //   <a className="navbar-brand js-scroll-trigger" href="#page-top"><Link to="/"><img src={logo} alt="フォース株式会社" height={100}/></Link></a>
        //     <Navbar.Toggle aria-controls="navbarResponsive"/>
        //     <Navbar.Collapse id="navbarResponsive">
        //       <Nav className="navbar-nav text-center">
        //         <Scrollspy className="navbar-nav"
        //                    items={["about", "services", "portfolio", "contact"]}
        //                    currentClassName="active" rootEl={"#mainNav"} offset={-75}>                  
        //           <li className="nav-item">
                    
        //             <Link className={"js-scroll-trigger"} href="#services"
        //            to="/company_information/CompanyProfile">企業情報</Link>
        //           </li>
        //           <li className="nav-item">
        //           <Link className={"js-scroll-trigger"} href="#services"
        //            to="/recruitment/recruit">採用情報</Link>
        //           </li>
        //           <li className="nav-item">
        //           <Link className={"js-scroll-trigger"} href="#services"
        //            to="/access/access">アクセス</Link>
        //           </li>
        //           <li className="nav-item">
        //           <Link className={"js-scroll-trigger"} href="#services"
        //            to="/company_information/CompanyProfile">お問い合わせ</Link>
        //           </li>
        //         </Scrollspy>
        //       </Nav>
        //     </Navbar.Collapse>
        //   </div>
        // </Navbar>

    );
  }
}
