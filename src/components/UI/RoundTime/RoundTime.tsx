import React, { useEffect, useRef, useState } from 'react';
import { ERoundStatus } from '../../Game/game.module';

import { IRoundTime } from '../ui.module';
import './RoundTime.scss';

export const RoundTime: React.FC<IRoundTime> = ({
  minute,
  seconds,
  isChange = false,
  handleChangeMinute,
  handleChangeSeconds,
  roundStatus,
  handleTimeFinish,
}) => {
  const [minuteRound, setMinuteRound] = useState(+minute!);
  const [secondsRound, setSecondsRound] = useState(+seconds!);
  const foo: any = useRef();

  useEffect(() => {
    if (roundStatus === ERoundStatus.start) {
      setMinuteRound(+minute!);
      setSecondsRound(+seconds!);
    }
  }, [roundStatus]);

  const tick = () => {
    setSecondsRound((prev) => {
      if (prev === 0) {
        setMinuteRound((prev) => prev - 1);
        return 59;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    if (minuteRound === 0 && secondsRound === 0) {
      clearInterval(foo.current);
      handleTimeFinish!();
    }
  }, [secondsRound]);

  useEffect(() => {
    if (roundStatus === ERoundStatus.inProgress && minute) {
      foo.current = setInterval(tick, 1000);
    }
    return () => clearInterval(foo.current);
  }, [roundStatus]);

  return (
    <div className="round-time">
      <div className="round-time__half">
        <span className="round-time__text text text-ruda-small">minutes</span>
        {isChange && handleChangeMinute ? (
          <input
            type="number"
            className="text text-ruda text-ruda-big"
            min="0"
            value={minute!}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeMinute(e.target.value)
            }
          />
        ) : (
          <p
            className={`text text-ruda text-ruda-big ${
              !minuteRound && secondsRound < 10 && 'text-error'
            }`}
          >
            {minuteRound}
          </p>
        )}
      </div>
      <div className="round-time__half">
        <span className="round-time__text text text-ruda-small">secons</span>
        <span className="round-time__separator text text-ruda">:</span>
        {isChange && handleChangeSeconds ? (
          <input
            type="number"
            className="text text-ruda text-ruda-big"
            min="0"
            value={seconds!}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeSeconds(e.target.value)
            }
          />
        ) : (
          <p
            className={`text text-ruda text-ruda-big ${
              !minuteRound && secondsRound < 10 && 'text-error'
            }`}
          >
            {secondsRound}
          </p>
        )}
      </div>
    </div>
  );
};
