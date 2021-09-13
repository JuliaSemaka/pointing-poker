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

export enum EInputType {
  withButton = 'with-button',
  middle = 'middle',
  big = 'big',
}

export interface IInput {
  value: string;
  сhangeInput: (value: string) => void;
  type: EInputType;
  validateText: string | null;
}
