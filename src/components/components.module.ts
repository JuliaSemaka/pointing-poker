import { IUsers } from '../pages/pages.module';
import { ICardsValues, IIssue } from './Game/game.module';
import { EHandleIssue } from './UI/ui.module';

export enum ERole {
  dealer = 'dealer',
  player = 'player',
  observer = 'observer',
}

export interface IConfirmedUser {
  handleConfirmedUser: (value: boolean) => void;
  valueConfirmedUser: IUsers | null;
}

export interface IGameResult {
  title: string;
  issues: IIssue[];
  handleGameIssue: (value: EHandleIssue) => void;
  cardsValues: ICardsValues[];
  countPercentTask: (value: string | null) => string | undefined;
}
