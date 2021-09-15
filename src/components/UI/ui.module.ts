export enum EButtonStyle {
  dark = 'dark',
  light = 'light',
}

export interface IButton {
  text: string;
  isClick: () => void;
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
  priority: string | null;
  type: ETypeCard;
}

export interface IGameCard {
  isAddCard?: boolean;
  number?: string;
  scoreType?: string | null;
  isEdit?: boolean;
}
