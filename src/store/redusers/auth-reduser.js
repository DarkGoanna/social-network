const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  login: null,
  email: null,
  id: null,
  isAuthorized: false,
}

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuthorized: true
      }
    default:
      return state;
  }
}

export default authReduser;

/**
 * @param {object} userData обьект авторизированого пользователя
 * @returns {object} action 
 */
export const setAuthUserData = (userData) => {
  return {
    type: SET_AUTH_USER_DATA,
    userData
  }
}