import React from "react"
import Form from "../contact/Form"
import TableMC from "./tableMC"
import Layout from "../../components/layout"
import recruitment from "../../images/force/recruitment_fullsize.jpg"

import "./newGraduate.scss"


const MidCareer = () => {
    return (
        <Layout>
            <div>
                <div className="heading">
                    <img src={ recruitment } className="img-fluid" alt=""/>
                    <p>中途採用</p>
                </div>
                <div>
                    <h5 className="sTitle">中途採用について</h5>
                    <p className="center1">現在、募集を行っております。</p>
                </div>
                <div>
                    <h5 className="sTitle">募集要項</h5>
                </div>
                <TableMC />
                <div>
                    <h5 className="sTitle">採用フロー</h5>
                    <div>
                        <h6 className="ssTitle">エントリー</h6>
                        <p className="text">フォース株式会社にご興味をお持ち頂きました方は、お電話や応募フォームにて直接お問い合わせ下さい。</p>
                    </div>
                    <div>
                        <h6 className="ssTitle">会社説明会兼一次選考会</h6>
                        <p className="text">これからＩＴ業界を目指す方・興味を持ち始めた方も是非ご応募ください！<br />筆記試験と面接を受けていただきます。</p>
                    </div>
                    <div>
                        <h6 className="ssTitle">最終選考</h6>
                        <p className="text">個人面接を受けていただきます。</p>
                    </div>
                    <div>
                        <h6 className="ssTitle">内定</h6>
                        <p className="text">内定までは、1週間前後を予定しています。</p>
                    </div>
                    <div>
                        <h6 className="ssTitle">持ち物</h6>
                        <p className="text">筆記用具、写真付履歴書、職務経歴書</p>
                    </div>
                </div>
                <div>
                    <h5 className="sTitle">応募フォーム</h5>
                </div>
                <Form />
                <br />
            </div>
        </Layout>
    )
}

export default MidCareer;