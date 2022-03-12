import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import authReduser from './redusers/auth-reduser'
import dialogReduser from './redusers/dialog-reduser'
import peopleReduser from './redusers/people-reduser'
import profileReduser from './redusers/profile-reduser'

const rootReduser = combineReducers({
  dilogsPage: dialogReduser,
  peopleList: peopleReduser,
  profilePage: profileReduser,
  auth: authReduser,
  form: formReducer,
})

export type rootState = ReturnType< typeof rootReduser>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;