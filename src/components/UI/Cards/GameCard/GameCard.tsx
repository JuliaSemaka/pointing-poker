import React from 'react';

import { IGameCard } from '../../ui.module';
import Edit from '../../../../assets/images/cards/edit.svg';
import UnknownCard from '../../../../assets/images/unknown-сard.jpg';
import AddCard from '../../../../assets/images/add-card.jpg';
import Check from '../../../../assets/images/check.svg';
import '../Cards.scss';

export const GameCard: React.FC<IGameCard> = ({
  isAddCard = false,
  number = null,
  scoreType = null,
  isEdit = false,
  isCheck = false,
  handleEditCard,
  handleAddCard,
}) => {
  if (isAddCard) {
    return (
      <div className="game-card game-card__add" onClick={handleAddCard}>
        <img className="game-card__img" src={AddCard} alt="add-card" />
      </div>
    );
  }

  return (
    <div className="game-card">
      {isEdit && (
        <img
          className="game-card__edit card-cred"
          src={Edit}
          alt="edit"
          onClick={handleEditCard}
        />
      )}
      {isCheck && (
        <div className="card__check">
          <div className="card__check-circle">
            <img className="card__check-img" src={Check} alt="check" />
          </div>
        </div>
      )}
      <p className="text text-ruda text-ruda-small game-card__top">
        {number || 'Unknown'}
      </p>
      {scoreType ? (
        <div className="text text-ruda text-ruda-big game-card__scote-type">
          {scoreType}
        </div>
      ) : (
        <img className="game-card__img" src={UnknownCard} alt="unknown-card" />
      )}
      <p className="text text-ruda text-ruda-small game-card__bottom">
        {number ?? 'Unknown'}
      </p>
    </div>
  );
};
