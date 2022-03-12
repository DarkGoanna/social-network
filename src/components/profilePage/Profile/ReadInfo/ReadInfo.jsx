import style from '../Profile.module.sass'
import edit from '../../../../images/edit.svg'

const ReadInfo = ({profile, contactItems, isOwner, editField}) => {
  const {
    aboutMe, 
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  } = profile

  return (
    <div className={style.inner}>
      {isOwner &&
        <button className={style.edit} onClick={editField}>
          <img src={edit} alt="edit" />
        </button>
      }
      {aboutMe &&
        <fieldset>
          <legend>About me</legend>
          <div className={style.aboutme}>{aboutMe}</div>
        </fieldset>
      }
      {lookingForAJob &&
        <fieldset>
          <legend>Job info</legend>
          <div className={style.job}>
            <div>
              <strong>Status:</strong>
              {lookingForAJob ? 'I am looking for a new job' : 'I have already found my dream job'}
            </div>
            <div>
              <strong>Description of my professional skils:</strong>
              {lookingForAJobDescription}
            </div>
          </div>
        </fieldset>
      }
      {contacts &&
        <fieldset>
          <legend>Contacts</legend>
          <ul className={style.contacts}>
            {!!contactItems.length 
              ? contactItems
              : <li className={style.item}>there is no contact</li>
            }
          </ul>
        </fieldset>
      }
    </div>
  )
}

export default ReadInfo