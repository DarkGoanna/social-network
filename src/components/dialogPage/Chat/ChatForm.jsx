import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import { required, maxlength } from "../../../utility/validations/validations";
import Textarea from "../../FormParts/Textarea/Textarea";

const maxlengthValidator = maxlength(50);

const form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        name="newMassage" 
        placeholder="Новое сообщение"
        component={Textarea} 
        validate={[required, maxlengthValidator]}
      />
      <button type="submit">Send</button>
    </form>
  )
}

const ChatFormRedux = reduxForm({form: 'chat'})(form);

const ChatForm = (props) => {
  // props
  const {updateState} = props;

  const submitForm = (values) => {
    updateState(values.newMassage);
  }
  return (
    <ChatFormRedux onSubmit={submitForm} />
  )
}

export default ChatForm;