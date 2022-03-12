import ReadInfo from './ReadInfo';
import style from '../Profile.module.sass';

const ReadInfoContainer = ({profile, isOwner, setEditMode}) => {
  const {contacts} = profile;

  const editField = () => {
    setEditMode(true)
  }

  // элементы списка
  if(contacts) {
    let contactItems = Object.entries(contacts).filter(item => item[1]);
    
    contactItems = contactItems.map(item => {
      return (
        <li key={item[1]} className={style.item}>
          <strong>{item[0]}:</strong>
          <span>{item[1]}</span>
        </li>
      )
    });
    
    return (
      <ReadInfo 
        profile={profile}
        contactItems={contactItems} 
        isOwner={isOwner} 
        editField={editField} 
      />
    )
  } else {
    return null;
  }
}

export default ReadInfoContainer;