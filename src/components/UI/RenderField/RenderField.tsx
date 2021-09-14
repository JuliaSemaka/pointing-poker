import React from 'react';
import { ERenderFieldType, EType, IRenderField } from '../ui.module';

import './RenderField.scss';

export const RenderField: React.FC<IRenderField> = ({
  input,
  meta: { touched, error },
  type = EType.text,
  style = ERenderFieldType.big,
  disabled = false,
}) => {
  if (type === EType.file) {
    return (
      <label className={`text text-bold input input-label input-${style}`}>
        <input type="file" className="input-file" />
        Choose file
      </label>
    );
  }

  return (
    <div className="input-block">
      <input
        {...input}
        type={type}
        className={`text text-bold input input-${style}`}
        disabled={disabled}
      />
      {touched && error && <p className="text text-error">{error}</p>}
    </div>
  );
};
