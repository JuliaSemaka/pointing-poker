import React from 'react';

import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { IStatistics } from '../game.module';

import './Statistics.scss';

export const Statistics: React.FC<IStatistics> = ({ cardsValues }) => (
  <div className="game-item">
    <div>
      <div className="game-item__title">
        <h3 className="text text-ruda">Statistics:</h3>
      </div>
      <div className="game-item__cards">
        {cardsValues.map((item, index) => (
          <div className="game-item__card" key={index}>
            <GameCard
              scoreType={item.scoreType}
              // number={item.number}
            />
            <div className="text text-ruda">43,5 %</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
