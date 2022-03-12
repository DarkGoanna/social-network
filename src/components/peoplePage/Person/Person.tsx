import style from './Person.module.sass'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../api/api'
import { FC } from 'react'

type followType = {
  resultCode: number
  messages: Array<string>
  data: any
}
type PersonType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  changingFolowingStatus: Array<number>
  changeFolowingStatus: (inProgress:boolean, personID:number) => void
  personData: personDataType
}
type personDataType = {
  id: number
  name: string
  photos: {
    small: null | string,
    large: null | string
  }
  followed: boolean
}
const Person:FC<PersonType> = (props) => {
  // props 
  const {id, name, photos: {small: img}, followed} = props.personData;
  const {follow, unfollow, changingFolowingStatus, changeFolowingStatus} = props;


  const isDisabled = changingFolowingStatus.some((disabled:number) => disabled === id);
  const followButton = followed 
    ? 
      <button className='btn unfollow' onClick={() => {
        changeFolowingStatus(true, id);
        usersAPI.unfollow(id)
          .then((data:followType) => {
            if (data.resultCode === 0) {
              unfollow(id);
            }
            changeFolowingStatus(false, id);
          })
      }} disabled={isDisabled} >{'Отписаться'}</button> 
    : 
      <button className='btn follow' onClick={() => {
        changeFolowingStatus(true, id);
        usersAPI.follow(id)
          .then((data:followType) => {
            if (data.resultCode === 0) {
              follow(id);
              changeFolowingStatus(false, id);
            }
          })
      }} disabled={isDisabled} >{'Подписаться'}</button> 
    ;

  return (
    <div className={style.persone}>
      <NavLink to={`/profile/${id}`}>
        <div className={style.photo}>
            <img src={img ? img : ''} alt="" />
        </div>
      </NavLink>
      <p>{name}</p>
      <div className={style.button}>
        {followButton}
      </div>
    </div>
  )
}

export default Person;