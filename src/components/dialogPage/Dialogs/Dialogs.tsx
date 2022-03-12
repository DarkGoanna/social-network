import style from './Dialogs.module.sass'
import Chat from '../Chat/ChatContainer'

function Dialogs () {
  return (
    <section className={style.dialogs}>
      <h1>DIALOG PAGE</h1>
      <div className={style.inner}>
        <div className={style.chat}>
          <Chat/>
        </div>
      </div>
    </section>
  )
}

export default Dialogs