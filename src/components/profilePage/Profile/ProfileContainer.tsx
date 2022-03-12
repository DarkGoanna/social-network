import { setCurrentProfile, setCurrentStatus, updateStatus, setPhoto, checkOwner, profilePhotosType } from '../../../store/redusers/profile-reduser'
import { connect } from 'react-redux'
import Profile from './Profile'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import {getAuthID, getCurrentProfile, getOwnerStatus} from '../../../store/Selectors/Selectors'
import { rootState } from '../../../store/redux-store'

export type currentProfileType = {
  fullName: string 
  status: string 
  photos: profilePhotosType
}
type mapStateToPropsType = {
  currentProfile: currentProfileType
  userID: number
  isOwner: boolean
}
type mapDispatchToPropsType = {
  setCurrentProfile: (profileID: number) => void
  setCurrentStatus: (profileID: number) => void
  updateStatus: (status:string) => void
  setPhoto:(file:string) => void
  checkOwner: (profileID: number) => void
}
type ownProfileContainerType = {
  match: any
}
type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType & ownProfileContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {
  updateProfile = () => {
    let profileID = this.props.match.params.first;
    profileID = profileID ? profileID : this.props.userID;
    
    this.props.checkOwner(profileID);
    this.props.setCurrentProfile(profileID);
    this.props.setCurrentStatus(profileID);
  }
  componentDidMount = () => {
    this.updateProfile()
  }

  render = () => {
    return (
      <Profile 
        currentProfile={this.props.currentProfile} 
        updateStatus={this.props.updateStatus} 
        isOwner={this.props.isOwner}
        setPhoto={this.props.setPhoto}
      />
    )
  }
}

const mapStateToProps = (state:rootState) => {
  return {
    currentProfile: getCurrentProfile(state),
    userID: getAuthID(state),
    isOwner: getOwnerStatus(state),
  }
}

export default compose(
  withRouter,
  withAuthRedirect,
  connect(
    mapStateToProps, 
    {setCurrentProfile, setCurrentStatus, updateStatus, setPhoto, checkOwner}
  )
)(ProfileContainer);
