import AuthFormRedux from './Auth'
import { connect } from 'react-redux'
import { login } from '../../store/redusers/auth-reduser'
import { Redirect } from 'react-router-dom'
import { isAuthorized } from '../../store/Selectors/Selectors'

const Auth = (props) => {
  const submitForm = ({email, password}) => {
    props.login(email, password)
  }

  if (props.isAuthorized) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <div>
      <h1>Авторизируйтейсь</h1>
      <AuthFormRedux onSubmit={submitForm}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: isAuthorized(state)
  }
}

export default connect(mapStateToProps, {login})(Auth);