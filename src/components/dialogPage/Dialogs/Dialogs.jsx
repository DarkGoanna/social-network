import style from './Dialogs.module.sass'
import Chat from '../Chat/ChatContainer'
import People from '../People/PeopleContainer'

function Dialogs (props) {
  // style
  let { dialogs, inner, people, chat } = style;

  return (
    <section className={dialogs}>
      <h1>DIALOG PAGE</h1>
      <div className={inner}>
        <div className={people}>
          <People/>
        </div>
        <div className={chat}>
          <Chat/>
        </div>
      </div>
    </section>
  )
}

export default Dialogs