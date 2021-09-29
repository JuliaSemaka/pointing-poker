import {
  EGameStatus,
  ERoundStatus,
  ICardsValues,
  IMarksCurrentTask,
} from '../../components/Game/game.module';
import {
  ADD_CARD,
  ADD_GAME,
  CHANGE_SETTINGS,
  IAction,
  IMainState,
  SET_GAME_STATUS,
  SET_MARK_CURRENT_TASK,
  SET_ROUND_STATUS,
  SET_TITLE,
} from '../store.module';

export function enterTheGame(value: IMainState): IAction {
  return { type: ADD_GAME, payload: value };
}

export function changeSettings(value: any): IAction {
  return { type: CHANGE_SETTINGS, payload: value };
}

export function setTitle(value: any): IAction {
  return { type: SET_TITLE, payload: value };
}

export function addCard(value: ICardsValues[]): IAction {
  return { type: ADD_CARD, payload: value };
}

export function setGameStatus(value: EGameStatus): IAction {
  return { type: SET_GAME_STATUS, payload: value };
}

export function setRoundStatus(value: ERoundStatus): IAction {
  return { type: SET_ROUND_STATUS, payload: value };
}

export function setMarksCurrentTask(value: IMarksCurrentTask[]): IAction {
  return { type: SET_MARK_CURRENT_TASK, payload: value };
}
