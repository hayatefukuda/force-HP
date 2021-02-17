import React from 'react'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormConclusion = props => {

    const reload = () => {
        window.location.reload()
    }

  return (
    <Modal
      {...props}
      size="mg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          送信完了
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container mt-5 contents">
            <p>この度はお問合せメールをお送りいただきありがとうございます。</p>
            <p>後ほど、担当よりご連絡をさせていただきます。</p>
            <p>今しばらくお待ちくださいますようよろしくお願い申し上げます。</p>
        </div>
        <div className="container mt-5 contents">
            <p>なお、しばらくたっても弊社より返信、返答がない場合は、</p>
            <p>お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。</p>
        </div>
        <div className="container mt-5 contents">
            <p>その際は、お手数ですが再度送信いただくか、</p>
            <p>お電話( 03-5259-5231 )までご連絡いただけますと幸いです。</p>
        </div>
        <div className="container mt-5 contents">
            <p>何かご不明な点等ございましたら、お気軽にお問合せ下さい。</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={reload}>閉じる</button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormConclusion