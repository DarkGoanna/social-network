import style from './People.module.sass';
import Person from '../Person/Person';

const People = (props) => {
  // style
  let {peopleList, pagination, paginationButton, active, showPreloader} = style;

  // props
  let {people, totalCount, countOnPage, activeNumber, toggleActivePage, changingFolowingStatus, changeFolowingStatus} = props;
  const {follow, unfollow} = props;

  // people names
  const peopleData = people.map(person => <Person 
    key={person.id} 
    personData={person} 
    follow={follow} 
    unfollow={unfollow}
    changingFolowingStatus={changingFolowingStatus}
    changeFolowingStatus={changeFolowingStatus}
  />);

  // pagination
  const buttonsCount = Math.ceil(totalCount / countOnPage);
  const buttons = []; // all pagination buttons

  for (let i = 1; i <= buttonsCount; i++) {
    const classes = activeNumber === i ? paginationButton + ' ' + active : paginationButton;
    buttons.push(<button className={classes} onClick={()=>{toggleActivePage(i)}}>{i}</button>)
  }

  // preloader
  const preloader = props.isLoading? showPreloader : '';

  return (
    <div>
      <div className={preloader ? peopleList + ' ' + preloader : peopleList}>
        {peopleData}
      </div>
      <div className={pagination}>
        {buttons}
      </div>
    </div>
  )
}

export default People;