import Field from 'redux-form/lib/Field'
import reduxForm from 'redux-form/lib/reduxForm'
import { required, maxlength } from '../../utility/validations/validations'
import Input from '../FormParts/Input/Input'
import style from '../FormParts/FormParts.module.sass'

const maxlengthValidator = maxlength(25);

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        type="email" 
        name="email" 
        placeholder="Email" 
        component={Input} 
        validate={[required]}
      />
      <Field 
        type="password" 
        name="password" 
        placeholder="Password" 
        component={Input} 
        validate={[required, maxlengthValidator]}
      />
      {props.error &&
        <div className={style.submitError}>
          {props.error}
        </div>
      }
    <button type="submit">Отправить</button>
    </form>
  )
}

const AuthFormRedux = reduxForm({form: 'auth'})(Form);
export default AuthFormRedux;

