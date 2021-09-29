import React, { useState } from 'react';

import { ERenderFieldType, IGameCard } from '../../ui.module';
import Edit from '../../../../assets/images/cards/edit.svg';
import Delete from '../../../../assets/images/cards/delete.svg';
import CheckMark from '../../../../assets/images/cards/check.svg';
import UnknownCard from '../../../../assets/images/unknown-сard.jpg';
import AddCard from '../../../../assets/images/add-card.jpg';
import Check from '../../../../assets/images/check.svg';
import '../Cards.scss';
import { RenderField } from '../../..';

export const GameCard: React.FC<IGameCard> = ({
  isAddCard = false,
  number = null,
  scoreType = null,
  index,
  isEdit = false,
  isCheck = false,
  handleEditCard,
  handleDeleteCard,
  handleAddCard,
  setAddCard,
  isNewCard,
}) => {
  const [editCard, setEditCard] = useState(isNewCard ?? false);
  const [numberCard, setNumberCard] = useState(number || 'Unknown');

  const saveChange = () => {
    if (index !== undefined) {
      handleEditCard!(numberCard, index);
    } else {
      handleEditCard!(numberCard);
    }
    setEditCard(false);
    if (setAddCard) {
      setAddCard(false);
    }
  };
  const deleteCard = () => {
    if (setAddCard) {
      setAddCard(false);
    } else {
      handleDeleteCard!(index!);
    }
  };

  if (isAddCard) {
    return (
      <div className="game-card game-card__add" onClick={handleAddCard}>
        <img className="game-card__img" src={AddCard} alt="add-card" />
      </div>
    );
  }

  return (
    <div className="game-card">
      {isEdit && !editCard && (
        <img
          className="game-card__edit card-cred"
          src={Edit}
          alt="edit"
          onClick={() => setEditCard(true)}
        />
      )}
      {isEdit && editCard && (
        <div className="game-card__block">
          <img
            className="card-cred"
            src={CheckMark}
            alt="check-mark"
            onClick={saveChange}
          />
          <img
            className="card-cred"
            src={Delete}
            alt="delete"
            onClick={deleteCard}
          />
        </div>
      )}
      {isCheck && (
        <div className="card__check">
          <div className="card__check-circle">
            <img className="card__check-img" src={Check} alt="check" />
          </div>
        </div>
      )}
      {!editCard ? (
        <p className="text text-ruda text-ruda-small game-card__top">
          {number || 'Unknown'}
        </p>
      ) : (
        <RenderField
          value={numberCard}
          setTitleGame={setNumberCard}
          styles={ERenderFieldType.card}
        />
      )}
      {scoreType ? (
        <div className="text text-ruda text-ruda-big game-card__scote-type">
          {scoreType}
        </div>
      ) : (
        <img
          className="game-card__img game-card__scote-type"
          src={UnknownCard}
          alt="unknown-card"
        />
      )}
      <p className="text text-ruda text-ruda-small game-card__bottom">
        {numberCard}
      </p>
    </div>
  );
};
