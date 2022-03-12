import Field from 'redux-form/lib/Field';
import reduxForm from 'redux-form/lib/reduxForm';
import Textarea from '../../FormParts/Textarea/Textarea';

const form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        name="newMassage" 
        placeholder="Новое сообщение"
        component={Textarea}
      />
      <button type="submit" className="btn">Send</button>
    </form>
  )
}

const ChatFormRedux = reduxForm({form: 'chat'})(form);

const ChatForm = ({updateState}) => {
  const submitForm = (values) => updateState(values.newMassage);

  return (
    <ChatFormRedux onSubmit={submitForm}/>
  )
}

export default ChatForm;