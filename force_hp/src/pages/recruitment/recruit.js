import React from "react"
import { Link } from "gatsby"
import icon4 from "../../images/force/icon-newrecruit.png"
import icon5 from "../../images/force/icon-midrecruit.png"
import recruitment from "../../images/force/recruitment_fullsize.jpg"


import "./recruit .scss"
import Layout from "../../components/layout"

const Recruit = () => {

    return (
        <Layout>
            <div>
                <div className="heading">
                    <img src={ recruitment } className="img-fluid" alt=""/>
                    <p>採用情報</p>
                </div>
                <div>
                    <p className="text">「人材」こそ会社の原動力であるとの考え方から人物重視の採用を行っております。</p>
                </div>
                <div className="box">
                    <div className ="smalltitle">
                        <h5 className="left">弊社が求める</h5>
                        <h5 className="red">人物像</h5>
                    </div>
                    <div>
                        <p>１.チャレンジ精神</p>
                    </div>
                    <div className="text">
                        <p>常に新しい技術が日進月歩のIT業界。<br />常に前向きにプラス思考で新しいことにチャレンジできる向上心のある方。</p>
                    </div>
                    <div>
                        <p>２.コミュニケーション能力</p>
                    </div>
                    <div className="text">
                        <p>システム開発というとプログラム言語を使用した個人での業務と思われがちですが、チームやプロジェクトといった集団の中での業務になります。 周囲との協調性を持ち、チームやプロジェクト内での信頼関係を築ける方。</p>
                    </div>
                    <div>
                        <p>３.新しい技術に関する好奇心</p>
                    </div>
                    <div className="text">
                        <p>プロフェッショナルを目指したいという強い意志のある方。<br />いつまでにこうなりたいという明確な目標にむかって日々自己研磨できる方。</p>
                    </div>
                </div>
                <Link className="recruit-button btn btn-secondary" href="#services"
                to="/recruitment/newGraduate">新卒採用<img src={icon4} alt="新卒採用" height={80}/></Link>
                <Link className="recruit-button btn btn-secondary" href="#services"
                to="/recruitment/midCareer">中途採用<img src={icon5} alt="中途採用" height={80}/></Link>
            </div>
        </Layout>
    )
}

export default Recruit;