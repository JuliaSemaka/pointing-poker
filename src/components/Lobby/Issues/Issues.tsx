import { title } from 'process';
import React from 'react';
import { IssueCard } from '../../UI/Cards/IssueCard/IssueCard';
import { ETypeCard, IIssues } from '../../UI/ui.module';

export const Issues: React.FC<IIssues> = ({ issues, handleIssue }) => (
  <div className="lobby-item">
    <div className="lobby-item__title">
      <h3 className="text text-ruda">Issues:</h3>
    </div>
    <div className="lobby-item__wrap">
      {issues.map(({ title, id, priority }) => (
        <IssueCard
          key={id}
          title={title}
          priority={`${priority} priority`}
          handleIssue={handleIssue}
          idIssue={id}
        />
      ))}
      <IssueCard
        title="Create new Issue"
        type={ETypeCard.add}
        handleIssue={handleIssue}
      />
    </div>
  </div>
);
