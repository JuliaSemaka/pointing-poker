import { IUsers } from '../pages/pages.module';

export enum ERole {
  dealer = 'dealer',
  player = 'player',
  observer = 'observer',
}

export interface IConfirmedUser {
  handleConfirmedUser: (value: boolean) => void;
  valueConfirmedUser: IUsers | null;
}
