import { IUsers } from '../../pages/pages.module';
import { ICardsValues, IIssue } from '../Game/game.module';

export enum EButtonStyle {
  dark = 'dark',
  light = 'light',
}

export interface IButton {
  text: string;
  handleClick: (event?: React.MouseEvent) => void;
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
}

export enum EType {
  text = 'text',
  file = 'file',
}

export interface IMeta {
  touched?: any;
  error?: any;
}

export interface IRenderField {
  input?: any;
  meta: IMeta;
  type?: EType;
  styles?: ERenderFieldType;
  disabled?: boolean;
  placeholder?: string;
  other?: any;
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
  isEdit?: boolean;
  isCheck?: boolean;
  handleAddCard?: () => void;
  handleEditCard?: () => void;
}

export interface IModalWindow {
  children: React.ReactNode;
  handleClick: (value: boolean) => void;
}

export interface IRoundTime {
  minute?: number;
  seconds?: number;
  isChange?: boolean;
  handleChangeMinute?: (value: string) => void | null;
  handleChangeSeconds?: (value: string) => void | null;
}

export interface IScoreCard {
  scoreType?: string | null;
  number?: string | null;
}

export interface IGameSettingsForm {
  isPlayer?: boolean;
  isChangeEnable?: boolean;
  isTimerEnable?: boolean;
  isTurnAuto?: boolean;
  isLetAuto?: boolean;
  cardsValues?: ICardsValues[];
  handleAddCard: () => void;
  handleEditCard: () => void;
  handleSubmitGameSettings: () => void;
  handleChangeMinute: () => void;
  handleChangeSeconds: () => void;
}

export interface IChatMessage {
  idUser: string;
  message: string;
}

export interface IGameDataForm {
  isDealer: boolean;
  title: string;
  dealerData: IUsers;
  handleEditTitle: () => void;
  handleCopy: () => void;
  handleStartGame: () => void;
  handleCancelGame: () => void;
  handleExit: () => void;
}

export interface IMembers {
  myId: string;
  dillerId: string;
  members: IUsers[];
  handleRemoveMember: () => void;
}

export interface IChat {
  myId: string;
  dillerId: string;
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
