import React, {useState} from "react"
import {useForm} from "react-hook-form"
import Confirm from "./Confirm"
import ContactImage from "../../images/force/contact.png"

import "./contact.scss"

const Contacts = () => {
    const { register, handleSubmit, reset, errors, getValues} = useForm()

    const [data, setData] = useState(false)

    const onSubmitData = () => setData(true)

    const [modalShow, setModalShow] = useState(false)
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
            <form className="container" onSubmit={handleSubmit(onSubmitData)}>
                <div className="form-group">
                    <label htmlFor="name">お名前</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="例：山田　花子"
                        ref={register({required: true})} />
                    {errors.name && <p className="formError">※名前を入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="company">会社名・法人名・団体名 ※個人のお客様は「個人」とご記入ください</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-control"
                        placeholder="例：〇〇株式会社"
                        ref={register({required: true})} />
                    {errors.company && <p className="formError">※会社名・法人名・団体名、又は「個人」と入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="position">部署・役職等</label>
                    <input
                        id="position"
                        name="position"
                        type="text"
                        className="form-control"
                        placeholder="例：営業部部長"
                        ref={register({required: true})} />
                    {errors.position && <p className="formError">※部署・役職等を入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">メールアドレス</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="例：exzmple@example.com"
                        ref={register({
                            required: true,
                            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
                        })} />
                    {errors.email && <p className="formError">※メールアドレスを正しく入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="tel">電話番号(ハイフンあり)</label>
                    <input
                        id="tel"
                        name="tel"
                        type="tel"
                        className="form-control"
                        placeholder="例：03-5259-5231"
                        ref={register({
                            required: true,
                            value: /^0\d{2,3}-\d{1,4}-\d{4}$/
                        })} />
                    {errors.tel && <p className="formError">※電話番号を正しく入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="postalcode">郵便番号(ハイフンあり)</label>
                    <input
                        id="postalcode"
                        name="postalcode"
                        type="number"
                        className="form-control"
                        placeholder="例：101-0054"
                        ref={register({
                            required: true,
                            value: /^\d{3}-\d{4}$/ 
                        })} />
                    {errors.postalcode && <p className="formError">※郵便番号を正しく入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="prefectures">都道府県</label>
                    <input
                        id="prefectures"
                        name="prefectures"
                        type="text"
                        className="form-control"
                        placeholder="例：東京都"
                        ref={register({
                            required: true,
                            value: /^(東京都|北海道|(京都|大阪)府|.{2,3}県)$/
                        })} />
                    {errors.prefectures && <p className="formError">※都道府県名を正しく入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">ご住所</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="例：千代田区神田錦町3-18 寿ビル7F"
                        ref={register({required: true})} />
                    {errors.address && <p className="formError">※住所を入力してください</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">メッセージ本文</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="3"
                        ref={register({required: true})} />
                    {errors.message && <p className="formError">※メッセージを入力してください</p>}
                </div>
                <div className="text-center">
                    <input
                        type="button"
                        onClick={reset}
                        value="クリア"
                        className="btn btn-primary" />
                    <input
                        type="submit"
                        onClick={() => setModalShow(true)}
                        value="確認画面へ"
                        className="btn btn-primary" />
                </div>
            </form>
            {data &&
                <Confirm
                    show={modalShow}
                    values={getValues()}
                    onHide={() => setModalShow(false)}
                />
            }
            <div className="container mt-5 bottom-contents">
                <p>お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで</p>
                <p>TEL 03-5259-5231</p>
            </div>
        </div>
    )
}

export default Contacts