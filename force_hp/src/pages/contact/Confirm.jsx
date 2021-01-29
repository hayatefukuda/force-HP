import React from 'react'

const Confirmation = props => {
  const {values, hideConfirmation} = props
  //propsで渡ってきたvaluesを受けとって入力内容確認画面で表示
  return(
    <>
      <h2>確認画面</h2>
      <div className='contactBox'>
        <p>所属部署：{values.department}</p>
        <p>氏名：{values.name}</p>
        <p>社員番号：{values.registrationNumber}</p>
        <p>メールアドレス：{values.email}</p>
        <p>携帯電話番号：{values.tel}</p>
        <p>問い合わせ内容：{values.contact}</p>
        <div className='btnBox'>
          <input
            type='button'
            onClick={hideConfirmation}
            //クリックでstateをクリアし、入力内容確認画面コンポーネントを非表示にする
            value='閉じる'
            className='button'/>
        </div>
      </div>
    </>
  )
}

export default Confirmation