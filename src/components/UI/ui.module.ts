export enum EButtonStyle {
  dark = 'dark',
  light = 'light',
}

export interface IButton {
  text: string;
  handleClick: () => void;
  style?: EButtonStyle;
  isDisabled?: boolean;
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
  style?: ERenderFieldType;
  disabled?: boolean;
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
}

export interface IGameCard {
  isAddCard?: boolean;
  number?: string;
  scoreType?: string | null;
  isEdit?: boolean;
  isCheck?: boolean;
}

export interface IModalWindow {
  children: React.ReactNode;
  handleClick: () => void;
}

export interface IRoundTime {
  minute?: number;
  seconds?: number;
  isChange?: boolean;
  changeMinute?: (value: string) => void | null;
  changeSeconds?: (value: string) => void | null;
}

export interface IGameSettingsForm {
  isPlayer?: boolean;
  isChangeEnable?: boolean;
  isTimerEnable?: boolean;
  isTurnAuto?: boolean;
  isLetAuto?: boolean;
}

export interface ILobby {
  isDealer?: boolean;
  handleSubmit: () => void;
  sendMessageChat: () => void;
  members: number[];
}

export interface IGameDataForm {
  isDealer: boolean;
  handleSubmit: () => void;
}

export interface IMembers {
  members: number[];
}

export interface IChat {
  sendMessageChat: () => void;
}
