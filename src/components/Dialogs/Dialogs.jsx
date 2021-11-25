import classes from './Dialogs.module.css'
import Chat from './Chat/Chat'
import ChatContainer from './Chat/ChatContainer'
import People from './People/People'

function Dialogs (props) {
  return (
    <section className={classes.dialogs}>
      <h1>DIALOG PAGE</h1>
      <div className={classes.inner}>
        <div className={classes.people}>
          <People/>
        </div>
        <div className={classes.chat}>
          <ChatContainer store={props.store}/>
        </div>
      </div>
    </section>
  )
}

export default Dialogs