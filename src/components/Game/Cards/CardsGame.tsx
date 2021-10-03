import React from 'react';

import { GameCard } from '../..';
import { ICardsGame } from '../game.module';
import './CardsGame.scss';

export const CardsGame: React.FC<ICardsGame> = ({
  cardsValues,
  handleClickCard,
  roundStatus,
  marksCurrentTask,
  myId,
}) => (
  <div className="game-item">
    <div className="game-item__cards">
      {cardsValues.map(({ number, scoreType }, index) => (
        <GameCard
          key={index}
          scoreType={scoreType}
          number={number}
          handleClickCard={handleClickCard}
          roundStatus={roundStatus}
          isChecked={
            marksCurrentTask.findIndex(
              (item) => item.mark === number && item.idUser === myId
            ) !== -1
          }
        />
      ))}
    </div>
  </div>
);
