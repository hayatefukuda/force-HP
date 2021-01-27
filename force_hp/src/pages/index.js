import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import icon1 from "../images/force/icon-greeting.png"
import icon2 from "../images/force/icon-business.png"
import icon3 from "../images/force/icon-company.png"
import icon4 from "../images/force/icon-newrecruit.png"
import icon5 from "../images/force/icon-midrecruit.png"

import Home from "../pages/company_information/Home"
import Greetings from "../pages/company_information/Greeting"
import BusinessContent from "../pages/company_information/BusinessContent"
import CompanyProfile from "../pages/company_information/CompanyProfile"
import Contact from "../pages/contact/Contact"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Contact />
      // <Layout>
      //   <SEO title="Home"/>
      //   <section className="page-section" id="about">
      //     <div className="container">
      //       <div className="row justify-content-center">
      //         <div className="col-lg-8 text-center">
      //           <header className="home1">
      //           <h2 className="font-weight-bold text-white mt-0">企業情報</h2>
      //           </header>
      //           {/* <hr className="divider light my-4"/> */}
      //           <a className="btn btn-danger btn-xl js-scroll-trigger" href="#services"
      //              onClick={Scroller.handleAnchorScroll}>ごあいさつ<img src={icon1} alt="ごあいさつ" height={50}/></a>
      //           <a className="btn btn-danger btn-xl js-scroll-trigger" href="#services"
      //              onClick={Scroller.handleAnchorScroll}>事業内容<img src={icon2} alt="事業内容" height={50}/></a>
      //           <a className="btn btn-danger btn-xl js-scroll-trigger" href="#services"
      //              onClick={Scroller.handleAnchorScroll}>企業概要<img src={icon3} alt="企業概要" height={50}/></a>
      //           <p className="mb-4">フォース株式会社は優れた技術力の創出とＩＴがもつ限りない可能性の追求で、<br />お客様に必要とされる会社であることを目標としています。</p>
      //         </div>
      //       </div>
      //     </div>
      //   </section>

      //   <section className="page-section" id="services">
      //     <div className="container text-center">
      //       <header className="home2">
      //       <h2 className="font-weight-bold text-white mt-0">採用情報</h2>
      //       </header>
      //       <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services"
      //          onClick={Scroller.handleAnchorScroll}>新卒採用<img src={icon4} alt="新卒採用" height={50}/></a>
      //       <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services"
      //          onClick={Scroller.handleAnchorScroll}>中途採用<img src={icon5} alt="中途採用" height={50}/></a>
      //       <p className="mb-4">経験者・未経験者問わずFORCEで一緒に成長しませんか？</p>
      //       {/* <hr className="divider my-4"/>
      //       <div className="row">
      //         <div className="col-lg-3 col-md-6 text-center">
      //           <div className="mt-5">
      //             <i className="fas fa-4x fa-gem text-primary mb-4"></i>
      //             <h3 className="h4 mb-2">Sturdy Themes</h3>
      //             <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3 col-md-6 text-center">
      //           <div className="mt-5">
      //             <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
      //             <h3 className="h4 mb-2">Up to Date</h3>
      //             <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3 col-md-6 text-center">
      //           <div className="mt-5">
      //             <i className="fas fa-4x fa-globe text-primary mb-4"></i>
      //             <h3 className="h4 mb-2">Ready to Publish</h3>
      //             <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3 col-md-6 text-center">
      //           <div className="mt-5">
      //             <i className="fas fa-4x fa-heart text-primary mb-4"></i>
      //             <h3 className="h4 mb-2">Made with Love</h3>
      //             <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
      //           </div>
      //         </div>
      //       </div> */}
      //     </div>
      //   </section>

      //   {/* <section id="portfolio">
      //     <div className="container-fluid p-0">
      //       <div className="row no-gutters">
      //         <div className="col-lg-4 col-sm-6">
      //           <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
      //             <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
      //             <div className="portfolio-box-caption">
      //               <div className="project-category text-white-50">
      //                 Category
      //               </div>
      //               <div className="project-name">
      //                 Project Name
      //               </div>
      //             </div>
      //           </a>
      //         </div>
      //         <div className="col-lg-4 col-sm-6">
      //           <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
      //             <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
      //             <div className="portfolio-box-caption">
      //               <div className="project-category text-white-50">
      //                 Category
      //               </div>
      //               <div className="project-name">
      //                 Project Name
      //               </div>
      //             </div>
      //           </a>
      //         </div>
      //         <div className="col-lg-4 col-sm-6">
      //           <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
      //             <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
      //             <div className="portfolio-box-caption">
      //               <div className="project-category text-white-50">
      //                 Category
      //               </div>
      //               <div className="project-name">
      //                 Project Name
      //               </div>
      //             </div>
      //           </a>
      //         </div>
      //         <div className="col-lg-4 col-sm-6">
      //           <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
      //             <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
      //             <div className="portfolio-box-caption">
      //               <div className="project-category text-white-50">
      //                 Category
      //               </div>
      //               <div className="project-name">
      //                 Project Name
      //               </div>
      //             </div>
      //           </a>
      //         </div>
      //         <div className="col-lg-4 col-sm-6">
      //           <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
      //             <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
      //             <div className="portfolio-box-caption">
      //               <div className="project-category text-white-50">
      //                 Category
      //               </div>
      //               <div className="project-name">
      //                 Project Name
      //               </div>
      //             </div>
      //           </a>
      //         </div>
      //         <div className="col-lg-4 col-sm-6">
      //           <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
      //             <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
      //             <div className="portfolio-box-caption p-3">
      //               <div className="project-category text-white-50">
      //                 Category
      //               </div>
      //               <div className="project-name">
      //                 Project Name
      //               </div>
      //             </div>
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </section> */}

      //   <section className="page-section">
      //     <div className="container text-center">
      //       <h3 className="font-weight-bold mb-4">社員インタビュー</h3>
      //       <header className="home4">
      //       <h2 className="font-weight-bold mt-0">名前</h2>
      //       </header>
      //       <button type="button" class="btn btn-outline-primary" href="#services" onClick={Scroller.handleAnchorScroll}>インタビューを見る</button>
      //     </div>
      //   </section>

      //   <section className="page-section" id="contact">
      //     <div className="container">
      //       <div className="row justify-content-center">
      //         <div className="col-lg-8 text-center">
      //           <header className="home3">
      //           <h2 className="font-weight-bold text-white mt-0">お問い合わせ</h2>
      //           </header>
      //         {/* <div className="col-lg-4 mr-auto">
      //           <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
      //           <a className="d-block" href="mailto:contact@yourwebsite.com">お問い合わせはこちらから<br />お気軽にご相談・お問い合わせ下さい。</a>
      //         </div> */}
      //           <button type="button" class="btn btn-primary" href="#services" onClick={Scroller.handleAnchorScroll}>
      //             お問い合わせはこちらから<br />お気軽にご相談・お問い合わせ下さい。</button>
      //           <p className="mb-5">お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで</p>
      //           <p className="text-danger font-weight-bold mb-5">TEL 03-5259-5231</p>
      //           <p className="font-weight-bold mb-5">平日9:30〜18:30</p>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      //   <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
      //     <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
      //   </PortfolioModal>
      // </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
