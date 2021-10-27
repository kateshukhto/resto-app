import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormItem from './form';
import emailjs from 'emailjs-com';
import {connect} from 'react-redux';
import {setOrdered, setLoading, setModal} from '../../actions';
import Modal from '../modal/modal';
import ModalInner from '../modal/modal-inner';
import { withRouter } from 'react-router';

const FormContainer = withRouter(({ history, ...props}) => {
  const {totalPrice, setModal, setLoading, setOrdered } = props

  const checkboxOptions = [
    {key: 'I give my consent to the processing of the above personal data', value: 'agreement'}
  ]

  const radioOptions = [
    { key: 'Minsk', value: 'Minsk' },
    { key: 'Moscow', value: 'Moscow' },
  ]

 useEffect(() => {
  return () => {
    setOrdered(null)
    setModal(false)
  }
 }, [])

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

  const validationSchema = Yup.object().shape(
    {
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
    }
  )
  function sendEmail(object) {
    emailjs.send('service_72acdwd', 'template_7pkuwso', 
    object, 'user_mWvy3foL57qSa8IZwXNAe')
    .then(() => { 
      setOrdered(true)
    })
    .catch(() => {
      setOrdered(false)
    })
    .finally(() => {
      setTimeout(() => {
        history.push('/')
      }, 5000)
    })
  }

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setLoading(true)
        setModal(true)
        sendEmail(values)
        actions.resetForm()
      }}
    >
      {
        () => (
          <FormItem checkboxOptions={checkboxOptions} radioOptions={radioOptions}/>
        )
      } 
    </Formik>
      <Modal>
        <ModalInner/>
      </Modal>
    </>
  )
})

const mapStateToProps = ({totalPrice}) => {
  return {
    totalPrice
  }
}

export default connect(mapStateToProps, { setOrdered, setLoading, setModal})(FormContainer);