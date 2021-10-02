import {
  ADD_GAME,
  ADD_MY_ID,
  ADD_WEB_SOCKET,
  CONFIRMED_USER,
  IAction,
  IMainState,
  SET_DENIED,
} from '../store.module';

const defaultState = {
  socket: null,
  myId: null,
  confirmedUser: null,
  denied: null,
};

export const main = (
  state: IMainState = defaultState,
  action: IAction
): IMainState => {
  switch (action.type) {
    case ADD_WEB_SOCKET:
      return { ...state, socket: action.payload };
    case ADD_MY_ID:
      return { ...state, myId: action.payload };
    case CONFIRMED_USER:
      return { ...state, confirmedUser: action.payload };
    case SET_DENIED:
      return { ...state, denied: action.payload };
    default:
      return state;
  }
};
