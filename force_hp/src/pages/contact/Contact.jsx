import React, {useState} from "react"
import {Element, scroller} from "react-scroll"
import useForm from "react-hook-form"
import Confirmation from "./Confirm"
import ContactImage from "../../images/force/contact.png"

import "./contact.scss"

const Contact = () => {
  const {register, handleSubmit, watch, reset, errors, getValues} = useForm()
  //useFormを呼び出して使いたいメソッドを書く
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)
  //isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  //isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
  const hideConfirmation = () => setIsConfirmationVisible(false)
  //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
  const onSubmitData = () => setIsConfirmationVisible(true)
  //submitボタンを押した時、入力内容確認画面を表示させる
  const scrollToTarget = () => {
  //にゅるっと移動させる関数を宣言
    scroller.scrollTo('scrollTarget', {
      duration: 800,
      delay: 0,
      smooth: 'easeOutQuint'
    })
  }

  const Department = watch('department')
  const Name = watch('name')
  const Email = watch('email')
  const Contact = watch('contact')
  //watchに各フォーム部品のnameの値を引数で渡すとでタイムリーで入力状態を監視してる

  return(
    <>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmitData)} className='contactBox'>
      {/*onSubmit(入力フォームの送信ボタンがクリックされた時に発生するイベント)で入力された値をhandleSubmitで取り出す*/}
        <label htmlFor='department'>所属部署
          <span className={`requiredIcon ${Department ? 'is-ok' : 'is-required'}`}>
          {Department ? 'OK' :'必須'}
          </span>
        </label>
        <select name='department' ref={register({ required: true })}>{/*入力必須項目*/}
          <option value='' hidden>所属部署を選択</option>
          <option value='クリエイティブ戦略部'>クリエイティブ戦略部</option>
          <option value='名古屋開発部'>名古屋開発部</option>
          <option value='営業部'>営業部</option>
          <option value='マーケティング部'>マーケティング部</option>
        </select>
        {errors.department && <p className='formError'>所属部署を選択してください</p>}{/*validationが通らなければerrorがtrueになる*/}
        <label htmlFor='name'>氏名
          <span className={`requiredIcon ${Name ? 'is-ok' : 'is-required'}`}>{/*nameが入力されてたらtrue*/}
            {Name ? 'OK' :'必須'}
          </span>
        </label>
        <input
          name='name'
          placeholder='氏名を入力'
          ref={register({required: true})} />
          {errors.name && <p className='formError'>名字を入力して下さい</p>}{/*nameが正しく入力されていない時に表示される*/}
        <label htmlFor='email'>メールアドレス
          <span className={`requiredIcon ${Email && !errors.email ? 'is-ok': 'is-required'}`}>
            {Email && !errors.email ? 'OK' :'必須' }
          </span>
        </label>
        <input
          type='email'
          name='email'
          placeholder='メールアドレスを入力'
          ref={register({
          required: true,
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          })}
        />
        {errors.email && <p className='formError'>メールアドレスを正しく入力して下さい</p>}
        <label htmlFor='contact'>問い合わせ内容
          <span className={`requiredIcon ${Contact && !errors.contact ? 'is-ok': 'is-required'}`}>
            {Contact && !errors.contact ? 'OK' :'必須' }
          </span>
        </label>
        <textarea
          name='contact'
          placeholder='問い合わせ内容を入力'
          ref={register({
              required: true,
              rows: 8,
              minLength: 1,
              maxLength: 300
            })}
        />
        {errors.contact && <p className='formError'>問い合わせ内容を300文字以内で入力して下さい</p>}
        <div className='btnBox'>
          <input
            type='button'
            onClick={reset}//入力内容もstateもクリア
            value='クリア'
            className='button'/>
          <input
            type='submit'
            value='入力内容を確認'
            onClick={scrollToTarget}//移動先ターゲットにした<Element name='scrollTarget'/>までにゅる移動
            className='button'/>
        </div>
      </form>
      <Element name='scrollTarget'/>
      {isConfirmationVisible &&//trueの時だけ入力内容確認画面を表示
        <Confirmation//入力内容確認画面コンポーネント
          values={getValues()}//getValues()でフォーム全体のデータを返してくれる！！
          hideConfirmation={hideConfirmation}//入力内容確認画面表示・非表示のstateをConfirmationに渡す
        />
      }
    </>
  )
}
// const Contact = () => {
//     const {register, handleSubmit, watch, reset, errors, getValues} = useForm()

//     const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

//     const hideConfirmation = () => setIsConfirmationVisible(false)

//     const onSubmitData = () => setIsConfirmationVisible(true)

//     const scrollToTarget = () => {
//         scroller.scrollTo('scrollTarget', {
//             duration: 800,
//             delay: 0,
//             smooth: 'easeOutQuint'
//         })
//     }

//     // const Name = watch('name')
//     // const Company = watch('company')
//     // const Position = watch('position')
//     // const Email = watch('email')
//     // const Tel = watch('tel')
//     // const PostalCode = watch('postalcode')
//     // const Prefectures = watch('prefectures')
//     // const Address = watch('address')
//     // const Message = watch('message')

//     return (
//         <div>
//             <div className="heading">
//                 <img src={ ContactImage } className="img-fluid" alt=""/>
//                 <p>お問い合わせ</p>
//             </div>
//             <div className="container mt-5 contents">
//                 <p>弊社に関してのご不明な点はこちらのフォームにて承ります。</p>
//                 <p>下記フォームにご記入いただきました皆様の個人情報は、「個人情報保護ポリシー」に基づき取り扱わせていただきます。</p>
//                 <p>また、ご記入いただきました個人情報は、お問い合わせへご回答するのみに利用する目的で収集いたします。</p>
//                 <p className="required-text">※すべて必須項目です。</p>
//             </div>
//                 <form className="container" onSubmit={handleSubmit(onSubmitData)}>
//                     <div className="form-group">
//                         <label htmlFor="name">お名前</label>
//                         <input
//                             name="name"
//                             type="text"
//                             className="form-control"
//                             placeholder="例：山田　花子"
//                             ref={register({required: true})} />
//                         {errors.name && <p className="formError">名前を入力してください</p>}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="company">会社名・法人名・団体名 ※個人のお客様は「個人」とご記入ください</label>
//                         <input
//                             name="company"
//                             type="text"
//                             className="form-control"
//                             placeholder="例：〇〇株式会社"
//                             ref={register({required: true})} />
//                         {errors.company && <p className="formError">会社名・法人名・団体名、又は「個人」を入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="position">部署・役職等</label>
//                         <input
//                             name="position"
//                             type="text"
//                             className="form-control"
//                             placeholder="例：営業部部長"
//                             ref={register({required: true})} />
//                         {errors.position && <p className="formError">部署・役職等を入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="email">メールアドレス</label>
//                         <input
//                             name="email"
//                             type="email"
//                             className="form-control"
//                             placeholder="例：exzmple@example.com"
//                             ref={register({
//                                 required: true,
//                                 value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
//                             })} />
//                         {errors.email && <p className="formError">メールアドレスを正しく入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="tel">電話番号</label>
//                         <input
//                             name="tel"
//                             type="tel"
//                             className="form-control"
//                             placeholder="例：03-5259-5231"
//                             ref={register({
//                                 required: true,
//                                 value: /^0\d{2,3}-\d{1,4}-\d{4}$/
//                             })} />
//                         {errors.tel && <p className="formError">電話番号を正しく入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="postalcode">郵便番号(ハイフンあり)</label>
//                         <input
//                             name="postalcode"
//                             type="number"
//                             className="form-control"
//                             placeholder="例：101-0054"
//                             ref={register({
//                                 required: true,
//                                 value: /^\d{3}-\d{4}$/ 
//                             })} />
//                         {errors.postalcode && <p className="formError">郵便番号を正しく入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="prefectures">都道府県</label>
//                         <input
//                             name="prefectures"
//                             type="text"
//                             className="form-control"
//                             placeholder="例：東京都"
//                             ref={register({
//                                 required: true,
//                                 value: /^(東京都|北海道|(京都|大阪)府|.{2,3}県)$/
//                             })} />
//                         {errors.prefectures && <p className="formError">都道府県名を正しく入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="address">ご住所</label>
//                         <input
//                             name="address"
//                             type="text"
//                             className="form-control"
//                             placeholder="例：千代田区神田錦町3-18 寿ビル7F"
//                             ref={register({required: true})} />
//                         {errors.address && <p className="formError">住所を入力してください</p>}
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="message">メッセージ本文</label>
//                         <textarea
//                             name="message"
//                             className="form-control"
//                             rows="3"
//                             ref={register({required: true})} />
//                         {errors.message && <p className="formError">メッセージを入力してください</p>}
//                     </div>
//                     <div className="text-center">
//                         <input
//                             type="button"
//                             onClick={reset}
//                             value="クリア"
//                             className="btn btn-primary" />
//                         <button
//                             type="submit"
//                             className="btn btn-primary"
//                             onClick={scrollToTarget}>
//                                 確認画面へ
//                         </button>
//                     </div>
//                 </form>
//                 <Element name="scrollTarget" />
//                 {isConfirmationVisible &&
//                     <Confirmation
//                         values={getValues()}
//                         hideConfirmation={hideConfirmation}
//                     />
//                 }
//             <div className="container mt-5 bottom-contents">
//                 <p>お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで</p>
//                 <p>TEL 03-5259-5231</p>
//             </div>
//         </div>
//     )
// }

export default Contact