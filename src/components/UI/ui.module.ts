import React from "react";

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

export interface IModalWindow {
  children: React.ReactNode;
  handleClick: () => void;
  isChecked: boolean;
}
