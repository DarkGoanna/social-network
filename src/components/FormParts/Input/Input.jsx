import style from '../FormParts.module.sass';

const Input = ({input, meta, placeholder, type, ...otherProps}) => {
  // style
  const {inputWrapper, hasError, errorMessage} = style;
  // meta
  const {touched, valid, error} = meta;

  let containerClass = (touched && !valid) ? `${inputWrapper} ${hasError}` : inputWrapper;
  return (
    <div className={containerClass}>
      <input type={type} placeholder={placeholder} {...input}/>
      <p className={errorMessage}>{error}</p>
    </div>
  )
}

export default Input;