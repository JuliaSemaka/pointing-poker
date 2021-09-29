import {
  EGameStatus,
  ICardsValues,
  IIssue,
  IMarksCurrentTask,
} from '../components/Game/game.module';
import {
  EHandleIssue,
  IChatMessage,
  IInitialValuesCopy,
} from '../components/UI/ui.module';

export interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: string | null;
  role: string;
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
  gameStatus: EGameStatus;
  issues: IIssue[];
  handleGameIssue: (value: string) => void;
  cardsValues: ICardsValues[];
  marksCurrentTask: IMarksCurrentTask[];
  members: IUsers[];
  isTimerEnable: boolean;
  minute: string | null;
  seconds: string | null;
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
  handleDeleteCard?: (index: number) => void;
  handleStartGame: () => void;
  handleCancelGame: () => void;
  handleExit: () => void;
  cardsValues?: ICardsValues[];
  handleEditCard: (value: string, index?: number) => void;
  issues: IIssue[];
  handleIssue: (value: EHandleIssue) => void;
  handleRemoveMember: () => void;
  handleSubmitGameSettings: (event?: React.MouseEvent) => void;
  handleChangeMinute: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSeconds: React.Dispatch<React.SetStateAction<string>>;
  initialValuesCopy: IInitialValuesCopy;
  initialSettings: IInitialSettings;
  roundTime: ITime;
  isTimerEnableState: boolean;
  setIsTimerEnable: React.Dispatch<React.SetStateAction<boolean>>;
  successSettings: boolean;
}
