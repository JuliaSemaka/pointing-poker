import React from 'react';
import { Field } from 'redux-form';

import { ISelect } from '../ui.module';
import './Select.scss';

export const Select: React.FC<ISelect> = ({ optionArr, name }) => {
  return (
    <Field
      className="text text-bold custom-select"
      name={name}
      component="select"
      label={name}
    >
      {optionArr.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </Field>
  );
};
