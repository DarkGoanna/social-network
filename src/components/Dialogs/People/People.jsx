import classes from './People.module.css';

function People (props) {
  return (
    <ul className={classes.people}>
      <li>Tom</li>
      <li>Peter</li>
      <li>Vova</li>
      <li>Lena</li>
      <li>Kolya</li>
    </ul>
 )
}

export default People;