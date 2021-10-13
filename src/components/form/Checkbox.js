import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Checkbox(props){
  const { name, options, ...rest } = props
  return (
    <div className='checkbox'>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  className='checkbox__input'
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                />
                <label className='checkbox__label' htmlFor={option.value}>
                  {option.key}
                  </label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
} 

export default Checkbox;