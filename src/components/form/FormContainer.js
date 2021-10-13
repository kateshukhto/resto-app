import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormControl';
import './form.scss';
import emailjs from 'emailjs-com';
import {connect} from 'react-redux';
import {setOrdered, setLoading, setModal} from '../../actions';
import Loader from '../../assets/Loader';

const FormContainer = ({ setOrdered, totalPrice, setLoading, isLoading, setModal}) => {
  const radioOptions = [
    { key: 'Minsk', value: 'Minsk' },
    { key: 'Moscow', value: 'Moscow' },
  ];

  const checkboxOptions = [
    {key: 'I give my consent to the processing of personal data', value: 'agreement'}
  ]

  const initialValues= {
    name: '',
    email: '',
    phone: '',
    sity: '',
    address: '',
    message: '',
    agreement: false,
    price: totalPrice
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    phone: Yup.string()
      .min(9, 'Must be at lest 9 characters')
      .required('Required'),
    sity: Yup.string().required('Choose your sity'),
    address: Yup.string().required('Required'),
    agreement: Yup.bool()
      .oneOf([true], 'You must accept the conditions')
  })


  function sendEmail(object) {
    emailjs.send('service_72acdwd', 'template_7pkuwso', 
    object, 'user_mWvy3foL57qSa8IZwXNAe')
    .then(() => {
      setLoading(false)
      setOrdered(true)
      setModal(false)
    })
    .then(() => alert('Your order is accepted! Check your email.'))
    .catch(() => alert('Something went wrong. Try again.'))
  }

  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setLoading(true)
        sendEmail(values)
        actions.resetForm()
      }}
    >
      {
        isLoading ? <Loader/> : () => (
          <Form className='form'>
            <h3 className='form__title'>Order registration</h3>
            <FormikControl
              label='Name'
              name='name'
              control='input'
              type='text'
              placeholder='Enter your name'
            />
            <FormikControl
              label='Email'
              name='email'
              control='input'
              type='email'
              placeholder='Enter your email'
            />
            <FormikControl
              label='Phone'
              name='phone'
              control='input'
              type='text'
              placeholder='Enter your phone number'
            />
            <div className='form__container'>
              <div className='form__label'>Address:</div>
              <FormikControl
                control='radio'
                name='sity'
                options={radioOptions}
              />
              <FormikControl
                name='address'
                control='input'
                type='text'
                placeholder='Enter your address'
              />
            </div>
            <FormikControl
              control='textarea'
              label='Message'
              name='message'
            />
            <FormikControl
              control='checkbox'
              name='agreement'
              options={checkboxOptions}
            />
            <button type='submit' className='menu__btn form__btn'>Send</button>
          </Form>
        )
      } 
    </Formik>
  )
}

const mapStateToProps = ({totalPrice, isLoading}) => {
  return {
    totalPrice,
    isLoading
  }
}



export default connect(mapStateToProps, { setOrdered, setLoading, setModal})(FormContainer);