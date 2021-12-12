import style from './PeopleList.module.sass';
import PeopleContainer from '../People/PeopleContainer';

const PropleList = (props) => {
  // style
  let {people} = style;

  return (
    <div className={people}>
        <PeopleContainer/>
    </div>
  )
}

export default PropleList;