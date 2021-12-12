import style from './Dialogs.module.sass'
import ChatContainer from '../Chat/ChatContainer'

function Dialogs (props) {
  // style
  let { dialogs, inner, people, chat } = style;

  return (
    <section className={dialogs}>
      <h1>DIALOG PAGE</h1>
      <div className={inner}>
        <div className={chat}>
          <ChatContainer/>
        </div>
      </div>
    </section>
  )
}

export default Dialogs