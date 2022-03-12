import classNames from 'classnames'
import { FC } from 'react'
import style from '../FormParts.module.sass'

type InputType = {
  input: any
  meta: any
  placeholder: string
  type: string
  otherProps: any
}
const Input:FC<InputType> = ({input, meta, placeholder, type, ...otherProps}) => {
  // meta
  const {touched, valid, error} = meta;

  return (
    <div className={classNames(style.inputWrapper, {'hasError': (touched && !valid)})}>
      <input type={type} placeholder={placeholder} {...input}/>
      <p className={style.errorMessage}>{error}</p>
    </div>
  )
}

export default Input;