import React from "react"
import ContactImage from "../../images/force/contact.png"

import "./contact.scss"

const Contact = () => {

    return (
        <div>
            <div className="heading">
                <img src={ ContactImage } className="img-fluid" alt=""/>
                <p>お問い合わせ</p>
            </div>
            <div className="contents">
                <p>弊社に関してのご不明な点はこちらのフォームにて承ります。</p>
                <p>下記フォームにご記入いただきました皆様の個人情報は、「個人情報保護ポリシー」に基づき取り扱わせていただきます。</p>
                <p>また、ご記入いただきました個人情報は、お問い合わせへご回答するのみに利用する目的で収集いたします。</p>
                <p>※すべて必須項目です。</p>
            </div>
                <form className="container">
                    <div class="form-group">
                        <label for="exampleInputEmail1">お名前</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="例：山田　花子"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">会社名・法人名・団体名※個人のお客様は「個人」とご記入ください</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="例：〇〇株式会社"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">部署・役職等</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="例：営業部部長"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">メールアドレス</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="例：exzmple@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">電話番号</label>
                        <input type="tel" class="form-control" id="exampleInputPassword1" placeholder="例：03-5259-5231"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">郵便番号</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" placeholder="例：101-0054"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">都道府県</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="例：東京都"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">ご住所</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="例：千代田区神田錦町3-18 寿ビル7F"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">メッセージ本文</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">確認画面へ</button>
                </form>
            <div className="contents">
                <p>お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで</p>
                <p>TEL 03-5259-5231</p>
            </div>
        </div>
    )
}

export default Contact