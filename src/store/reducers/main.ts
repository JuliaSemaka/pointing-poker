import {
  ADD_GAME,
  ADD_MY_ID,
  ADD_WEB_SOCKET,
  CONFIRMED_USER,
  IAction,
  IMainState,
  SET_DENIED,
  THERE_ID,
} from '../store.module';

const defaultState = {
  socket: null,
  myId: null,
  confirmedUser: null,
  denied: null,
  thereId: null,
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
    case THERE_ID:
      return { ...state, thereId: action.payload };
    default:
      return state;
  }
};
