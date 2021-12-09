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
      dispatch( getNewValueAC(text) );
    },
    updateState: () => {
      dispatch( getUpdatedStateAC() );
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatContainer