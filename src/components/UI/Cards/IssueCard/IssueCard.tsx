import React from 'react';

import { ETypeCard, IIssueCard } from '../../ui.module';
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
}) => {
  const cardEditorContent = () => {
    switch (type) {
      case ETypeCard.normal:
        return (
          <div>
            <img className="card-cred" src={Edit} alt="edit" />
            <img className="card-cred" src={Delete} alt="delete" />
          </div>
        );
      case ETypeCard.add:
        return <img className="card-cred" src={Add} alt="add" />;
      case ETypeCard.remove:
        return <img className="card-cred" src={Remove} alt="remove" />;
    }
  };

  return (
    <div className="card">
      {isCheck && (
        <div className="card__check">
        </div>
      )}
      <div className="card-data">
        <p className="text card-data__name">{title}</p>
        <p className="text text-position card-data__position">{priority}</p>
      </div>
      <div className="card-editor">{cardEditorContent()}</div>
    </div>
  );
};
