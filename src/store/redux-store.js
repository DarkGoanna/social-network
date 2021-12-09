import { combineReducers, createStore } from "redux";
import dialogReduser from './redusers/dialog-reduser';
import peopleReduser from './redusers/people-reduser';

const redusers = combineReducers({
  dilogsPage: dialogReduser,
  peopleList: peopleReduser,
})

const store = createStore(redusers);
window.store = store;
export default store;