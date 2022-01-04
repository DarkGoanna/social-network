import { connect } from "react-redux";
import { getUsers, toggleActivePage, follow, unfollow, changeFolowingStatus } from "../../../store/redusers/people-reduser";
import People from "./People";
import React from 'react';

class PeopleContainer extends React.Component {
  componentDidMount = () => {
    const count = this.props.countOnPage;
    this.props.getUsers(count);
  };

  /**
   * @param {number} pageNumber номер текущей страницы
   */
  showPage = (pageNumber) => {
    const count = this.props.countOnPage;
    this.props.getUsers(count, pageNumber);
  };

  /**
   * @param {number} pageNumber номер текущей страницы
   */
  toggleActivePage = (pageNumber) => {
    this.props.toggleActivePage(pageNumber);
    this.showPage(pageNumber);
  };

  render = () => ( <People {...this.props} 
    toggleActivePage={this.toggleActivePage}
    changingFolowingStatus={this.props.changingFolowingStatus}
  /> );
}

function mapStateToProps(state) {
  return {
    people: state.peopleList.people,
    totalCount: state.peopleList.totalCount,
    countOnPage: state.peopleList.countOnPage,
    active: state.peopleList.active,
    isLoading: state.peopleList.isLoading,
    changingFolowingStatus: state.peopleList.changingFolowingStatus
  }
}

export default connect(mapStateToProps, { getUsers, toggleActivePage, follow, unfollow, changeFolowingStatus })(PeopleContainer);