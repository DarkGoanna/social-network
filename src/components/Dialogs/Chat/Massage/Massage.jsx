import classes from './Massage.module.css'

const Massage = (props) => {
  return (
    <div className={classes.massage}>
      <img src={props.item.image.url} alt=""/>
      <p>{props.item.massage}</p>
    </div>
  )
}

export default Massage