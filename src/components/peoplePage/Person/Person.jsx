import style from './Person.module.sass';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../../api/api';

const Person = (props) => {
  // style
  const {photo} = style;

  // props 
  const {id, name, photos, followed} = props.personData;
  const {follow, unfollow} = props;

  const photoURL = photos.small ? photos.small : '';

  const followButton = followed ? 

  <button onClick={ () => {
    usersAPI.unfollow(id).then(data => {
      if (data.resultCode === 0) {
        unfollow(id);
      }
    })
  } }>{'Отписаться'}</button> : 

  <button onClick={ () => {
    usersAPI.follow(id).then(data => {
      if (data.resultCode === 0) {
        follow(id);
      }
    })
  } }>{'Подписаться'}</button> ;

  return (
    <div>
      <NavLink to={`/profile/${id}`}>
        <div className={photo}>
            <img src={photoURL} alt="" />
        </div>
      </NavLink>
      <p>{name}</p>
      {followButton}
    </div>
  )
}

export default Person;