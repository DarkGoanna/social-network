import style from './Person.module.sass';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Person = (props) => {
  // style
  const {photo} = style;

  // props 
  const {id, name, photos, followed} = props.personData;
  const {follow, unfollow} = props;

  const photoURL = photos.small ? photos.small : '';

  const followButton = followed ? 

  <button onClick={ () => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      'API-KEY': 'dba584c2-162e-4040-93e2-d7fb7943260c',
      headers: {
        'API-KEY': 'dba584c2-162e-4040-93e2-d7fb7943260c'
      }
    }).then(response => {
      if (response.data.resultCode === 0) {
        unfollow(id);
      }
    })
    unfollow(id);
  } }>{'Отписаться'}</button> : 

  <button onClick={ () => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
      withCredentials: true,
      headers: {
        'API-KEY': 'dba584c2-162e-4040-93e2-d7fb7943260c'
      }
    }).then(response => {
      if (response.data.resultCode === 0) {
        follow(id);
      }
    })
  } }>{'Подписаься'}</button> ;

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