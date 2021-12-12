const SET_PEOPLE = 'SET_PEOPLE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
const TOGGLE_LOAD_STATUS = 'TOGGLE_LOAD_STATUS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  people: [],
  totalCount: null,
  countOnPage: 20,
  active: 1,
  isLoading: false,
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
      const currentPersonIndex = state.people.findIndex(person => person.id === action.personID);
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
      const currentPersonIndex = state.people.findIndex(person => person.id === action.personID);
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