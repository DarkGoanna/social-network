import { setCurrentProfile } from '../../../store/redusers/profile-reduser';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let currentProfile = this.props.match.params.first;
    currentProfile = currentProfile ? currentProfile : 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${currentProfile}`).then(response => {
      this.props.setCurrentProfile(response.data);
    })
  }

  render = () => {
    return <Profile currentProfile={this.props.currentProfile} />
  }
}

const mapSteteToProps = (state) => {
  return {
    currentProfile: state.profilePage.currentProfile
  }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapSteteToProps, {setCurrentProfile})(ProfileContainerWithRouter);