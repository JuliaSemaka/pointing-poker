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
}) => (
  <div className="card">
    <div className="card-data">
      <p className="text card-data__name">{title}</p>
      <p className="text text-position card-data__position">{priority}</p>
    </div>
    <div className="card-editor">
      {type === ETypeCard.normal && (
        <div>
          <img className="card-cred" src={Edit} alt="edit" />
          <img className="card-cred" src={Delete} alt="delete" />
        </div>
      )}
      {type === ETypeCard.add && (
        <img className="card-cred" src={Add} alt="add" />
      )}
      {type === ETypeCard.remove && (
        <img className="card-cred" src={Remove} alt="remove" />
      )}
    </div>
  </div>
);
