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
  issues,
  handleGameIssue,
  cardsValues,
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
