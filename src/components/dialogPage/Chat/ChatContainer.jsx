import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { updateState } from '../../../store/redusers/dialog-reduser'
import Chat from './Chat'

function mapStateToProps(state) {
  return {
    massages: state.dilogsPage.massages,
  }
}

export default compose(
  connect(mapStateToProps, {updateState}),
  withAuthRedirect
)(Chat);