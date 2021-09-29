import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { IssueCard } from '../../UI/Cards/IssueCard/IssueCard';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import { EButtonStyle, ETypeCard } from '../../UI/ui.module';
import { EGameStatus, IIssues } from '../game.module';

import './Issues.scss';

export const IssuesGame: React.FC<IIssues> = ({
  isDealer,
  handleRunRound,
  handleRestartRound,
  handleNextIssye,
  gameStatus,
  issues,
  handleGameIssue,
  cardsValues,
  isTimerEnable,
  minute,
  seconds,
}) => {
  const [minuteRound, setMinuteRound] = useState(+minute!);
  const [secondsRound, setSecondsRound] = useState(+seconds!);
  const foo: any = useRef();

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
    }
  }, [secondsRound]);

  useEffect(() => {
    if (gameStatus === EGameStatus.inProgress) {
      foo.current = setInterval(tick, 1000);
    }
    return () => clearInterval(foo.current);
  }, [gameStatus]);

  const runRound = () => {
    handleRunRound();
  };

  return (
    <div className="game-item">
      <div className="game-item__row game-item__issues">
        <div className="game-item__column">
          <div className="game-item__title">
            <h3 className="text text-ruda">Issues</h3>
          </div>
          {issues.map(({ id, title, priority, isChecked }, index) => (
            <IssueCard
              key={index}
              title={title}
              type={ETypeCard.remove}
              priority={`${priority} priority`}
              isCheck={isChecked}
              handleIssue={handleGameIssue}
            />
          ))}
          <IssueCard
            title="Create new Issue"
            type={ETypeCard.add}
            handleIssue={handleGameIssue}
          />
        </div>
        {isDealer && (
          <div className="game-item__column game-item__control">
            {isTimerEnable && (
              <RoundTime minute={minuteRound} seconds={secondsRound} />
            )}
            <Button
              style={EButtonStyle.dark}
              text={
                gameStatus === EGameStatus.created
                  ? 'Run Round'
                  : 'Restart Round'
              }
              handleClick={
                gameStatus === EGameStatus.created
                  ? runRound
                  : handleRestartRound
              }
            />
            {gameStatus !== EGameStatus.created && (
              <Button
                style={EButtonStyle.dark}
                text={'Next ISSUE'}
                handleClick={handleNextIssye}
              />
            )}
          </div>
        )}
      </div>
      {!isDealer && (
        <div className="game-item__cards">
          {cardsValues.map(({ number, scoreType }, index) => (
            <GameCard key={index} scoreType={scoreType} number={number} />
          ))}
        </div>
      )}
    </div>
  );
};
