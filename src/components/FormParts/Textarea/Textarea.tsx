import classNames from 'classnames'
import { FC } from 'react'
import style from '../FormParts.module.sass'

type TextareaType = {
  input: any
  meta: any
  placeholder: string
  type: string
  otherProps: any
}
const Textarea:FC<TextareaType> = ({input, meta, placeholder, type, ...otherProps}) => {
  // meta
  const {touched, valid, error} = meta;

  return (
    <div className={classNames(style.inputWrapper, {'hasError': (touched && !valid)})}>
      <textarea placeholder={placeholder} {...input}/>
      <p className={style.errorMessage}>{error}</p>
    </div>
  )
}

export default Textarea;