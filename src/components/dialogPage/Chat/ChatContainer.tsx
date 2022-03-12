import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { massageType, updateState } from '../../../store/redusers/dialog-reduser'
import Chat from './Chat'
import { getMassages } from '../../../store/Selectors/Selectors'
import { rootState } from '../../../store/redux-store'

type mapStateToPropsType = {
  massages: Array<massageType>
}
function mapStateToProps(state:rootState):mapStateToPropsType {
  return {
    massages: getMassages(state),
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {updateState}),
)(Chat);