import {
  ADD_CARD,
  ADD_GAME,
  CHANGE_SETTINGS,
  IAction,
  IGameState,
  SET_GAME_STATUS,
  SET_MARK_CURRENT_TASK,
  SET_ROUND_STATUS,
  SET_TITLE,
  ADD_USER_TO_LOBBY
} from '../store.module';

const defaultGame: IGameState = {} as IGameState;

export const game = (
  state: IGameState = defaultGame,
  action: IAction
): IGameState => {
  switch (action.type) {
    case ADD_GAME:
      return action.payload;
    case SET_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_SETTINGS:
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case ADD_CARD:
      return { ...state, cards: [...action.payload] };
    case SET_GAME_STATUS:
      return { ...state, gameStatus: action.payload };
    case SET_ROUND_STATUS:
      return { ...state, roundStatus: action.payload };
    case SET_MARK_CURRENT_TASK:
      return { ...state, marksCurrentTask: action.payload };
    default:
      return state;
  }
};
