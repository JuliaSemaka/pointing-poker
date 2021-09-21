import {
  EGameStatus,
  ICardsValues,
  IIssue,
  IMarksCurrentTask,
} from '../components/Game/game.module';

export interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: string | null;
  role: string;
}

export interface IGame {
  isDealer: boolean;
  title: string;
  dealerData: IUsers;
  handleGameStopGame: () => void;
  handleGameExit: () => void;
  handleRunRound: () => void;
  handleRestartRound: () => void;
  handleNextIssye: () => void;
  gameStatus: EGameStatus;
  issues: IIssue[];
  handleGameIssue: (value: string) => void;
  cardsValues: ICardsValues[];
  marksCurrentTask: IMarksCurrentTask[];
  members: IUsers[];
}
