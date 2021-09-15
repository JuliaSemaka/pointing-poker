import React from 'react';

import { IGameCard } from '../../ui.module';
import Edit from '../../../../assets/images/cards/edit.svg';
import UnknownCard from '../../../../assets/images/unknown-сard.jpg';
import AddCard from '../../../../assets/images/add-card.jpg';
import '../Cards.scss';

export const GameCard: React.FC<IGameCard> = ({
  isAddCard = false,
  number = 'Unknown',
  scoreType = null,
  isEdit = false,
}) => {
  if (isAddCard) {
    return (
      <div className="game-card game-card__add">
        <img className="game-card__img" src={AddCard} alt="add-card" />
      </div>
    );
  }

  return (
    <div className="game-card">
      {isEdit && (
        <img className="game-card__edit card-cred" src={Edit} alt="edit" />
      )}
      <p className="text text-ruda text-ruda-small game-card__top">{number}</p>
      {!scoreType && (
        <img className="game-card__img" src={UnknownCard} alt="unknown-card" />
      )}
      {scoreType && (
        <div className="text text-ruda text-ruda-big game-card__scote-type">
          {scoreType}
        </div>
      )}
      <p className="text text-ruda text-ruda-small game-card__bottom">
        {number}
      </p>
    </div>
  );
};
