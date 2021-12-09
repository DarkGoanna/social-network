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

export const setPeopleAC = (people) => {
  return {
    type: actionTypes.setPeople,
    people,
  }
}

export const setTotalCountAC = (count) => {
  return {
    type: actionTypes.setTotalCount,
    count,
  }
}

export const toggleActivePageAC = (pageNumber) => {
  return {
    type: actionTypes.toggleActive,
    pageNumber,
  }
}