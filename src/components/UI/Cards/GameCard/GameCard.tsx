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
import { ERoundStatus } from '../../../Game/game.module';

export const GameCard: React.FC<IGameCard> = ({
  isAddCard = false,
  number = null,
  scoreType = null,
  isEdit = false,
  isCheck = false,
  handleEditCard,
  handleDeleteCard,
  handleAddCard,
  setAddCard,
  isNewCard,
  cardsValues,
  handleClickCard,
  roundStatus,
  isChecked,
  isChangeEnable,
}) => {
  const [editCard, setEditCard] = useState(isNewCard ?? false);
  const [numberCard, setNumberCard] = useState(number || 'Unknown');
  const [isRepeat, setIsRepeat] = useState(false);

  const saveChange = () => {
    if (
      !cardsValues!.some((item) => item.number === numberCard) ||
      numberCard === number
    ) {
      if (number !== null) {
        handleEditCard!(numberCard, number!);
      } else {
        handleEditCard!(numberCard);
      }
      setEditCard(false);
      setIsRepeat(false);
      if (setAddCard) {
        setAddCard(false);
      }
    } else {
      setIsRepeat(true);
    }
  };

  const deleteCard = () => {
    if (setAddCard) {
      setAddCard(false);
    } else {
      handleDeleteCard!(number!);
    }
  };

  const handleClick = () => {
    if (
      handleClickCard &&
      (roundStatus === ERoundStatus.inProgress ||
        (roundStatus === ERoundStatus.finish && isChangeEnable))
    ) {
      handleClickCard(number!, scoreType);
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
    <div
      className={`game-card ${
        handleClickCard &&
        (roundStatus === ERoundStatus.inProgress ||
          (roundStatus === ERoundStatus.finish && isChangeEnable)) &&
        'game-card__click'
      } ${isChecked && 'game-card__checked'}`}
      onClick={handleClick}
    >
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
      {isRepeat && (
        <p className="text text-small text-error card-repeat">
          Card already exists
        </p>
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
