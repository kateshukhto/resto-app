import React from "react";
import { Form } from "formik";
import FormControl from '../form-elements/FormControl';
import './form.scss';


const FormItem = ({radioOptions, checkboxOptions}) => {
  return (
    <Form className='form'>
      <h3 className='form__title'>Order registration</h3>
      <FormControl
        label='Name'
        name='name'
        control='input'
        type='text'
        placeholder='Enter your name'
      />
      <FormControl
        label='Email'
        name='email'
        control='input'
        type='email'
        placeholder='Enter your email'
      />
      <FormControl
        label='Phone'
        name='phone'
        control='input'
        type='text'
        placeholder='Enter your phone number'
        />
      <div className='form__container'>
        <div className='form__label'>Address</div>
          <FormControl
            control='radio'
            name='sity'
            options={radioOptions}
          />
          <FormControl
            name='address'
            control='input'
            type='text'
            placeholder='Enter your address'
          />
        </div>
      <FormControl
        control='textarea'
        label='Message'
        name='message'
        />
        <FormControl
          control='checkbox'
          name='agreement'
          options={checkboxOptions}
          />
        <button type='submit' className='menu__btn form__btn'>Send</button>
    </Form>
  )
}

export default FormItem;