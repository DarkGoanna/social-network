import classes from './Dialogs.module.css'
import Chat from './Chat/Chat'
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
          <Chat 
            massages={props.dilogsPage.massages} 
            newMassageValue={props.dilogsPage.newMassageValue}
            dispatch={props.dispatch} 
          />
        </div>
      </div>
    </section>
  )
}

export default Dialogs