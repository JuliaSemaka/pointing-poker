import React, { useState } from 'react';
import { ERenderFieldType, EType, IRenderField } from '../ui.module';

import './RenderField.scss';

export const RenderField: React.FC<IRenderField> = ({
  input,
  meta,
  type = EType.text,
  styles = ERenderFieldType.big,
  disabled = false,
  placeholder = '',
  value,
  setTitleGame,
}) => {
  if (type === EType.file) {
    const { onChange } = input;
    return (
      <label className={`text text-bold input input-label input-${styles}`}>
        <input type="file" className="input-file" onChange={onChange} />
        Choose file
      </label>
    );
  }

  if (value !== undefined) {
    return (
      <input
        type={type}
        className={`text text-bold input input-${styles} input-inherit`}
        disabled={disabled}
        autoFocus
        placeholder={placeholder}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitleGame!(event?.target.value)
        }
      />
    );
  }

  return (
    <>
      <input
        {...input}
        type={type}
        className={`text text-bold input input-${styles}`}
        disabled={disabled}
        placeholder={placeholder}
      />
      {meta!.touched && meta!.error && (
        <p className="text text-error input-error">{meta!.error}</p>
      )}
    </>
  );
};
