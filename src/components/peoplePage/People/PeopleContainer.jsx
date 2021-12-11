import { connect } from "react-redux";
import { setPeopleAC, setTotalCountAC, toggleActivePageAC, toggleLoadStatusAC } from "../../../store/redusers/people-reduser";
import People from "./People";
import * as axios from 'axios';
import React from 'react';

class PeopleContainer extends React.Component {
  componentDidMount = () => {
    const count = this.props.countOnPage;
    this.props.toggleLoadStatus(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`).then(response => {
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${pageNumber}`)
      .then(response => {
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

  render = () => (
    <People 
      people={this.props.people}
      totalCount={this.props.totalCount}
      countOnPage={this.props.countOnPage}
      activeNumber={this.props.active}
      toggleActivePage={this.toggleActivePage}
      isLoading={this.props.isLoading}
    />
  );
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
    },
    toggleLoadStatus: (status) => {
      dispatch(toggleLoadStatusAC(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);