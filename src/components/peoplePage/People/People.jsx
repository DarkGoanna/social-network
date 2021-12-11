import style from './People.module.sass';

const People = (props) => {
  // style
  let {peopleList, pagination, paginationButton, active, photo, showPreloader} = style;

  // props
  let {people, totalCount, countOnPage, activeNumber, toggleActivePage} = props;

  // people names
  const peopleData = people.map(person => {
    const photoURL = person.photos.small ? person.photos.small : '';
    return (
      <li>
        <div className={photo}>
          <img src={photoURL} alt="" />
        </div>
        <p>{person.name}</p>
      </li>
    )
  });

  // pagination
  const buttonsCount = Math.ceil(totalCount / countOnPage);
  const buttons = [];

  for (let i = 1; i <= buttonsCount; i++) {
    const classes = activeNumber === i ? paginationButton + ' ' + active : paginationButton;

    buttons.push(<button className={classes} onClick={()=>{toggleActivePage(i)}}>{i}</button>)
  }

  // preloader
  const preloader = props.isLoading? showPreloader : '';

  return (
    <div>
      <ul className={preloader ? peopleList + ' ' + preloader : peopleList}>
        {peopleData}
      </ul>
      <div className={pagination}>
        {buttons}
      </div>
    </div>
  )
}

export default People;