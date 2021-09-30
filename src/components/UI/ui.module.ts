import { ITime, IUsers } from '../../pages/pages.module';
import { ERoundStatus, ICardsValues, IIssue } from '../Game/game.module';

export enum EButtonStyle {
  dark = 'dark',
  light = 'light',
}

export interface IButton {
  text: string;
  handleClick: (event?: React.MouseEvent | boolean) => void;
  style?: EButtonStyle;
  isDisabled?: boolean;
  type?: EButtonType;
}

export enum EButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

export enum ERenderFieldType {
  withButton = 'with-button',
  middle = 'middle',
  big = 'big',
  card = 'card',
}

export enum EType {
  text = 'text',
  file = 'file',
  number = 'number',
}

export interface IMeta {
  touched?: any;
  error?: any;
}

export interface IRenderField {
  input?: any;
  meta?: IMeta;
  type?: EType;
  styles?: ERenderFieldType;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  setTitleGame?: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISelect {
  options: string[];
  name: string;
}

export interface IAvatar {
  initials?: string | null;
  image?: string | null;
}

export interface IMemberCard {
  firstName?: string;
  lastName?: string;
  position?: string;
  image?: string | null;
  isMyCard?: boolean;
  isRemove?: boolean;
  handleRemoveMember?: () => void;
  isSmall?: boolean;
}

export enum ETypeCard {
  normal = 'normal',
  add = 'add',
  remove = 'remove',
  none = 'none',
}

export interface IIssueCard {
  title: string;
  priority?: string | null;
  type?: ETypeCard;
  isCheck?: boolean;
  handleIssue: (value: EHandleIssue) => void;
}

export interface IGameCard {
  isAddCard?: boolean;
  number?: string | null;
  scoreType?: string | null;
  index?: number;
  isEdit?: boolean;
  isCheck?: boolean;
  handleAddCard?: () => void;
  handleEditCard?: (value: string, index?: number) => void;
  handleDeleteCard?: (index: number) => void;
  setAddCard?: React.Dispatch<React.SetStateAction<boolean>>;
  isNewCard?: boolean;
}

export interface IModalWindow {
  children: React.ReactNode;
  handleClick: (value: boolean) => void;
}

export interface IRoundTime {
  minute: string | null | number;
  seconds: string | null | number;
  isChange?: boolean;
  handleChangeMinute?: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSeconds?: React.Dispatch<React.SetStateAction<string>>;
  roundStatus?: ERoundStatus;
  handleTimeFinish?: () => void;
}

export interface IScoreCard {
  scoreType?: string | null;
  number?: string | null;
}

export interface IGameSettingsForm {
  cardsValues?: ICardsValues[];
  handleEditCard: (value: string, index?: number) => void;
  handleDeleteCard?: (index: number) => void;
  handleSubmit?: () => void;
  onSubmit?: () => void;
  handleChangeMinute: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSeconds: React.Dispatch<React.SetStateAction<string>>;
  roundTime: ITime;
  isTimerEnableState: boolean;
  setIsTimerEnable: React.Dispatch<React.SetStateAction<boolean>>;
  successSettings: boolean;
}

export interface IChatMessage {
  idUser: string;
  message: string;
}

export interface IInitialValuesCopy {
  copyId: string;
}

export interface IGameDataForm {
  isDealer: boolean;
  title: string;
  dealerData: IUsers;
  editTitle: boolean;
  setEditTitle: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditTitle: (value: string) => void;
  handleStartGame: () => void;
  handleCancelGame: () => void;
  handleExit: () => void;
  initialValues: IInitialValuesCopy;
}

export interface IMembers {
  myId: string;
  dealerId: string;
  members: IUsers[];
  handleRemoveMember: () => void;
}

export interface IChat {
  myId: string;
  dealerId: string;
  handleSubmit?: () => void;
  onSubmit?: () => void;
  chatMessage?: IChatMessage[];
  members: IUsers[];
  handleRemoveMember: () => void;
}

export interface IIssues {
  issues: IIssue[];
  handleIssue: (value: EHandleIssue) => void;
}

export enum EHandleIssue {
  show = 'show',
  add = 'add',
  remove = 'remove',
  edit = 'edit',
  delete = 'delete',
}

export interface IKickPlayerModal {
  playerName: string;
  actionKickButton: (value: boolean) => void;
  authorKick?: string | null;
}
