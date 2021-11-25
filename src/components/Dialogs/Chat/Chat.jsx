import classes from './Chat.module.css'
import Massage from './Massage/Massage'
import React from 'react'
import {getNewValueAction, getUpdatedStateAction} from '../../../store/redusers/dialog-reduser'


const Chat = (props) => {
  
  const massages = props.massages.map(item => <Massage item={item} />)
  const newMassage = React.createRef();

  function setNewMassageValueToState() {
    const text = newMassage.current.value;
    const action = getNewValueAction(text);
    props.dispatch(action);
  }

  function updateState() {
    const action = getUpdatedStateAction();
    props.dispatch(action);
  }

  return (
    <div className={classes.chatWrapper}>

      <div className={classes.chatAddNew}>
        <textarea 
          ref={newMassage} 
          value={props.newMassageValue} 
          onChange={ setNewMassageValueToState } 
        />
        <button onClick={ updateState }>Send</button>
      </div>

      <div className={classes.chat}>
        { massages }
      </div>
      
    </div>
  )
}

export default Chat