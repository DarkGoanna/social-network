import { resultCodeEnum, loginType, userDataType } from './../../api/api';
import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../../api/api'
import { rootState } from '../redux-store'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const AUTH_FINISHED = 'AUTH_FINISHED'

const initialState = {
  login: null as null | string,
  email: null  as null | string,
  id: null  as null | number,
  isAuthorized: false  as boolean,
  authFinished: false  as boolean,
}
type initialStateType = typeof initialState
type actionsTypes = setAuthUserDataType | setAuthFinishedType
const authReduser = (state = initialState, action: actionsTypes):initialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      if (action.userData) {
        return {
          ...state,
          ...action.userData,
          isAuthorized: action.isAuthorized
        }
      } else {
        return {
          ...state,
        }
      }
    case AUTH_FINISHED:
      return {
        ...state,
        authFinished: action.status
      }
    default:
      return state;
  }
}
export default authReduser;

type thunksType = ThunkAction<void, rootState, unknown, actionsTypes>

type setAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA
  userData: userDataType
  isAuthorized: boolean
}
export const setAuthUserData = (userData: userDataType, isAuthorized: boolean): setAuthUserDataType => {
  return {
    type: SET_AUTH_USER_DATA,
    userData,
    isAuthorized
  }
}

export const authMe = ():thunksType => {
  return (dispatch) => {
    authAPI.authMe()
      .then((data) => {
        if (data.resultCode === resultCodeEnum.Success) {
          const userData = data.data;
          dispatch(setAuthUserData(userData, true));
          dispatch(setAuthFinished(true));
        }
      })
  }
}

export const login = (email: string, password: string) => {
  return (dispatch: any) => {
    authAPI.login(email, password)
      .then((response: loginType) => {
        if (response.resultCode === resultCodeEnum.Success) {
          dispatch(authMe())
        } else {
          dispatch(stopSubmit('auth', {_error: response.messages[0]}))
        }
      })
  }
}

export const logout = ():thunksType => {
  return (dispatch) => {
    authAPI.logout().then((response:any) => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData({ login: null, email: null, id: null }, false));
        dispatch(setAuthFinished(false));
      }
    })
  }
}

type setAuthFinishedType = {
  type: typeof AUTH_FINISHED
  status: boolean
}
export const setAuthFinished = (status: boolean): setAuthFinishedType => {
  return {
    type: AUTH_FINISHED,
    status
  }
}