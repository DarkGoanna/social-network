import style from './Chat.module.sass'
import Massage from '../Massage/Massage'
import ChatForm from './ChatForm'
import { FC } from 'react'
import { massageType } from '../../../store/redusers/dialog-reduser'

type ChatType = {
  massages: Array<massageType>
  updateState: (newMassage:string) => void
}
const Chat:FC<ChatType> = (props) => {
  // props
  let {massages: massagesData, updateState} = props;
  
  const massages = massagesData.map((item:massageType, i:number) => <Massage key={i} item={item} />);

  return (
    <div className={style.wrapper}>

      <div className={style.inner}>
        {massages}
      </div>
      
      <div className={style.massage}>
        <ChatForm updateState={updateState}/>
      </div>
      
    </div>
  )
}

export default Chat