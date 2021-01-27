import React from "react"
import ContactImage from "../../images/force/contact.png"

import "./contact.scss"

//バリデーションチェック

const Contact = () => {

    return (
        <div>
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
                <form className="container">
                    <div className="form-group">
                        <label for="name">お名前</label>
                        <input type="text" class="form-control" id="name" placeholder="例：山田　花子" required/>
                    </div>
                    <div class="form-group">
                        <label for="company">会社名・法人名・団体名 ※個人のお客様は「個人」とご記入ください</label>
                        <input type="text" class="form-control" id="company" placeholder="例：〇〇株式会社" required/>
                    </div>
                    <div class="form-group">
                        <label for="position">部署・役職等</label>
                        <input type="text" class="form-control" id="position" placeholder="例：営業部部長" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">メールアドレス</label>
                        <input type="email" class="form-control" id="email" placeholder="例：exzmple@example.com" required/>
                    </div>
                    <div class="form-group">
                        <label for="tel">電話番号</label>
                        <input type="tel" class="form-control" id="tel" placeholder="例：03-5259-5231" required/>
                    </div>
                    <div class="form-group">
                        <label for="postalCode">郵便番号</label>
                        <input type="number" class="form-control" id="postalCode" placeholder="例：101-0054" required/>
                    </div>
                    <div class="form-group">
                        <label for="prefectures">都道府県</label>
                        <input type="text" class="form-control" id="prefectures" placeholder="例：東京都" required/>
                    </div>
                    <div class="form-group">
                        <label for="address">ご住所</label>
                        <input type="text" class="form-control" id="address" placeholder="例：千代田区神田錦町3-18 寿ビル7F" required/>
                    </div>
                    <div class="form-group">
                        <label for="message">メッセージ本文</label>
                        <textarea class="form-control" id="message" rows="3" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" class="btn btn-primary">確認画面へ</button>
                    </div>
                </form>
            <div className="container mt-5 bottom-contents">
                <p>お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで</p>
                <p>TEL 03-5259-5231</p>
            </div>
        </div>
        // <form>
        //     <div class="form-row">
        //         <div class="col-md-4 mb-3">
        //             <label for="validationDefault01">First name</label>
        //             <input type="text" class="form-control" id="validationDefault01" placeholder="First name" required />
        //         </div>
        //         <div class="col-md-4 mb-3">
        //             <label for="validationDefault02">Last name</label>
        //             <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" required />
        //         </div>
        //         <div class="col-md-4 mb-3">
        //             <label for="validationDefaultUsername">Username</label>
        //             <div class="input-group">
        //                 <div class="input-group-prepend">
        //                     <span class="input-group-text" id="inputGroupPrepend2">@</span>
        //                 </div>
        //                 <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
        //             </div>
        //         </div>
        //     </div>
        //     <div class="form-row">
        //         <div class="col-md-6 mb-3">
        //             <label for="validationDefault03">City</label>
        //             <input type="text" class="form-control" id="validationDefault03" placeholder="City" required />
        //         </div>
        //         <div class="col-md-3 mb-3">
        //             <label for="validationDefault04">State</label>
        //             <input type="text" class="form-control" id="validationDefault04" placeholder="State" required />
        //         </div>
        //         <div class="col-md-3 mb-3">
        //             <label for="validationDefault05">Zip</label>
        //             <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required />
        //         </div>
        //     </div>
        //     <div class="form-group">
        //         <div class="form-check">
        //             <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
        //             <label class="form-check-label" for="invalidCheck2">
        //                 Agree to terms and conditions
        //             </label>
        //         </div>
        //     </div>
        //     <button class="btn btn-primary" type="submit">Submit form</button>
        // </form>
    )
}

export default Contact