import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapAuthStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized
  }
}

const withAuthRedirect = (Component) => {
  const ComponentContainer = (props) => {
    if (!props.isAuthorized) {
      return <Redirect to="/login"/>;
    }
    return <Component {...props}/>;
  };
  return connect(mapAuthStateToProps)(ComponentContainer);
}

export default withAuthRedirect;
