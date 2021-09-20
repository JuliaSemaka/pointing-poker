import {
  EGameStatus,
  ICardsValues,
  IIssue,
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
  handleStopGame: (value: string) => void;
  handleRunRound: (value: string) => void;
  gameStatus: EGameStatus;
  issues: IIssue[];
  handleGameIssue: (value: string) => void;
  cardsValues: ICardsValues[];
}
