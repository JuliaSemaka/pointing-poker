export const ADD_WEB_SOCKET = 'ADD_WEB_SOCKET';
export const ADD_GAME = 'ADD_GAME';
export const ADD_MY_ID = 'ADD_MY_ID';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const SET_TITLE = 'SET_TITLE';
export const ADD_CARD = 'ADD_CARD';

import {
  EGameStatus,
  ICardsValues,
  IIssue,
  IMarksCurrentTask,
} from '../components/Game/game.module';
import { IChatMessage } from '../components/UI/ui.module';
import { IUsers } from '../pages/pages.module';

export interface ISettings {
  isPlayer: boolean;
  cardsSet: string;
  scoreType: string;
  isLetAuto: boolean;
  isTurnAuto: boolean;
  isChangeEnable: boolean;
  isTimerEnable: boolean;
  minute: null | string;
  seconds: null | string;
}

export interface IMainState {
  socket: WebSocket | null;
  myId: string | null;
}

export interface IGameState {
  id: string;
  dillerId: string;
  title: string;
  gameStatus: EGameStatus;
  users: IUsers[];
  settings: ISettings;
  cards: ICardsValues[];
  tasks: IIssue[];
  marksCurrentTask: IMarksCurrentTask[];
  delUser: null | string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IReducer {
  main: IMainState;
  chat: IChatMessage[];
  game: IGameState;
  form: any;
}
