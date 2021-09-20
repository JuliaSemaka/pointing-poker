import React from 'react';

import { EHandleIssue, ETypeCard, IIssueCard } from '../../ui.module';
import '../Cards.scss';
import Add from '../../../../assets/images/cards/add.svg';
import Delete from '../../../../assets/images/cards/delete.svg';
import Edit from '../../../../assets/images/cards/edit.svg';
import Remove from '../../../../assets/images/cards/remove.svg';

export const IssueCard: React.FC<IIssueCard> = ({
  title,
  priority = null,
  type = ETypeCard.normal,
  isCheck = false,
  handleIssue,
}) => {
  let cardEditorContent;
  switch (type) {
    case ETypeCard.normal:
      cardEditorContent = (
        <div>
          <img
            className="card-cred"
            src={Edit}
            alt="edit"
            onClick={() => handleIssue(EHandleIssue.edit)}
          />
          <img
            className="card-cred"
            src={Delete}
            alt="delete"
            onClick={() => handleIssue(EHandleIssue.delete)}
          />
        </div>
      );
      break;
    case ETypeCard.add:
      cardEditorContent = (
        <img
          className="card-cred"
          src={Add}
          alt="add"
          onClick={() => handleIssue(EHandleIssue.add)}
        />
      );
      break;
    case ETypeCard.remove:
      cardEditorContent = (
        <img
          className="card-cred"
          src={Remove}
          alt="remove"
          onClick={() => handleIssue(EHandleIssue.remove)}
        />
      );
      break;
  }

  return (
    <div className="card">
      {isCheck && <div className="card__check"></div>}
      <div className="card-data">
        <p
          className="text card-data__name"
          onClick={() => handleIssue(EHandleIssue.show)}
        >
          {title}
        </p>
        <p className="text text-position card-data__position">{priority}</p>
      </div>
      <div className="card-editor">{cardEditorContent}</div>
    </div>
  );
};
