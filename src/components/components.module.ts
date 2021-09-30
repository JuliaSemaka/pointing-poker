import { ICardsValues, IIssue } from './Game/game.module';

export enum ERole {
  dealer = 'dealer',
  player = 'player',
  observer = 'observer',
}

export interface IGameResult {
  title: string;
  issues: IIssue[];
  handleGameIssue: (value: string) => void;
  cardsValues: ICardsValues[];
  countPercentTask: (value: string | null) => string | undefined;
}
