const UPDATE_DIALOGS_MASSAGES = 'UPDATE_DIALOGS_MASSAGES';

const initialState = {
  dilogsPage: {
    massages: [
      {
        massage: 'lol',
        image: {
          url: 'https://api.lorem.space/image/face?w=150&h=150',
        }
      },
      {
        massage: 'hi',
        image: {
          url: 'https://api.lorem.space/image/face?w=150&h=150',
        }
      },
      {
        massage: 'How are you?',
        image: {
          url: 'https://api.lorem.space/image/face?w=150&h=150',
        }
      },
      {
        massage: 'cool',
        image: {
          url: 'https://api.lorem.space/image/face?w=150&h=150',
        }
      },
    ],
    newMassageValue: '',
  },
}

const dialogReduser = (state = initialState.dilogsPage, action) => {
  switch (action.type) {
    case UPDATE_DIALOGS_MASSAGES:
      return {
        ...state,
        massages: [...state.massages, {
          massage: action.newMassageValue,
          image: {
            url: 'https://api.lorem.space/image/face?w=150&h=150',
          }
        }],
      };
    default:
      return state;
  }
}

export default dialogReduser;

/**
 * @returns {object} action
 */
export const updateState = (newMassageValue) => ({ type: UPDATE_DIALOGS_MASSAGES, newMassageValue }) 