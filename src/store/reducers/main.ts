import { ADD_GAME, ADD_MY_ID, ADD_WEB_SOCKET, IAction, IMainState } from '../store.module';

const defaultState = {
  socket: null,
  myId: null,
  game: null,
  chat: [],
};

export const main = (
  state: IMainState = defaultState,
  action: IAction
): IMainState => {
  switch (action.type) {
    case ADD_WEB_SOCKET:
      return { ...state, socket: action.payload };
    case ADD_GAME:
      return { ...state, game: action.payload };
    case ADD_MY_ID:
      return { ...state, myId: action.payload };
    default:
      return state;
  }
};
