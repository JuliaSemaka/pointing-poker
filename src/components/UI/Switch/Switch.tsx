import React, { useState } from 'react'
import './Switch.scss';

interface SwitchProps {
  check: boolean,
  label: string,
  // handleClick: React.ChangeEventHandler<HTMLInputElement>
}

const Switch = ({ ...props }: SwitchProps) => {
  const { check, label } = props;
  const [isCheck, setIsCheck] = useState(check);

  const handleClick = () => {
    setIsCheck(!isCheck);
  }

  return (
    <div className="switch-wrapper">
      <div className="switch-label">
        {label}
      </div>
      <label className="switch">
        <input type="checkbox" checked={isCheck} onChange={handleClick} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Switch
