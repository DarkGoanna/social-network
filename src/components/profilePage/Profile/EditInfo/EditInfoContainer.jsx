import Input from '../../../FormParts/Input/Input';
import Field from 'redux-form/lib/Field';
import EditInfo from './EditInfo';
import { connect } from 'react-redux';
import style from '../Profile.module.sass';
import { setProfileInfo } from '../../../../store/redusers/profile-reduser';

const EditInfoContainer = ({profile, isOwner, setEditMode, setProfileInfo, initialValues }) => {
  const {contacts} = profile;
  
  const saveInfo = (data) => {
    setProfileInfo(data);
    setEditMode(false);
  }

  const setActive = event => {
    const {target} = event;
    const fieldset = target.closest('fieldset');
    if (fieldset) {
      fieldset.classList.toggle('active');
    }
    target.classList.toggle('active');
  }

  // элементы списка
  const contactItems = Object.entries(contacts).map(item => {
    return (
      <li className={style.item}>
        <strong>{item[0]}:</strong>
        <Field 
          type="text" 
          name={'contacts.' + item[0]} 
          component={Input}
          onFocus={setActive} 
          onBlur={setActive}
        />
      </li>
    )
  });

  return (
    <EditInfo 
      initialValues={initialValues}
      contactItems={contactItems} 
      isOwner={isOwner} 
      onSubmit={saveInfo}
      setActive={setActive}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, {setProfileInfo})(EditInfoContainer);