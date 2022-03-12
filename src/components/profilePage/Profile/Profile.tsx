import { FC, useState } from 'react'
import style from './Profile.module.sass'
import Status from '../Status/Status'
import EditInfo from './EditInfo/EditInfoContainer'
import ReadInfo from './ReadInfo/ReadInfoContainer'
import classNames from 'classnames'
import { currentProfileType } from './ProfileContainer'

type ProfileType = {
  currentProfile: currentProfileType
  updateStatus: (status:string) => void
  isOwner: boolean
  setPhoto: (file:string) => void
}
const Profile:FC<ProfileType> = ({currentProfile, updateStatus, isOwner, setPhoto}) => {
  const loadPhoto = (event: any) => {
    setPhoto(event.target.files[0])
  }

  // edit mode for owner
  const [editMode, setEditMode] = useState(false)

  if (currentProfile) {
    const {
      fullName, 
      status, 
      photos,
    } = currentProfile;

    return (
      <div className={style.profile}>
        <div className={style.header}>

          <div className={classNames(style.photo, {'upload': isOwner})}>
            {photos && <img src={photos.large && photos.large} alt={fullName} />}
            {isOwner && <input type="file" accept=".jpg, .jpeg, .png" onChange={loadPhoto}/>}
          </div>

          <div className={style.description}>
            <h1>{fullName}</h1>
            {status && <Status status={status} updateStatus={updateStatus} isOwner={isOwner}/>}
          </div>

        </div>
        <div className={style.body}>
          {editMode
             ? <EditInfo 
                initialValues={currentProfile} 
                profile={currentProfile} 
                isOwner={isOwner} 
                setEditMode={setEditMode}
              />
             : <ReadInfo isOwner={isOwner} profile={currentProfile} setEditMode={setEditMode}/>
          }
        </div>
      </div>
    )
  } else {
    return <div>Загрузка...</div>
  }
}

export default Profile;