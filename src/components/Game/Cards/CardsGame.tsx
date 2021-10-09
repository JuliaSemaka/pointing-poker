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
  isChangeEnable,
  issueId,
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
            !!marksCurrentTask.length &&
            marksCurrentTask
              .find(({ idTask }) => idTask === issueId)
              ?.marks.findIndex(
                ({ mark, idUser }) => mark === number && idUser === myId
              ) !== -1
          }
          isChangeEnable={isChangeEnable}
        />
      ))}
    </div>
  </div>
);
