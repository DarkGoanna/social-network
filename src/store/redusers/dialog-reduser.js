const actionTypes = {
  updateState: 'UPDATE-DIALOGS-MASSAGES',
  newValue: 'UPDATE-VALUE',
}

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

/**
 * @param {object} state 
 * @param {object} action включает обязательное свойство 'type' и необязательные дополнительные свойства
 * @returns {object} state
 */
const dialogReduser = (state = initialState.dilogsPage, action) => {
  switch (action.type) {
    case actionTypes.updateState:
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
    case actionTypes.newValue:
      return {
        ...state,
        newMassageValue: action.massage,
      };
  }
  return state;
}

export default dialogReduser;

/**
 * @param {string} massage текущее значение в текстовом поле
 * @returns {object} action
 */
export const setNewMassageValueToState = (massage) => {
  return {
    type: actionTypes.newValue,
    massage: massage,
  }
}

/**
 * @returns {object} action
 */
export const updateState = () => ({ type: actionTypes.updateState }) 