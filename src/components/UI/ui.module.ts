export enum EButtonStyle {
  dark = 'dark',
  light = 'light',
}

export interface IButton {
  text: string;
  isClick: () => void;
  style: EButtonStyle;
  isDisabled: boolean;
}
