import React from 'react';
import { GameCard, IssueCard } from '..';
import { IGameResult } from '../components.module';
import { ETypeCard } from '../UI/ui.module';

import './GameResult.scss';

const MAX = 13;

export const GameResult: React.FC<IGameResult> = ({
  title,
  issues,
  handleGameIssue,
  cardsValues,
  countPercentTask,
  isDealer,
}) => {
const analiticsMark = (mark: number) => {
  return ((Math.floor(Math.random() * MAX) + mark) / 2) < 2 ? 2 : (Math.floor(Math.random() * MAX) + mark) / 2;
};

  return (
    <div className="game wrapper">
      <main className="game-main">
        <div className="game-item">
          <div className="game-item__title">
            <h3 className="text text-ruda">{title}</h3>
          </div>
          {issues.map(({ id, title, priority, mark }) => (
            <div key={id}>
              <IssueCard
                title={title}
                type={ETypeCard.none}
                priority={`${priority} priority`}
                handleIssue={handleGameIssue}
                isDealer={isDealer}
                mark={mark!}
              />
              <div className="game-item__analitics">
                <p className="text text-ruda-medium">Analitics Mark: </p>
                <p className="text text-ruda">{analiticsMark(+mark!)}</p>
              </div>
              <div className="game-item__cards">
                {cardsValues.map(({ number, scoreType }, index) => (
                  <div className="game-item__card" key={index}>
                    <GameCard scoreType={scoreType} number={number} />
                    <div className="text text-ruda">
                      {countPercentTask(number, id)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
};
