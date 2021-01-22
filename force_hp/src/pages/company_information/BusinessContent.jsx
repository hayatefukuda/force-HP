import React from "react"
import Business from "../../images/force/business.png"

const BusinessContent = () => {

    return (
        <div>
            <div className="heading">
                <img src={ Business } className="img-fluid" alt=""/>
                <p>事業内容</p>
            </div>
            <div className="main_contents">
                <p className="font-weight-bold">システムエンジニアリングサービス（SES</p>
            </div>
            <div className="sub_contents">
                <p>
                    システムエンジニアリングサービスのお客様要望は、コスト・技術及びノウハウ・ロケーションなど、
                    様々なケースがあります。フォースではこれらのご要望にマッチしたご提案ご提案を行います。
                </p>
                <p>
                    フォースでは技術分野に特化せず幅広い展開を行うため、システム開発だけではなく、
                    これらの運用・保守、ユーザーサポートなど、お客様のシステムの安定稼働とさらなるご要望を
                    叶えるため、お客様先に常駐し、トータルサポート致します。
                </p>
            </div>
        </div>
    )
}

export default BusinessContent