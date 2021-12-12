const UPDATE_DIALOGS_MASSAGES = 'UPDATE_DIALOGS_MASSAGES';
const UPDATE_VALUE = 'UPDATE_VALUE';

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
          massage: state.newMassageValue,
          image: {
            url: 'https://api.lorem.space/image/face?w=150&h=150',
          }
        }],
        newMassageValue: '',
      };
    case UPDATE_VALUE:
      return {
        ...state,
        newMassageValue: action.massage,
      };
    default:
      return state;
  }
}

export default dialogReduser;

/**
 * @param {string} massage текущее значение в текстовом поле
 * @returns {object} action
 */
export const setNewMassageValueToState = (massage) => {
  return {
    type: UPDATE_DIALOGS_MASSAGES,
    massage,
  }
}

/**
 * @returns {object} action
 */
export const updateState = () => ({ type: UPDATE_VALUE }) 