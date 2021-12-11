import style from './PeopleList.module.sass';
import People from '../People/PeopleContainer';

const PropleList = (props) => {
  // style
  let {people} = style;

  return (
    <div className={people}>
        <People/>
    </div>
  )
}

export default PropleList;