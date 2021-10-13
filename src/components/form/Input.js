import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props){
  const {label, name, ...rest} = props;
  return (
    <div className='form__container'>
      <label className='form__label' htmlFor={name}>{label}</label>
      <Field className='form__input' id={name} name={name} {...rest}/>
      <ErrorMessage component={TextError} name={name}/>
    </div>
  )
}

export default Input;