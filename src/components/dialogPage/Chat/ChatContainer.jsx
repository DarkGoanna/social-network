import { connect } from 'react-redux'
import { setNewMassageValueToState, updateState } from '../../../store/redusers/dialog-reduser'
import Chat from './Chat'

function mapStateToProps(state) {
  return {
    massages: state.dilogsPage.massages,
    newMassageValue: state.dilogsPage.newMassageValue
  }
}

const ChatContainer = connect(mapStateToProps, {
  setNewMassageValueToState, updateState
})(Chat);
export default ChatContainer