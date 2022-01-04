import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../store/redusers/auth-reduser'
import Header from './Header';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount = () => { authAPI.authMe().then(response => this.props.setAuthUserData(response)) }
  render = () => (<Header {...this.props}/>)
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    name: state.auth.login,
    id: state.auth.id
  }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);