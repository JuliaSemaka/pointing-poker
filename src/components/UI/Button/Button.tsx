import React from 'react';

import { EButtonStyle, EButtonType, IButton } from '../ui.module';
import './Button.scss';

export const Button: React.FC<IButton> = ({
  text,
  handleClick,
  style = EButtonStyle.dark,
  isDisabled = false,
  type = EButtonType.button
}) => (
  <button
    className={`text text-ruda button button-${style}`}
    disabled={isDisabled}
    onClick={handleClick}
    type={type}
  >
    {text}
  </button>
);
