import style from '../Profile.module.sass'
import save from '../../../../images/save.svg'
import Input from '../../../FormParts/Input/Input'
import Textarea from '../../../FormParts/Textarea/Textarea'
import Field from 'redux-form/lib/Field'
import reduxForm from 'redux-form/lib/reduxForm'

const EditInfo = ({contactItems, isOwner, setActive, ...props}) => {
  return (
    <form className={style.inner} onSubmit={props.handleSubmit}>
      {isOwner &&
        <button className={style.edit}>
          <img src={save} alt="edit" />
        </button>
      }
      <fieldset>
        <legend>My name</legend>
        <Field 
          name="fullName" 
          type="text"
          placeholder="My name" 
          component={Input} 
          onFocus={setActive} 
          onBlur={setActive}
        />
      </fieldset>

      <fieldset>
        <legend>About me</legend>
        <Field 
          name="aboutMe" 
          placeholder="About me" 
          component={Textarea}
          onFocus={setActive} 
          onBlur={setActive}
        />
      </fieldset>

      <fieldset>
        <legend>Job info</legend>
        <div className={style.job}>
          <div>
            <label htmlFor="lookingForAJob">
              <strong>I am currently looking for a job</strong>
              <div className={style.inline}>
                <Field 
                  name="lookingForAJob" 
                  type="checkbox" 
                  component={Input} 
                />
              </div>
            </label>
          </div>
          <div> 
            <label htmlFor="lookingForAJobDescription">
              <strong>My professional skills</strong>
              <Field 
                name="lookingForAJobDescription" 
                placeholder="My professional skills" 
                component={Textarea} 
                onFocus={setActive} 
                onBlur={setActive}
              />
            </label>
          </div>
        </div>
      </fieldset>
      
      <fieldset>
        <legend>Contacts</legend>
        <ul className={style.contacts}>{contactItems}</ul>
      </fieldset>
    </form>
  )
}

export default reduxForm({form: 'edit-profile'})(EditInfo)