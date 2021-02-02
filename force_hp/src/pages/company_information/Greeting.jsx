import React from "react"
import Layout from "../../components/layout"
import Greeting from "../../images/force/greeting_fullsize.jpg"

import "./greeting.scss"

const Greetings = () => {

    return (
        <Layout>
            <div>
                <div className="heading">
                    <img src={ Greeting } className="img-fluid" alt=""/>
                    <p>ごあいさつ</p>
                </div>
                <div className="main_contents">
                    <p>社員が一丸となって社会への貢献を目指す</p>
                </div>
                <div className="sub_contents">
                    <p>皆様には平素より当社グループ並びにフォース株式会社を御引き立て賜り
                    心より御礼申し上げます。</p>
                    <p>私たちを取り巻く社会・経済環境は日々変化しており、
                    お客様企業の成長戦略や経営課題、IT活用ニーズは多様化、高度化してきております。</p>
                    <p>社員が一丸となってお客様満足度の向上と企業価値の最大化、社会への貢献を目指してまいります。
                    今後ともより一層のご支援を賜りますよう、お願い申し上げます。
                    </p>
                    <p>フォース株式会社　代表取締役　松永　淳</p>
                </div>
            </div>
        </Layout>
    )
}

export default Greetings