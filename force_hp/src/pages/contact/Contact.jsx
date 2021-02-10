import React from "react"
import ContactImage from "../../images/force/contact_fullsize.jpg"
import Form from "./Form"

import "./contact.scss"
import Layout from "../../components/layout"

const Contacts = () => {

    return (
        <Layout>
            <div className="heading">
                <img src={ ContactImage } className="img-fluid" alt=""/>
                <p>お問い合わせ</p>
            </div>
            <div className="container mt-5 contents">
                <p>弊社に関してのご不明な点はこちらのフォームにて承ります。</p>
                <p>下記フォームにご記入いただきました皆様の個人情報は、「個人情報保護ポリシー」に基づき取り扱わせていただきます。</p>
                <p>また、ご記入いただきました個人情報は、お問い合わせへご回答するのみに利用する目的で収集いたします。</p>
                <p className="required-text">※すべて必須項目です。</p>
            </div>
                <Form />
            <div className="container mt-5 bottom-contents">
                <p>お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで</p>
                <p>TEL 03-5259-5231</p>
            </div>
        </Layout>
    )
}

export default Contacts