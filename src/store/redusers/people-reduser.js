const actionTypes = {
  setPeople: 'SET-PEOPLE',
  setTotalCount: 'SET-TOTAL-COUNT',
  toggleActive: 'TOGGLE-ACTIVE'
}

const initialState = {
  people: [],
  totalCount: null,
  countOnPage: 10,
  active: 1,
}

/**
 * @param {object} state 
 * @param {object} action включает обязательное свойство 'type' и необязательные дополнительные свойства
 * @returns {object} state
 */
const peopleReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setPeople:
      return {
        ...state,
        people: [...action.people]
      }
    case actionTypes.setTotalCount:
      return {
        ...state,
        totalCount: action.count,

      }
    case actionTypes.toggleActive:
      return {
        ...state,
        active: action.pageNumber
      }
  }
  return state;
}

export default peopleReduser;

/**
 * @param {array} people массив с людьми, каждый человек представлен в виде обьекта
 * @returns {object} action
 */
export const setPeopleAC = (people) => {
  return {
    type: actionTypes.setPeople,
    people,
  }
}

/**
 * @param {number} count общее колличество людей на сервере
 * @returns {object} action
 */
export const setTotalCountAC = (count) => {
  return {
    type: actionTypes.setTotalCount,
    count,
  }
}

/**
 * @param {number} pageNumber номер текущей страницы
 * @returns {object} action
 */
export const toggleActivePageAC = (pageNumber) => {
  return {
    type: actionTypes.toggleActive,
    pageNumber,
  }
}