import React from 'react';

import { IRoundTime } from '../ui.module';
import './RoundTime.scss';

export const RoundTime: React.FC<IRoundTime> = ({
  minute = 0,
  seconds = 0,
  isChange = false,
  changeMinute = null,
  changeSeconds = null,
}) => {
  return (
    <div className="round-time">
      <div className="round-time__half">
        <span className="round-time__text text text-ruda-small">minutes</span>
        {isChange && changeMinute ? (
          <input
            type="number"
            className="text text-ruda text-ruda-big"
            value={minute}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeMinute(e.target.value)
            }
          />
        ) : (
          <p className="text text-ruda text-ruda-big">{minute}</p>
        )}
      </div>
      <div className="round-time__half">
        <span className="round-time__text text text-ruda-small">secons</span>
        <span className="round-time__separator text text-ruda">:</span>
        {isChange && changeSeconds ? (
          <input
            type="number"
            className="text text-ruda text-ruda-big"
            value={seconds}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeSeconds(e.target.value)
            }
          />
        ) : (
          <p className="text text-ruda text-ruda-big">{seconds}</p>
        )}
      </div>
    </div>
  );
};
