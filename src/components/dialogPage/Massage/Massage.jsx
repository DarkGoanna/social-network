import style from './Massage.module.sass'

const Massage = (props) => {
  // styles
  let {massage} = style;

  // props
  let {
    item: {image: {url}}, 
    item: {massage: text},
  } = props;

  return (
    <div className={massage}>
      <img src={url} alt=""/>
      <p>{text}</p>
    </div>
  )
}

export default Massage