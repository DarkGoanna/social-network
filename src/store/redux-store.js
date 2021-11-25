import { combineReducers, createStore } from "redux";
import dialogReduser from './redusers/dialog-reduser'

const redusers = combineReducers({
  dilogsPage: dialogReduser,
})

const store = createStore(redusers);

export default store;