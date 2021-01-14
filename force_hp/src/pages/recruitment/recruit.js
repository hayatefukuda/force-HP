import React from "react"

import "./recruit .scss"

const Recruit = () => {

    return (

        <div>
            <div className="center">
                <p>採用情報</p>
            </div>
            <div>
                <p>「人材」こそ会社の原動力であるとの考え方から人物重視の採用を行っております。</p>
            </div>
            <div className="box">
                <div className ="smalltitle">
                    <p className="left">弊社が求める</p>
                    <p className="red">人物像</p>
                </div>
                <div>
                    <p>１.チャレンジ精神</p>
                </div>
                <div>
                    <p>常に新しい技術が日進月歩のIT業界。</p>
                    <p>常に前向きにプラス思考で新しいことにチャレンジできる向上心のある方。</p>
                </div>
                <div>
                    <p>２.コミュニケーション能力</p>
                </div>
                <div>
                    <p>システム開発というとプログラム言語を使用した個人での業務と思われがちですが、チームやプロジェクトといった集団の中での業務になります。 周囲との協調性を持ち、チームやプロジェクト内での信頼関係を築ける方。</p>
                </div>
                <div>
                    <p>３.新しい技術に関する好奇心</p>
                </div>
                <div>
                    <p>プロフェッショナルを目指したいという強い意志のある方。</p>
                    <p>いつまでにこうなりたいという明確な目標にむかって日々自己研磨できる方。</p>
                </div>
            </div>
            <div className="circle">
                <p>新卒採用</p>
            </div>
            <div className="circle">
                <p>中途採用</p>
            </div>
        </div>
    )
}

export default Recruit;