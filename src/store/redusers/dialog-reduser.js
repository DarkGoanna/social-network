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

export function getNewValueAction(massage) {
  return {
    type: actionTypes.newValue,
    massage: massage,
  }
}

export function getUpdatedStateAction() {
  return {
    type: actionTypes.updateState,
  }
}

function dialogReduser(state = initialState.dilogsPage, action) {
  switch (action.type) {
    case actionTypes.updateState:
      state.massages.push({
        massage: state.newMassageValue,
        image: {
          url: 'https://api.lorem.space/image/face?w=150&h=150',
        }
      });
      state.newMassageValue = '';
      break;
    case actionTypes.newValue:
      state.newMassageValue = action.massage;
      break;
  }
  return state;
}

export default dialogReduser;