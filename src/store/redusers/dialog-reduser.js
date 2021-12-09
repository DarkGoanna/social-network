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

export const getNewValueAC = (massage) => {
  return {
    type: actionTypes.newValue,
    massage: massage,
  }
}

export const getUpdatedStateAC = () => {
  return {
    type: actionTypes.updateState,
  }
}