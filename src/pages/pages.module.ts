import {
  EGameStatus,
  ICardsValues,
  IIssue,
  IMarksCurrentTask,
} from '../components/Game/game.module';
import { EHandleIssue, IChatMessage } from '../components/UI/ui.module';

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

export interface ILobby {
  isDealer?: boolean;
  sendMessageChat: () => void;
  members: IUsers[];
  chatMessage: IChatMessage[];
  title: string;
  dealerData: IUsers;
  handleEditTitle: () => void;
  handleCopy: () => void;
  handleStartGame: () => void;
  handleCancelGame: () => void;
  handleExit: () => void;
  cardsValues?: ICardsValues[];
  handleAddCard: () => void;
  handleEditCard: () => void;
  issues: IIssue[];
  handleIssue: (value: EHandleIssue) => void;
  handleRemoveMember: () => void;
  handleSubmitGameSettings: () => void;
  handleChangeMinute: () => void;
  handleChangeSeconds: () => void;
}
