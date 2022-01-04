import { setCurrentProfile, setProfileStatus, updateStatus } from '../../../store/redusers/profile-reduser';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import { profileAPI } from '../../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let currentProfile = this.props.match.params.first;
    currentProfile = currentProfile ? currentProfile : 2;

    profileAPI.getProfile(currentProfile).then(response => {
      this.props.setCurrentProfile(response.data);
    })
    profileAPI.getStatus(currentProfile).then(response => this.props.setProfileStatus(response))
  }

  render = () => {
    return <Profile currentProfile={this.props.currentProfile} updateStatus={this.props.updateStatus} />
  }
}

const mapSteteToProps = (state) => {
  return {
    currentProfile: state.profilePage.currentProfile,
  }
}

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapSteteToProps, {setCurrentProfile, setProfileStatus, updateStatus})
)(ProfileContainer);