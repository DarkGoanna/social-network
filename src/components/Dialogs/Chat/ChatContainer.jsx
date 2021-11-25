import React from 'react'
import {getNewValueAction, getUpdatedStateAction} from '../../../store/redusers/dialog-reduser'
import Chat from './Chat'


const ChatContainer = (props) => {
  const state = props.store.getState().dilogsPage;
  const dispatch = props.store.dispatch;
  
  function setNewMassageValueToState(text) {
    const action = getNewValueAction(text);
    dispatch(action);
  }

  function updateState() {
    const action = getUpdatedStateAction();
    dispatch(action);
  }

  return (<Chat 
    setNewMassageValueToState={setNewMassageValueToState} 
    updateState={updateState} 
    massages={state.massages}
    newMassageValue={state.newMassageValue}
  />)
}
export default ChatContainer