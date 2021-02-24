import React from "react"
import Company from "../../images/force/company_fullsize.jpg"
import { Link } from "gatsby"
// import Layout from "../../components/layout"

import "./companyprofile.scss"
import Layout from "../../components/layout"

const CompanyProfile = () => {

    return (
        <Layout>
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
                                <Link to="/access/access"><p>会社所在地</p></Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">連絡先</th>
                            <td className="text-center">Tel:03-5259-5231(代表)　Fax:03-5259-5320</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center align-middle">事業内容</th>
                            <td>
                                <p 
                                className="text-center"
                                >
                                    情報処理に関するソフトウェア及びハードウェア、スマートフォン・
                                タブレット端末用の開発・製造及び販売、動画プラットフォームの販売</p>
                                <Link to="/company_information/BusinessContent">
                                <p 
                                className="text-center"
                                >
                                        事業内容
                                    </p>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center align-middle">関連会社</th>
                            <td>
                            <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://san-corp.co.jp/" target="_blank" rel="noopener noreferrer">サン株式会社</a>
                                    （セールスプロモーション・ソリューション・企画）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://sun-shine-sogogakuen.com/" target="_blank" rel="noopener noreferrer">株式会社サンシャイン</a>
                                    （教育事業・人材派遣事業）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="https://www.dwn.co.jp/" target="_blank" rel="noopener noreferrer">データウェアネットワーク株式会社</a>
                                    （システム開発・Web制作事業・特定労働派遣事業）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://www.dragon-inc.jp/" target="_blank" rel="noopener noreferrer">ドラゴン株式会社</a>
                                    （SP、PR、WEBを中心とした広告制作全般）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="https://www.noah.jp/" target="_blank" rel="noopener noreferrer">株式会社ノア</a>
                                    （インターネット・サービス事業・ウェブサイト・ソリューション事業）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="https://cielo.jp.net/" target="_blank" rel="noopener noreferrer">株式会社シエロ</a>
                                    （デイサービスの運用）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://www.rbc-s.co.jp/" target="_blank" rel="noopener noreferrer">アールビィシィ株式会社</a>
                                    （建設業界のノウハウを凝縮したパッケージソフトのご提案、
                                    導入から保守運用、建設事業に携わる建機・仮設事業様専門アプリケーションの開発）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://www.metssoftware.co.jp/" target="_blank" rel="noopener noreferrer">メッツソフトウェア株式会社</a>
                                    （受託開発）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="https://www.syslabo.co.jp/" target="_blank" rel="noopener noreferrer">システムラボラトリー株式会社</a>
                                    （受託開発及び製品販売）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://www.fds-jpn.com/" target="_blank" rel="noopener noreferrer">株式会社エフディエス</a>
                                    （静脈認証システムの開発・販売）
                                </p>
                                <p 
                                className="text-center1"
                                >
                                    <a className="firstChild lastChild" href="http://grapple.asia/" target="_blank" rel="noopener noreferrer">株式会社grapple</a>
                                    （マーケティングコンテンツ、Webインテグレーション、分析）
                                </p>                            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default CompanyProfile