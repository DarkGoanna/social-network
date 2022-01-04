import { profileAPI } from '../../api/api'

const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  currentProfile: null
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
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
    default:
      return state;
  }
}

export default profileReduser;

/**
 * @param {object} currentProfile профиль текущего человека
 * @returns {object} action
 */
export const setCurrentProfile = (currentProfile) => {
  return {
    type: SET_CURRENT_PROFILE,
    currentProfile
  }
}

/**
 * @param {string} status значение текущего статуса
 * @returns {object} action
 */
export const setProfileStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

/**
 * @param {number} count колличество людей
 * @param {number} pageNumber номер текущей страницы
 * @returns {function} thunk function
 */
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(statusValue => {
    dispatch(setProfileStatus(statusValue));
  })
}