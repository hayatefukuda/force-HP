import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_UywqsHYGWUywnj1A1lwNk");

const Test = () => {

    const { register, handleSubmit } = useForm();

      const onSubmit = (data) => {
        sendForm('default_service', 'template_ml477qf', '#contact-form')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
        }

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
  <input type='text' name='user_name' ref={register} placeholder='Name' />
  <br/>
  <input type='email' name='user_email' ref={register} placeholder='Email' />
  <br/>
  <textarea name='message' ref={register} placeholder='Message'/>
  <br/>
  <input type='submit' value='Send' />
  {/* <input type='hidden' name='contact_number' value={contactNumber} /> */}
</form>
    </div>
  );
}
export default Test