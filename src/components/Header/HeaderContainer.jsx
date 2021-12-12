import React from 'react';
import { connect, Connect } from 'react-redux';
import { setAuthUserData } from '../../store/redusers/auth-reduser'
import * as axios from 'axios';
import Header from './Header';


class HeaderContainer extends React.Component {
  componentDidMount = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        this.props.setAuthUserData(response.data.data)
      }
    })
  }
  render = () => (<Header {...this.props}/>)
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    name: state.auth.login
  }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);