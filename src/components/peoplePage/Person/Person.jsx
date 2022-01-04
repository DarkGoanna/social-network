import style from './Person.module.sass';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const Person = (props) => {
  // style
  const {photo} = style;

  // props 
  const {id, name, photos, followed} = props.personData;
  const {follow, unfollow, changingFolowingStatus, changeFolowingStatus} = props;


  const isDisabled = changingFolowingStatus.some(disabled => disabled === id);
  const followButton = followed ? 

    <button onClick={() => {
      changeFolowingStatus(true, id);
      usersAPI.unfollow(id)
        .then(data => {
          if (data.resultCode === 0) {
            unfollow(id);
          }
          changeFolowingStatus(false, id);
        })
    }} disabled={isDisabled} >{'Отписаться'}</button> : 

    <button onClick={() => {
      changeFolowingStatus(true, id);
      usersAPI.follow(id)
        .then(data => {
          if (data.resultCode === 0) {
            follow(id);
            changeFolowingStatus(false, id);
          }
        })
    }} disabled={isDisabled} >{'Подписаться'}</button> ;

  return (
    <div>
      <NavLink to={`/profile/${id}`}>
        <div className={photo}>
            <img src={photos.small ? photos.small : ''} alt="" />
        </div>
      </NavLink>
      <p>{name}</p>
      {followButton}
    </div>
  )
}

export default Person;