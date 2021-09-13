import React from 'react';

import { EButtonStyle, IButton } from '../ui.module';
import './Button.scss';

export const Button: React.FC<IButton> = ({
  text,
  isClick,
  style = EButtonStyle.dark,
  isDisabled = false,
}) => (
  <button
    className={`text text-ruda button button-${style}`}
    disabled={isDisabled}
    onClick={isClick}
  >
    {text}
  </button>
);
