import React from 'react';

import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import { EButtonStyle } from '../../UI/ui.module';
import { ERoundStatus, IGameData } from '../game.module';

export const GameDataGame: React.FC<IGameData> = ({
  myId,
  isDealer,
  title,
  dealerData,
  handleGameStopGame,
  handleGameExit,
  roundStatus,
  minute,
  seconds,
  handleTimeFinish,
  handleRunRound,
  handleRestartRound,
  handleNextIssye,
  isTimerEnable,
  issues,
}) => {
  const { firstName, lastName, jobTitle, id } = dealerData;

  return (
    <div className="game-item">
      <div className="game-item__title">
        <h3 className="text text-ruda">{title}</h3>
      </div>
      <div className="game-item__row">
        <div className="scram-master">
          <p className="text text-ruda text-ruda-small">Scram master:</p>
          <MemberCard
            firstName={firstName}
            lastName={lastName}
            position={jobTitle}
            isMyCard={myId === id}
          />
        </div>
        {!isDealer && isTimerEnable && (seconds || minute) && (
          <RoundTime
            minute={minute!}
            seconds={seconds!}
            roundStatus={roundStatus}
            handleTimeFinish={handleTimeFinish}
          />
        )}
        {isDealer && (
          <div className="game-item__column game-item__control">
            {isTimerEnable && (
              <RoundTime
                minute={minute!}
                seconds={seconds!}
                roundStatus={roundStatus}
                handleTimeFinish={handleTimeFinish}
              />
            )}
            {issues.length !== 0 && (
              <Button
                style={EButtonStyle.dark}
                text={
                  roundStatus === ERoundStatus.start
                    ? 'Run Round'
                    : 'Restart Round'
                }
                handleClick={
                  roundStatus === ERoundStatus.start
                    ? handleRunRound
                    : handleRestartRound
                }
              />
            )}
            {roundStatus !== ERoundStatus.start && (
              <Button
                style={EButtonStyle.dark}
                text={'Next ISSUE'}
                handleClick={handleNextIssye}
              />
            )}
          </div>
        )}
        <Button
          style={EButtonStyle.light}
          text={isDealer ? 'Stop Game' : 'Exit'}
          handleClick={isDealer ? handleGameStopGame : handleGameExit}
        />
      </div>
    </div>
  );
};
