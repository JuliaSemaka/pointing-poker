import { IUsers } from '../../pages/pages.module';

export interface IGameData {
  myId: string;
  isDealer: boolean;
  title: string;
  dealerData: IUsers;
  handleGameStopGame: () => void;
  handleGameExit: () => void;
  handleTimeFinish: () => void;
  minute?: string | null;
  seconds?: string | null;
  roundStatus: ERoundStatus;
}

export interface IIssue {
  id: string;
  title: string;
  link: string;
  priority: string;
  isChecked: boolean;
  mark: string | null;
}

export interface ICardsValues {
  scoreType: string | null;
  number: string | null;
}

export interface IIssues {
  isDealer: boolean;
  handleRunRound: () => void;
  handleRestartRound: () => void;
  handleNextIssye: () => void;
  roundStatus: ERoundStatus;
  issues: IIssue[];
  handleGameIssue: (value: string) => void;
  cardsValues: ICardsValues[];
  isTimerEnable: boolean;
  minute: string | null;
  seconds: string | null;
  handleTimeFinish: () => void;
}

export enum EGameStatus {
  created = 'created',
  inProgress = 'inProgress',
  finished = 'finished',
  closed = 'closed',
}

export enum ERoundStatus {
  start = 'start',
  inProgress = 'inProgress',
  finish = 'finish',
}

export interface IMarksCurrentTask {
  idUser: string;
  mark: string;
  scoreType: string | null;
}

export interface IStatistics {
  cardsValues: ICardsValues[];
  countPercentTask: (value: string | null) => string | undefined;
}

export interface IScore {
  marksCurrentTask: IMarksCurrentTask[];
  members: IUsers[];
  myId: string;
  dealerId: string;
}
