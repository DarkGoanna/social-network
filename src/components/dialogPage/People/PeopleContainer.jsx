import { connect } from "react-redux";
import { setPeopleAC, setTotalCountAC, toggleActivePageAC } from "../../../store/redusers/people-reduser";
import People from "./People";
import * as axios from 'axios';
import React from 'react';

class PeopleContainer extends React.Component {
  componentDidMount = () => {
    const count = this.props.countOnPage;
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`).then(response => {
      this.props.setPeople(response.data.items);
      this.props.setTotalCount(response.data.totalCount)
    })
  };

  /**
   * @param {number} pageNumber номер текущей страницы
   */
  showPage = (pageNumber) => {
    const count = this.props.countOnPage;
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${pageNumber}`)
      .then(response => {
        this.props.setPeople(response.data.items);
      })
  };

  /**
   * @param {number} pageNumber номер текущей страницы
   */
  toggleActivePage = (pageNumber) => {
    this.props.toggleActivePage(pageNumber);
    this.showPage(pageNumber);
  };

  render = () => (
    <People 
      people={this.props.people}
      totalCount={this.props.totalCount}
      countOnPage={this.props.countOnPage}
      activeNumber={this.props.active}
      toggleActivePage={this.toggleActivePage}
    />
  );
}

function mapStateToProps(state) {
  return {
    people: state.peopleList.people,
    totalCount: state.peopleList.totalCount,
    countOnPage: state.peopleList.countOnPage,
    active: state.peopleList.active,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPeople: (people) => {
      dispatch( setPeopleAC(people) );
    },
    setTotalCount: (count) => {
      dispatch( setTotalCountAC(count) );
    },
    toggleActivePage: (pageNumber) => {
      dispatch( toggleActivePageAC(pageNumber) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);