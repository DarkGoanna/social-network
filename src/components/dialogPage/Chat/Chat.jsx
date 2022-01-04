import React from 'react'
import style from './Chat.module.sass'
import Massage from '../Massage/Massage'
import ChatForm from './ChatForm'

const Chat = (props) => {
  // styles
  let {wrapper, massage, inner} = style;

  // props
  let {
    massages: massagesData,
    updateState,
  } = props;
  
  const massages = massagesData.map(item => <Massage item={item} />);

  return (
    <div className={wrapper}>

      <div className={massage}>
        <ChatForm updateState={updateState}/>
      </div>

      <div className={inner}>
        {massages}
      </div>
      
    </div>
  )
}

export default Chat