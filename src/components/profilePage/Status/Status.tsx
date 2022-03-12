import style from './Status.module.sass'
import classNames from 'classnames'
import { useState, useEffect, FC } from 'react'

type StatusType = {
  status: string
  updateStatus: (status:string) => void
  isOwner: boolean
}
const Status:FC<StatusType> = (props) => {
  // status
  const [status, setStatus] = useState<string>(props.status)
  const updateStatus = (event: any) => {
    setStatus(event.currentTarget.value)
  }

  // editMode
  const [editMode, toggleEditMode] = useState(false)
  const enableEditMode = () => {
    toggleEditMode(true)
  }
  const disableEditMode = () => {
    toggleEditMode(false)
    props.updateStatus(status)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  
  if (props.isOwner) {

    return (
      <fieldset className={classNames(style.statusWrapper, {'active': editMode})}>
        <legend>Status</legend>
        <div className={style.iconWrapper}>
          {editMode 
            ? <input type="text" autoFocus 
                onChange={updateStatus} 
                onBlur={disableEditMode} 
                value={status}
              /> 
            : <span onDoubleClick={enableEditMode}>{props.status}</span>
          }
        </div>
      </fieldset>
    )
  } else {
    return (
      <fieldset className={style.statusWrapper}>
        <legend>Status</legend>
        <span className={style.readOnly}>{props.status}</span>
      </fieldset>
    )
  }
}

export default Status