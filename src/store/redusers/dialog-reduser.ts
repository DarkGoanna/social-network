const UPDATE_DIALOGS_MASSAGES = 'UPDATE_DIALOGS_MASSAGES'

export type massageType = {
  massage: string
  image: {
    url: string
  }
}
type initialStateType = {
  massages: Array<massageType>
  newMassageValue: string
}
const initialState: initialStateType = {
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
  newMassageValue: ''
}
const dialogReduser = (state = initialState, action: any):initialStateType => {
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

type updateStateType = {
  type: typeof UPDATE_DIALOGS_MASSAGES
  newMassageValue: string
}
export const updateState = (newMassageValue: string): updateStateType => {
  return { 
    type: UPDATE_DIALOGS_MASSAGES, 
    newMassageValue 
  }
}