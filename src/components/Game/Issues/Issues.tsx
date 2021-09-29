import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { IssueCard } from '../../UI/Cards/IssueCard/IssueCard';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import { EButtonStyle, ETypeCard } from '../../UI/ui.module';
import { EGameStatus, ERoundStatus, IIssues } from '../game.module';

import './Issues.scss';

export const IssuesGame: React.FC<IIssues> = ({
  isDealer,
  handleRunRound,
  handleRestartRound,
  handleNextIssye,
  roundStatus,
  issues,
  handleGameIssue,
  cardsValues,
  isTimerEnable,
  minute,
  seconds,
  handleTimeFinish,
}) => {
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
              <RoundTime
                minute={minute}
                seconds={seconds}
                roundStatus={roundStatus}
                handleTimeFinish={handleTimeFinish}
              />
            )}
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
            {roundStatus !== ERoundStatus.start && (
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
