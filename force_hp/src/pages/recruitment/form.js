import React from "react"

import "./form.scss"

const Form = () => {
    return (
        <div className="form">
            <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName">お名前</label>
                    <input type="name" class="form-control" id="inputName" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputBelongs">会社名・法人名・団体名 ※個人のお客様は「個人」とご記入ください。</label>
                    <input type="company" class="form-control" id="inputBelongs" />
                </div>
            </div>
            <div class="form-group">
                <label for="inputDepartment">部署・役職</label>
                <input type="text" class="form-control" id="inputDepartment" />
            </div>
            <div class="form-group">
                <label for="inputEmail">メールアドレス</label>
                <input type="Email" class="form-control" id="inputEmail" />
            </div>
            <div class="form-group">
                <label for="inputPhoneNum">電話番号</label>
                <input type="number" class="form-control" id="inputPhoneNum" />
            </div>
            <div class="form-group">
                <label for="inputPrefectures">都道府県</label>
                <input type="text" class="form-control" id="inputPrefectures" />
            </div>
            <div class="form-group">
                <label for="inputAddress">ご住所</label>
                <input type="address" class="form-control" id="inputAddress" />
            </div>
            <div class="form-group">
                <label for="inputMessage">メッセージ本文</label>
                <input type="text" class="form-control" id="inputMessage" height="100px"/>
            </div>
            <button type="submit" class="btn btn-primary">確認画面へ</button>
            </form>
        </div>
    )
}


export default Form;