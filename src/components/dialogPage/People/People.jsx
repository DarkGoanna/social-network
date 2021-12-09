import style from './People.module.sass';

const People = (props) => {
  // style
  let {peopleList, pagination, paginationButton, active} = style;

  // props
  let {people, totalCount, countOnPage, activeNumber, toggleActivePage} = props;

  // people names
  const names = people.map(person => <li>{person.name}</li>);

  // pagination
  const buttonsCount = Math.ceil(totalCount / countOnPage);
  const buttons = [];

  for (let i = 1; i <= buttonsCount; i++) {
    const classes = activeNumber === i ? paginationButton + ' ' + active : paginationButton;

    buttons.push(<button className={classes} onClick={()=>{toggleActivePage(i)}}>{i}</button>)
  }

  return (
    <div>
      <ul className={peopleList}>
        {names}
      </ul>
      <div className={pagination}>
        {buttons}
      </div>
    </div>
  )
}

export default People;