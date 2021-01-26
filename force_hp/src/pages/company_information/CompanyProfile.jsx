import React from "react"
import Company from "../../images/force/company.png"

import "./companyprofile.scss"

const CompanyProfile = () => {

    return (
        <div>
            <div className="heading">
                <img src={ Company } className="img-fluid" alt=""/>
                <p>会社概要</p>
            </div>
            <table className="container mt-5 table table-bordered" width="100%">
                <tbody>
                    <tr>
                        <th scope="row" width="15%" className="text-center">会社名</th>
                        <td width="85%" className="text-center">フォース株式会社</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">設立</th>
                        <td className="text-center">2013年（平成25年）11月</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">資本金</th>
                        <td className="text-center">10,000,000円</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">代表者</th>
                        <td className="text-center">代表取締役　松永　淳</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">社員数</th>
                        <td className="text-center">84名（2020年4月現在）</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">所在地</th>
                        <td className="text-center">〒101-0054 東京都千代田区神田錦町3-18 寿ビル7階
                            会社所在地
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">連絡先</th>
                        <td className="text-center">Tel:03-5259-5231(代表)　Fax:03-5259-5320</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-middle">事業内容</th>
                        <td>情報処理に関するソフトウェア及びハードウェア、スマートフォン・
                            タブレット端末用の開発・製造及び販売、動画プラットフォームの販売
                            事業内容
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-middle">関連会社</th>
                        <td>
                            <p>サン株式会社（セールスプロモーション・ソリューション・企画）</p>
                            <p>株式会社サンシャイン（教育事業・人材派遣事業）</p>
                            <p>データウェアネットワーク株式会社（システム開発・Web制作事業・特定労働派遣事業）</p>
                            <p>ドラゴン株式会社（SP、PR、WEBを中心とした広告制作全般</p>
                            <p>株式会社ノア（インターネット・サービス事業・ウェブサイト・ソリューション事業）</p>
                            <p>株式会社シエロ（デイサービスの運用）</p>
                            <p>アールビィシィ株式会社（建設業界のノウハウを凝縮したパッケージソフトのご提案、
                                導入から保守運用、建設事業に携わる建機・仮設事業様専門アプリケーションの開発）</p>
                            <p>メッツソフトウェア株式会社（受託開発）</p>
                            <p>システムラボラトリー株式会社（受託開発及び製品販売）</p>
                            <p>株式会社エフディエス（静脈認証システムの開発・販売）</p>
                            <p>株式会社grapple（マーケティングコンテンツ、Webインテグレーション、分析）</p>                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompanyProfile