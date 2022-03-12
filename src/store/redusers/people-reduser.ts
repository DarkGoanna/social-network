import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../../api/api'
import { rootState } from '../redux-store'

const SET_PEOPLE = 'SET_PEOPLE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
const TOGGLE_LOAD_STATUS = 'TOGGLE_LOAD_STATUS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const CHANGING_FOLOWING_STATUS = 'CHANGING_FOLOWING_STATUS'

const initialState = {
  people: [] as Array<userDataType>,
  totalCount: null as null | number,
  countOnPage: 40 as number,
  active: 1 as number,
  isLoading: false as boolean,
  changingFolowingStatus: [] as Array<number>,
}
type initialStateType = typeof initialState
type actionsTypes = setPeopleType 
| setTotalCountType 
| toggleActivePageType 
| toggleLoadStatusType 
| followType 
| unfollowType 
| changeFolowingStatusType
const peopleReduser = (state = initialState, action: actionsTypes):initialStateType => {
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
        people: state.people.map((person: any) => {
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
        people: state.people.map((person:any) => {
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
          state.changingFolowingStatus.filter((id: number) => id !== action.personID)
      }
    default:
      return state;
  }
}
export default peopleReduser;

type thunksType = ThunkAction<void, rootState, unknown, actionsTypes>


type setPeopleType = {
  type: typeof SET_PEOPLE
  people: any
}
export const setPeople = (people: any):setPeopleType => {
  return {
    type: SET_PEOPLE,
    people,
  }
}

type setTotalCountType = {
  type: typeof SET_TOTAL_COUNT
  count: number
}
/**
 * @param {number} count общее колличество людей на сервере
 * @returns {object} action
 */
export const setTotalCount = (count: number):setTotalCountType => {
  return {
    type: SET_TOTAL_COUNT,
    count,
  }
}

type toggleActivePageType = {
  type: typeof TOGGLE_ACTIVE
  pageNumber : number
}
/**
 * @param {number} pageNumber номер текущей страницы
 * @returns {object} action
 */
export const toggleActivePage = (pageNumber: number):toggleActivePageType => {
  return {
    type: TOGGLE_ACTIVE,
    pageNumber,
  }
}

type toggleLoadStatusType = {
  type: typeof TOGGLE_LOAD_STATUS
  status: boolean
}
/**
 * @param {boolean} status (true - в процессе загрузки) / (false - загрузки нет)
 * @returns action
 */
export const toggleLoadStatus = (status: boolean):toggleLoadStatusType => {
  return {
    type: TOGGLE_LOAD_STATUS,
    status
  }
}

type followType = {
  type: typeof FOLLOW
  personID: number
}
/**
 * @param {number} personID id человека для подписки
 * @returns {object} action
 */
export const follow = (personID:number):followType => {
  return {
    type: FOLLOW,
    personID
  }
}

type unfollowType = {
  type: typeof UNFOLLOW
  personID: number
}
/**
 * @param {number} personID id человека для отписки
 * @returns {object} action
 */
export const unfollow = (personID:number):unfollowType => {
  return {
    type: UNFOLLOW,
    personID
  }
}

type changeFolowingStatusType = {
  type: typeof CHANGING_FOLOWING_STATUS
  personID: number
  inProgress: boolean
}
/**
 * @param {number} personID id человека, на которого подписываются/отписываются
 * @returns {object} action 
 */
export const changeFolowingStatus = (inProgress:boolean, personID:number):changeFolowingStatusType => {
  return {
    type: CHANGING_FOLOWING_STATUS,
    personID,
    inProgress
  }
}

type responseUserDataType = {
  items: Array<userDataType>
  totalCount: number,
  error: null | string
}
export type userDataType = {
  name: string,
  id: number,
  photos: {
    small: null | string,
    large: null | string
  },
  status: null | string,
  followed: boolean
}
/**
 * @param {number} count колличество людей
 * @param {number} pageNumber номер текущей страницы
 * @returns {function} thunk function
 */
export const getUsers = (count:number, pageNumber:number = 1): thunksType => (dispatch) => {
  dispatch(toggleLoadStatus(true));

  usersAPI.getUsers(count, pageNumber).then((data:responseUserDataType) => {
    dispatch(setPeople(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(toggleLoadStatus(false));
  })
}