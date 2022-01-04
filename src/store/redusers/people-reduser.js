import { usersAPI } from '../../api/api';

const SET_PEOPLE = 'SET_PEOPLE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
const TOGGLE_LOAD_STATUS = 'TOGGLE_LOAD_STATUS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const CHANGING_FOLOWING_STATUS = 'CHANGING_FOLOWING_STATUS';

const initialState = {
  people: [],
  totalCount: null,
  countOnPage: 20,
  active: 1,
  isLoading: false,
  changingFolowingStatus: [],
}

const peopleReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        people: [...action.people]
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.count,

      }
    case TOGGLE_ACTIVE:
      return {
        ...state,
        active: action.pageNumber
      }
    case TOGGLE_LOAD_STATUS:
      return {
        ...state,
        isLoading: action.status
      }
    case FOLLOW: {
      return {
        ...state, // весь state
        people: state.people.map(person => {
          if (person.id === action.personID) {
            person.followed = true;
          }
          return person;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state, // весь state
        people: state.people.map(person => {
          if (person.id === action.personID) {
            person.followed = false;
          }
          return person;
        })
      }
    }
    case CHANGING_FOLOWING_STATUS:
      return {
        ...state,
        changingFolowingStatus: action.inProgress ?
          [...state.changingFolowingStatus, action.personID] :
          state.changingFolowingStatus.filter(id => id !== action.personID)
      }
    default:
      return state;
  }
}

export default peopleReduser;

/**
 * @param {array} people массив с людьми, каждый человек представлен в виде обьекта
 * @returns {object} action
 */
export const setPeople = (people) => {
  return {
    type: SET_PEOPLE,
    people,
  }
}

/**
 * @param {number} count общее колличество людей на сервере
 * @returns {object} action
 */
export const setTotalCount = (count) => {
  return {
    type: SET_TOTAL_COUNT,
    count,
  }
}

/**
 * @param {number} pageNumber номер текущей страницы
 * @returns {object} action
 */
export const toggleActivePage = (pageNumber) => {
  return {
    type: TOGGLE_ACTIVE,
    pageNumber,
  }
}

/**
 * @param {boolean} status (true - в процессе загрузки) / (false - загрузки нет)
 * @returns action
 */
export const toggleLoadStatus = (status) => {
  return {
    type: TOGGLE_LOAD_STATUS,
    status
  }
}

/**
 * @param {number} personID id человека для подписки
 * @returns {object} action
 */
export const follow = (personID) => {
  return {
    type: FOLLOW,
    personID
  }
}

/**
 * @param {number} personID id человека для отписки
 * @returns {object} action
 */
export const unfollow = (personID) => {
  return {
    type: UNFOLLOW,
    personID
  }
}

/**
 * @param {number} personID id человека, на которого подписываются/отписываются
 * @returns {object} action 
 */
export const changeFolowingStatus = (inProgress, personID) => {
  return {
    type: CHANGING_FOLOWING_STATUS,
    personID,
    inProgress
  }
}

/**
 * @param {number} count колличество людей
 * @param {number} pageNumber номер текущей страницы
 * @returns {function} thunk function
 */
export const getUsers = (count, pageNumber = 1) => (dispatch) => {
  dispatch(toggleLoadStatus(true));

  usersAPI.getUsers(count, pageNumber).then(data => {
    dispatch(setPeople(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(toggleLoadStatus(false));
  })
}