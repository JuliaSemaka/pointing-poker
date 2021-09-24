import { ADD_MY_ID, ADD_WEB_SOCKET, IAction } from '../store.module';

export function addWebSocket(value: WebSocket): IAction {
  return { type: ADD_WEB_SOCKET, payload: value };
}

export function addMyId(value: string): IAction {
  return { type: ADD_MY_ID, payload: value };
}
