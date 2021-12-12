import style from './Profile.module.sass';

const Profile = (props) => {
  // style
  const {profilePage, description} = style;
  
  // props
  const {currentProfile} = props;

  if (currentProfile) {
    const {photos, fullName, aboutMe} = currentProfile;
    
    return (
      <div className={profilePage}>
        <img src={photos.large} alt="" />
        <div className={description}>
          <h2>{fullName}</h2>
          <p>{aboutMe}</p>
        </div>
      </div>
    )
  } else {
    return <div>ничего нет</div>
  }
}

export default Profile;