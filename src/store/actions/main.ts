import {
  ADD_GAME,
  ADD_MY_ID,
  ADD_WEB_SOCKET,
  IAction,
  IMainState,
} from '../store.module';

export function addWebSocket(value: WebSocket): IAction {
  return { type: ADD_WEB_SOCKET, payload: value };
}

export function addGame(value: IMainState): IAction {
  return { type: ADD_GAME, payload: value };
}

export function addMyId(value: string): IAction {
  return { type: ADD_MY_ID, payload: value };
}
