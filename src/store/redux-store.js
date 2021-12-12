import { combineReducers, createStore } from "redux";
import authReduser from "./redusers/auth-reduser";
import dialogReduser from './redusers/dialog-reduser';
import peopleReduser from './redusers/people-reduser';
import profileReduser from './redusers/profile-reduser';

const redusers = combineReducers({
  dilogsPage: dialogReduser,
  peopleList: peopleReduser,
  profilePage: profileReduser,
  auth: authReduser
})

const store = createStore(redusers);
window.store = store;
export default store;