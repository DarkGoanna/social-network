import { connect } from "react-redux";
import { setPeople, setTotalCount, toggleActivePage, toggleLoadStatus, follow, unfollow } from "../../../store/redusers/people-reduser";
import People from "./People";
import * as axios from 'axios';
import React from 'react';

class PeopleContainer extends React.Component {
  componentDidMount = () => {
    const count = this.props.countOnPage;
    this.props.toggleLoadStatus(true);
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`, {
      withCredentials: true
    }).then(response => {
      this.props.setPeople(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
      this.props.toggleLoadStatus(false);
    })
  };

  /**
   * @param {number} pageNumber номер текущей страницы
   */
  showPage = (pageNumber) => {
    const count = this.props.countOnPage;
    this.props.toggleLoadStatus(true);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${pageNumber}`, {
      withCredentials: true
    }).then(response => {
      this.props.setPeople(response.data.items);
      this.props.toggleLoadStatus(false);
    })
  };

  /**
   * @param {number} pageNumber номер текущей страницы
   */
  toggleActivePage = (pageNumber) => {
    this.props.toggleActivePage(pageNumber);
    this.showPage(pageNumber);
  };

  render = () => ( <People {...this.props}/> );
}

function mapStateToProps(state) {
  return {
    people: state.peopleList.people,
    totalCount: state.peopleList.totalCount,
    countOnPage: state.peopleList.countOnPage,
    active: state.peopleList.active,
    isLoading: state.peopleList.isLoading
  }
}

export default connect(mapStateToProps, {
  setPeople, setTotalCount, toggleActivePage, toggleLoadStatus, follow, unfollow
})(PeopleContainer);