import { connect } from 'react-redux'
import { getUsers, toggleActivePage, follow, unfollow, changeFolowingStatus, userDataType } from '../../../store/redusers/people-reduser'
import People from './People'
import React from 'react'
import {getPeople, getTotalCount, getCountOnPage, getActive, isLoading, getChangingFolowingStatus} from '../../../store/Selectors/Selectors'
import { rootState } from '../../../store/redux-store'

type mapStateToPropsType = {
  people: Array<userDataType>
  totalCount: any
  countOnPage: number
  active: number
  isLoading: boolean
  changingFolowingStatus: Array<number>
}
type mapDispatchToPropsType = {
  getUsers: (countOnPage: number, pageNumber?:number) => void
  toggleActivePage: (pageNumber:number) => void
  follow: (personID:number) => void
  unfollow: (personID:number) => void
  changeFolowingStatus: (inProgress:boolean, personID:number) => void
}
type PeopleContainerType = mapStateToPropsType & mapDispatchToPropsType

class PeopleContainer extends React.Component<PeopleContainerType> {
  componentDidMount = () => {
    const count = this.props.countOnPage;
    this.props.getUsers(count);
  };

  showPage = (pageNumber:number) => {
    const count = this.props.countOnPage;
    this.props.getUsers(count, pageNumber);
  };

  toggleActivePage = (pageNumber:number) => {
    this.props.toggleActivePage(pageNumber);
    this.showPage(pageNumber);
  };

  render = () => {
    return (
      <People {...this.props} 
        toggleActivePage={this.toggleActivePage}
        changingFolowingStatus={this.props.changingFolowingStatus}
      />
    )
  };
}

function mapStateToProps(state:rootState) {
  return {
    people: getPeople(state),
    totalCount: getTotalCount(state),
    countOnPage: getCountOnPage(state),
    active: getActive(state),
    isLoading: isLoading(state),
    changingFolowingStatus: getChangingFolowingStatus(state)
  }
}

export default connect(
  mapStateToProps, 
  { getUsers, toggleActivePage, follow, unfollow, changeFolowingStatus }
)(PeopleContainer);