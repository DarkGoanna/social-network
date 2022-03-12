import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/redusers/auth-reduser'
import Header from './Header'
import { isAuthorized, getAuthName } from '../../store/Selectors/Selectors'
import { rootState } from '../../store/redux-store'

type mapStateToPropsType = {
  isAuthorized: boolean
  name: string | null
}
type mapDispatchToProps = {
  logout: () => void
}
type HeaderContainerType = mapStateToPropsType & mapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType> {
  render = () => {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state:rootState) => {
  return {
    isAuthorized: isAuthorized(state),
    name: getAuthName(state),
  }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);