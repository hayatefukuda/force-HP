import React from 'react'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./confirm.scss"

import { useForm } from 'react-hook-form'
import { init, sendForm } from 'emailjs-com'
//emailjsのユーザーIDを貼り付け
init("user_UywqsHYGWUywnj1A1lwNk")

const Confirm = props => {
  const {values} = props

  const { register , handleSubmit } = useForm();

      const onSubmit = (data) => {
        //emailjsのテンプレートIDを貼り付け
        sendForm('default_service', 'template_hqke4pv', '#contact-form')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
        }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          確認画面
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>入力いただいた内容は以下の通りです。誤りがないかご確認ください。</h5>
        <div className='contactBox'>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">お名前</label>
              <input
                name="name"
                className="form-control"
                value={values.name}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="company">会社名・法人名・団体名(個人)</label>
              <input
                name="company"
                className="form-control"
                value={values.company}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="position">部署・役職等</label>
              <input
                name="position"
                className="form-control"
                value={values.position}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
              <input
                name="email"
                className="form-control"
                value={values.email}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="tel">電話番号</label>
              <input
                name="tel"
                className="form-control"
                value={values.tel}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="postalcode">郵便番号</label>
              <input
                name="postalcode"
                className="form-control"
                value={values.postalcode}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="prefectures">都道府県</label>
              <input
                name="prefectures"
                className="form-control"
                value={values.prefectures}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="address">住所</label>
              <input
                name="address"
                className="form-control"
                value={values.address}
                readOnly
                ref={register}
              />
          </div>
          <div className="form-group">
            <label htmlFor="message">お問い合わせ内容</label>
              <input
                name="message"
                className="form-control"
                value={values.message}
                readOnly
                ref={register}
              />
          </div>
          <input className="btn btn-secondary" onClick={props.onHide} value="訂正する" />
          <input className="btn btn-primary" type="submit" value="送信" />
        </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Confirm