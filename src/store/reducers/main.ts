import {
  ADD_GAME,
  ADD_MY_ID,
  ADD_WEB_SOCKET,
  CONFIRMED_USER,
  IAction,
  IMainState,
} from '../store.module';

const defaultState = {
  socket: null,
  myId: null,
  game: null,
  confirmedUser: null,
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
    default:
      return state;
  }
};
