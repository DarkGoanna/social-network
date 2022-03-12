import { FC } from 'react'
import style from './Massage.module.sass'
import { massageType } from '../../../store/redusers/dialog-reduser'

const Massage:FC<{item: massageType}> = (props) => {
  return (
    <div className={style.massage}>
      <img src={props.item.image.url} alt="User"/>
      <p>{props.item.massage}</p>
    </div>
  )
}

export default Massage