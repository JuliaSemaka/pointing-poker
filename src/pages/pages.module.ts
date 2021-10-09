import {
  EGameStatus,
  ERoundStatus,
  ICardsValues,
  IIssue,
  IMarksCurrentTask,
} from '../components/Game/game.module';
import {
  EHandleIssue,
  IChatMessage,
  IInitialValuesCopy,
} from '../components/UI/ui.module';
import { IDelUser } from '../store/store.module';

export const THIRTY_SECONDS = '30';
export const ZERO_SECONDS = '0';

export interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: string | null;
  role: string;
  confirmed?: boolean;
  myId?: string;
}

export interface IGame {
  myId: string;
  dealerId: string;
  isDealer: boolean;
  title: string;
  dealerData: IUsers;
  handleGameStopGame: () => void;
  handleGameExit: () => void;
  handleRunRound: () => void;
  handleRestartRound: () => void;
  handleNextIssye: () => void;
  handleTimeFinish: () => void;
  gameStatus: EGameStatus;
  roundStatus: ERoundStatus;
  issues: IIssue[];
  handleGameIssue: (value: EHandleIssue, idIssue?: string) => void;
  cardsValues: ICardsValues[];
  marksCurrentTask: IMarksCurrentTask[];
  members: IUsers[];
  isTimerEnable: boolean;
  minute: string | null;
  seconds: string | null;
  isPlayer: boolean;
  isTurnAuto: boolean;
  valueConfirmedUser: IUsers | null;
  handleConfirmedUser: (value: boolean) => void;
  countPercentTask: (value: string | null, id?: string) => string | undefined;
  handleClickCard: (number: string, scoreType: string | null) => void;
  showIssue: boolean;
  handleCloseModal: (event?: boolean) => void;
  handelAddIssue: (props: any) => void;
  handleCheckedIssue: (idIssue: string) => void;
  initialIssuesValue?: IIssue;
  kickPlayer: boolean;
  isChangeEnable: boolean;
  actionKickButton: (value: boolean) => void;
  delUser: IDelUser | null;
  handleRemoveMember: (idUser: string) => void;
}

export interface IInitialSettings {
  isPlayer: boolean;
  isChangeEnable: boolean;
  isTurnAuto: boolean;
  isLetAuto: boolean;
  cardsSet: string;
  scoreType: string;
}

export interface ITime {
  minute: string | null;
  seconds: string | null;
}

export interface ILobby {
  myId: string;
  dealerId: string;
  isDealer: boolean;
  sendMessageChat: (event?: React.MouseEvent) => void;
  members: IUsers[];
  chatMessage: IChatMessage[];
  title: string;
  dealerData: IUsers;
  editTitle: boolean;
  setEditTitle: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditTitle: (value: string) => void;
  handleDeleteCard?: (number: string) => void;
  handleStartGame: () => void;
  handleCancelGame: () => void;
  handleExit: () => void;
  cards?: ICardsValues[];
  handleEditCard: (value: string, number?: string) => void;
  issues: IIssue[];
  handleIssue: (value: EHandleIssue, idIssue?: string) => void;
  handleRemoveMember: (idUser: string) => void;
  handleSubmitGameSettings: (event?: React.MouseEvent) => void;
  handleChangeMinute: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSeconds: React.Dispatch<React.SetStateAction<string>>;
  initialValuesCopy: IInitialValuesCopy;
  initialSettings: IInitialSettings;
  roundTime: ITime;
  isTimerEnableState: boolean;
  setIsTimerEnable: React.Dispatch<React.SetStateAction<boolean>>;
  successSettings: boolean;
  showIssue: boolean;
  handleCloseModal: (event?: boolean) => void;
  handelAddIssue: (props: any) => void;
  initialIssuesValue?: IIssue;
  kickPlayer: boolean;
  actionKickButton: (value: boolean) => void;
  delUser: IDelUser | null;
}
