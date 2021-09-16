import React from 'react';
import { IssueCard } from '../../UI/Cards/IssueCard/IssueCard';
import { ETypeCard } from '../../UI/ui.module';

export const Issues: React.FC = () => (
  <div className="lobby-item">
    <div className="lobby-item__title">
      <h3 className="text text-ruda">Issues:</h3>
    </div>
    <div className="lobby-item__wrap">
      <IssueCard title="Issue 505" priority="Low priority" />
      <IssueCard title="Create new Issue" type={ETypeCard.add} />
    </div>
  </div>
);
