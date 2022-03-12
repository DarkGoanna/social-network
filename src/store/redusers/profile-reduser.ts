import { ThunkAction } from 'redux-thunk'
import { profileAPI } from '../../api/api'
import { rootState } from '../redux-store'

const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_PHOTO = 'UPDATE_PHOTO'
const SET_OWNER = 'SET_OWNER'

export type profilePhotosType = {
  small: string
  large: string
}
export type profileType = {
  userId?: number
  fullName?: string
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  contacts?: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos?: profilePhotosType
  status?: string
}
const initialState = {
  currentProfile: null as null | profileType,
  isOwner: null as null | boolean,
}
type initialStateType = typeof initialState
type actionsTypes = setProfileType | setStatusType | updatePhotoType | setOwnerType
const profileReduser = (state = initialState, action: actionsTypes):initialStateType => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        currentProfile: {
          ...state.currentProfile,
          ...action.currentProfile
        }
      }
    case SET_STATUS:
      return {
        ...state,
        currentProfile: {
          ...state.currentProfile,
          status: action.status
        }
      }
    case UPDATE_PHOTO:
      return {
        ...state,
        currentProfile: {
          ...state.currentProfile,
          photos: action.photos
        }
      }
    case SET_OWNER:
      return {
        ...state,
        isOwner: action.value
      }
    default:
      return state;
  }
}
export default profileReduser;

type thunksType = ThunkAction<void, rootState, unknown, actionsTypes>

export const setCurrentProfile = (id:number | null): thunksType => (dispatch) => {
  if (id) {
    profileAPI.getProfile(id)
      .then((response:any) => {
        if(response.data) {
          dispatch(setProfile(response.data))
        }
      })
  }
}

export const setProfileInfo = (data: any): thunksType => (dispatch, getState) => {
  const userId = getState().auth.id;
  profileAPI.setProfileInfo(data)
    .then((response:any) => {
      if (response.data.resultCode === 0) {
        dispatch(setCurrentProfile(userId));
      }
    })
}

type setProfileType = {
  type: typeof SET_PROFILE
  currentProfile: any
}
export const setProfile = (currentProfile: any):setProfileType => {
  return {
    type: SET_PROFILE,
    currentProfile
  }
}

export const setCurrentStatus = (id:number) => (dispatch:any) => {
  profileAPI.getStatus(id)
    .then((response:any) => dispatch(setStatus(response)))
}

export const updateStatus = (status:string): thunksType => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((statusValue) => {
      if(statusValue) {
        dispatch(setStatus(statusValue))
      }
    })
}

type setStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status:string):setStatusType => {
  return {
    type: SET_STATUS,
    status
  }
}

export const setPhoto = (photo:string):thunksType => (dispatch) => {
  profileAPI.setPhoto(photo)
    .then((photos) => {
      if(photos) {
        dispatch(updatePhoto(photos))
      }
    })
}

type updatePhotoType = {
  type: typeof UPDATE_PHOTO
  photos: any
}
const updatePhoto = (photos:profilePhotosType):updatePhotoType => {
  return {
    type: UPDATE_PHOTO,
    photos
  }
}

export const checkOwner = (id:number): thunksType => (dispatch, getState) => {
  const authUserID = getState().auth.id;
  const isOwner = (id === authUserID) ? true : false;
  dispatch(setOwner(isOwner))
}

type setOwnerType = {
  type: typeof SET_OWNER
  value: boolean
}
const setOwner = (value:boolean):setOwnerType => {
  return {
    type: SET_OWNER,
    value
  }
}