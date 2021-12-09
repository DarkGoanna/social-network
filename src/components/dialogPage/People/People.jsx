import style from './People.module.sass';
import * as axios from 'axios';
import React from 'react';

class People extends React.Component {
  componentDidMount = () => {
    const count = this.props.countOnPage;
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`).then(response => {
      this.props.setPeople(response.data.items);
      this.props.setTotalCount(response.data.totalCount)
    })
  }

  showPage = (pageNumber) => {
    const count = this.props.countOnPage;
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${pageNumber}`)
      .then(response => {
        this.props.setPeople(response.data.items);
      })
  }

  toggleActivePage = (pageNumber) => {
    this.props.toggleActivePage(pageNumber);
    this.showPage(pageNumber);
  }

  render = () => {
    const {peopleList, pagination, paginationButton, active} = style;

    // people names
    const names = this.props.people.map(person => <li>{person.name}</li>);

    // pagination
    const buttonsCount = Math.ceil(this.props.totalCount / this.props.countOnPage);
    const buttons = [];
    for (let i = 1; i <= buttonsCount; i++) {
      const classes = this.props.active === i ? paginationButton + ' ' + active : paginationButton;

      buttons.push(<button className={classes} onClick={()=>{this.toggleActivePage(i)}}>{i}</button>)
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
}

export default People;