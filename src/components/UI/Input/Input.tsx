import React from 'react';
import { EInputType, IInput } from '../ui.module';

import './Input.scss';

export const Input: React.FC<IInput> = ({
  value,
  сhangeInput,
  type = EInputType.big,
  validateText = null,
}) => (
  <div className="input-block">
    <input
      type="text"
      className={`text text-bold input input-${type}`}
      disabled={type === EInputType.withButton ? true : false}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        сhangeInput(event.target.value)
      }
      value={value}
    />
    <p className="text text-error input-error-text">{validateText}</p>
  </div>
);
