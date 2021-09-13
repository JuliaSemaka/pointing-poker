import React from 'react';
import { EInputType, IInput } from '../ui.module';

import './Input.scss';

export const Input: React.FC<IInput> = ({
  value,
  сhangeInput,
  type,
}) => (
  <input
    type="text"
    className={`text text-bold input input-${type}`}
    disabled={type === EInputType.widthButton ? true : false}
    onChange={сhangeInput}
    value={value}
  />
);
