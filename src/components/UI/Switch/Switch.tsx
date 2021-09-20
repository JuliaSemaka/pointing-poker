import React from 'react';
import './Switch.scss';

interface SwitchProps {
  isChecked: boolean,
  label?: string,
  handleClick: React.Dispatch<React.SetStateAction<boolean>>
}

export const Switch = ({ ...props }: SwitchProps): JSX.Element => {
  const { isChecked, label, handleClick } = props;

  return ( 
    <div className="switch-wrapper">
      {label && <div className="switch-label">{label}</div>}
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleClick(!isChecked)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
