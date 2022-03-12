import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuthorized } from "../store/Selectors/Selectors";

const mapAuthStateToProps = (state) => {
  return {
    isAuthorized: isAuthorized(state)
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
