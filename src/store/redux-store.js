import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import authReduser from "./redusers/auth-reduser";
import dialogReduser from './redusers/dialog-reduser';
import peopleReduser from './redusers/people-reduser';
import profileReduser from './redusers/profile-reduser';

const redusers = combineReducers({
  dilogsPage: dialogReduser,
  peopleList: peopleReduser,
  profilePage: profileReduser,
  auth: authReduser,
  form: formReducer,
})

const store = createStore(redusers, applyMiddleware(thunk));
window.store = store;
export default store;