const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';

const initialState = {
  currentProfile: null
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.currentProfile
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