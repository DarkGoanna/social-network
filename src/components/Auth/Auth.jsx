import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import { required, maxlength } from "../../utility/validations/validations";
import Input from "../FormParts/Input/Input";

const maxlengthValidator = maxlength(5);

const form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        type="text" 
        name="Name" 
        placeholder="Name" 
        component={Input} 
        validate={[required]}
      />
      <Field 
        type="password" 
        name="Password" 
        placeholder="Password" 
        component={Input} 
        validate={[required, maxlengthValidator]}
      />
      <button type="submit">Отправить</button>
    </form>
  )
}

const AuthFormRedux = reduxForm({form: 'auth'})(form);

const Auth = (props) => {
  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Авторизируйтейсь</h1>
      <AuthFormRedux onSubmit={submitForm}/>
    </div>
  )
}

export default Auth;