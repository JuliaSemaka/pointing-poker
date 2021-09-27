import { ICardsValues } from '../../components/Game/game.module';
import {
  ADD_CARD,
  ADD_GAME,
  CHANGE_SETTINGS,
  IAction,
  IMainState,
  SET_TITLE,
  ADD_USER_TO_LOBBY
} from '../store.module';

export function addGame(value: IMainState): IAction {
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

export function addUserToLobby(value: IMainState): IAction {
  return { type: ADD_USER_TO_LOBBY, payload: value }
}