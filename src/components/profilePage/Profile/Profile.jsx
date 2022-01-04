import style from './Profile.module.sass';
import Status from '../Status/Status'

const Profile = (props) => {
  // style
  const {profilePage, description} = style;
  
  // props
  const {currentProfile, updateStatus} = props;

  if (currentProfile) {
    const {photos, fullName, aboutMe, status} = currentProfile;
    
    return (
      <div className={profilePage}>
        {/* <img src={photos.large ? photos.large : ''} alt="" /> */}
        <div className={description}>
          <h2>{fullName}</h2>
          <p>{aboutMe}</p>
          <Status status={status} updateStatus={updateStatus}/>
        </div>
      </div>
    )
  } else {
    return <div>ничего нет</div>
  }
}

export default Profile;