import React from 'react';
import { GameCard, IssueCard } from '..';
import { IGameResult } from '../components.module';
import { ETypeCard } from '../UI/ui.module';

import './GameResult.scss';

export const GameResult: React.FC<IGameResult> = ({
  title,
  issues,
  handleGameIssue,
  cardsValues,
  countPercentTask,
  isDealer
}) => (
  <div className="game wrapper">
    <main className="game-main">
      <div className="game-item">
        <div className="game-item__title">
          <h3 className="text text-ruda">{title}</h3>
        </div>
        {issues.map(({ id, title, priority }) => (
          <div key={id}>
            <IssueCard
              title={title}
              type={ETypeCard.none}
              priority={`${priority} priority`}
              handleIssue={handleGameIssue}
              isDealer={isDealer}
            />
            <div className="game-item__cards">
              {cardsValues.map(({ number, scoreType }, index) => (
                <div className="game-item__card" key={index}>
                  <GameCard scoreType={scoreType} number={number} />
                  <div className="text text-ruda">
                    {countPercentTask(number)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);
