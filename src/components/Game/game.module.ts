import { IUsers } from '../../pages/pages.module';
import { EHandleIssue } from '../UI/ui.module';

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
  handleRunRound: () => void;
  handleRestartRound: () => void;
  handleNextIssye: () => void;
  isTimerEnable: boolean;
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

export interface IIssuesGame {
  issues: IIssue[];
  handleGameIssue: (value: EHandleIssue, idIssue?: string) => void;
  handleCheckedIssue: (idIssue: string) => void;
  isDealer?: boolean;
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
  isPlayer: boolean;
  isTurnAuto: boolean;
  roundStatus: ERoundStatus;
}

export interface ICardsGame {
  cardsValues: ICardsValues[];
  handleClickCard: (number: string, scoreType: string | null) => void;
  roundStatus: ERoundStatus;
  marksCurrentTask: IMarksCurrentTask[];
  myId: string;
}
