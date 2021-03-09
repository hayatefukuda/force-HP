import React from "react"
import { graphql,Link } from "gatsby"
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
import Company from "../images/force/company-home.png"
import Recruitment from "../images/force/recruitment-home.png"
import Contact from "../images/force/contact-home.png"
import Interview from "../images/force/interview-person.png"

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
      <Layout>
        <SEO title="Home"/>
        <header className="masthead">
              <div className="bigmessage">
                <h1 className="bigmessage1 text-white">ITサービスで</h1>
                <h1 className="bigmessage2 text-danger">道</h1>
                <h1 className="bigmessage3 text-white">を拓く。</h1>
              </div>
                <div className="text-center">
                <a href="https://job.mynavi.jp/21/pc/search/corp237340/outline.html">
                  <button type="button" className="btn-outline-primary blueline-button" href="#about" 
                  // onClick={Scroller.handleAnchorScroll}
                  >こちらから<br className="entry" />採用エントリー</button>
                </a>
                </div>
        </header>
        <section className="page-section back" id="about">
          {/* <div className="container"> */}
            <div className="row justify-content-center">
              {/* <div className="col-lg-8 text-center"> */}
              <div className="text-image">
                <img src={ Company } className="img-fluid" alt=""/>
                <p>企業情報</p>
              </div>
                {/* <header className="home1">
                <h2 className="font-weight-bold text-white mt-0">企業情報</h2>
                </header> */}
                <Link className="company-button btn-danger" href="#services"
                   to="/company_information/Greeting"><p>ごあいさつ</p><img src={icon1} alt="" height={80}/></Link>
                <Link className="company-button btn-danger" href="#services"
                   to="/company_information/BusinessContent"><p>事業内容</p><img src={icon2} alt="事業内容" height={80}/></Link>
                <Link className="company-button btn-danger" href="#services"
                   to="/company_information/CompanyProfile"><p>企業概要</p><img src={icon3} alt="企業概要" height={80}/></Link>
            </div>
                <p className="message">フォース株式会社は
                  <br className="ci-home2" />優れた技術力の創出と
                  <br className="ci-home1" />ＩＴがもつ限りない
                  <br className="ci-home2" />可能性の追求で、
                  <br />お客様に必要とされる
                  <br className="ci-home2" />会社であることを
                  <br className="ci-home1" />目標としています。
                </p>
                <hr width="70%" height="10" align="right" color="navy"></hr>
              {/* </div> */}
          {/* </div> */}
        </section>

        <section className="page-section" id="services">
          <div className="row justify-content-center">
            {/* <header className="home2">
            <h2 className="font-weight-bold text-white mt-0">採用情報</h2>
            </header> */}
          <div className="text-image">
            <img src={ Recruitment } className="img-fluid" alt=""/>
            <p>採用情報</p>
          </div>
            <Link className="recruit-button btn-primary" href="#services"
               to="/recruitment/newGraduate"><p>新卒採用</p><img src={icon4} alt="新卒採用" height={80}/></Link>
            <Link className="recruit-button btn-primary" href="#services"
               to="/recruitment/midCareer"><p>中途採用</p><img src={icon5} alt="中途採用" height={80}/></Link>
          </div>
            <p className="message">経験者・
            <br className="rec-home2" />未経験者問わず
            <br className="rec-home1" />FORCEで一緒に
            <br className="rec-home3" />成長しませんか？</p>
            {/* <canvas/> */}
            <hr width="70%" height="10" align="right" color="navy"></hr>
        </section>

        <section className="page-section">
         <h3 className="font-weight-bold interview-title">社員インタビュー</h3>
          <div className="container text-center">
           <div className="bigmessage">
           <div className="interview-person">
             <img src={ Interview } alt=""/> 
             <p>職種</p>
             <p>名　　　　前</p>
             <p className="interview-content">インタビュー要約</p>
           </div>          
           <div className="interview-person">
             <img src={ Interview } alt=""/> 
             <p>職種</p>
             <p>名　　　　前</p>
             <p>インタビュー要約</p>
           </div>          
           <div className="interview-person">
             <img src={ Interview } alt=""/> 
             <p>職種</p>
             <p>名　　　　前</p>
             <p>インタビュー要約</p>
           </div>
           </div>          
             <Link to="/employee_interview/EmployeeInterview"><button type="button" className="btn btn-outline-primary blueline-button" href="#interview" >インタビューを見る</button></Link>
         </div>
         </section>

         <section className="page-section" id="contact">
           {/* <div className="container"> */}
             <div className="row justify-content-center">
               {/* <div className="col-lg-8 text-center"> */}
           <div className="contact-text">
             <img src={ Contact } className="img-fluid" alt=""/>
             <p>お問い合わせ</p>
           </div>
           <div className="contact-button">
                 <button type="button" className="btn btn-primary" href="#services" onClick={Scroller.handleAnchorScroll}>
                   <p className="contact-button1">お問い合わせは
                    <br className="con-home1" />こちらから</p>
                   <p className="contact-button2">お気軽にご相談・
                    <br className="con-home1" />お問い合わせ下さい。</p>
                 </button>
                 <div>
                 <p className="text-center contact-info">お電話にて
                  <br className="con-home3" />お問い合わせ
                    <br className="con-home4" />頂く場合、
                  <br className="con-home2" />フォース株式会社
                  <br className="con-home5" />【総合係】まで</p>
                 <p className="text-danger font-weight-bold text-center telephone">TEL 03-5259-5231</p>
                 <p className="font-weight-bold text-center contact-info">平日9:30〜18:30</p>
                 </div>
           </div>
               {/* </div> */}
             </div>
           {/* </div> */}
         </section>
         <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
           <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
         </PortfolioModal>
       </Layout>
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
