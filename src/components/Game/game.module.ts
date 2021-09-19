import { IUsers } from '../../pages/pages.module';

export interface IGameData {
  isDealer: boolean;
  title: string;
  dealerData: IUsers;
  handleStopGame: (value: string) => void;
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
  handleRunRound: (value: string) => void;
  gameStatus: EGameStatus;
  issues: IIssue[];
  handleGameIssue: (value: string) => void;
  cardsValues: ICardsValues[];
}

export enum EGameStatus {
  created = 'created',
  inProgress = 'inProgress',
  finished = 'finished',
  closed = 'closed',
}

export interface IMarksCurrentTask {
  idUser: string;
  mark: string;
}

export interface IStatistics {
  cardsValues: ICardsValues[];
  marksCurrentTask: IMarksCurrentTask[],
}
