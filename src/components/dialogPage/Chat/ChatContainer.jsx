import { connect } from 'react-redux'
import { getNewValueAC, getUpdatedStateAC } from '../../../store/redusers/dialog-reduser'
import Chat from './Chat'

function mapStateToProps(state) {
  return {
    massages: state.dilogsPage.massages,
    newMassageValue: state.dilogsPage.newMassageValue
  }
}

function mapDispatchToProps(dispatch){
  return {
    setNewMassageValueToState: (text) => {
      const action = getNewValueAC(text);
      dispatch(action);
    },
    updateState: () => {
      const action = getUpdatedStateAC();
      dispatch(action);
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatContainer