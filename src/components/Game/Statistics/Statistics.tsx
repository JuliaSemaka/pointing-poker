import React from 'react';

import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { IStatistics } from '../game.module';

import './Statistics.scss';

export const Statistics: React.FC<IStatistics> = ({
  cardsValues,
  marksCurrentTask,
}) => {
  const percentTask = (number: string | null) => {
    return (
      (marksCurrentTask.filter(({ mark }) => mark === number).length /
        marksCurrentTask.length) *
      100
    ).toFixed(1);
  };

  return (
    <div className="game-item">
      <div>
        <div className="game-item__title">
          <h3 className="text text-ruda">Statistics:</h3>
        </div>
        <div className="game-item__cards">
          {cardsValues.map(({ number, scoreType }) => (
            <div className="game-item__card" key={number}>
              <GameCard
                scoreType={scoreType}
                // number={number}
              />
              <div className="text text-ruda">{percentTask(number)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
