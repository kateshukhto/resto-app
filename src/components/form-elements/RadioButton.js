import React from 'react'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function RadioButtons (props) {
  const { name, options, ...rest } = props
  return (
    <div className='form__options'>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <div className='form__options-item' key={option.key}>
                <input
                className='form__options-input'
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className='form__options-label' htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons;