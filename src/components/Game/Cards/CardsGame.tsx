import React from 'react';

import { GameCard } from '../..';
import { ICardsGame } from '../game.module';
import './CardsGame.scss';

export const CardsGame: React.FC<ICardsGame> = ({ cardsValues }) => (
  <div className="game-item">
    <div className="game-item__cards">
      {cardsValues.map(({ number, scoreType }, index) => (
        <GameCard key={index} scoreType={scoreType} number={number} />
      ))}
    </div>
    )
  </div>
);
