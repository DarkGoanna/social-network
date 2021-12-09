import React from 'react'
import style from './Chat.module.sass'
import Massage from '../Massage/Massage'

const Chat = (props) => {
  // styles
  let {wrapper, massage, inner} = style;

  // props
  let {
    massages: massagesData,
    newMassageValue: value,
    updateState,
    setNewMassageValueToState,
  } = props;
  
  const massages = massagesData.map(item => <Massage item={item} />);
  
  const textarea = React.createRef();

  function updateValue() { setNewMassageValueToState(textarea.current.value) };

  function sendMassage() { updateState() };

  return (
    <div className={wrapper}>

      <div className={massage}>
        <textarea 
          ref={textarea} 
          value={value} 
          onChange={updateValue} 
        />
        <button onClick={sendMassage}>Send</button>
      </div>

      <div className={inner}>
        {massages}
      </div>
      
    </div>
  )
}

export default Chat