import React from 'react';
import { IssueCard } from '../../UI/Cards/IssueCard/IssueCard';
import { ETypeCard } from '../../UI/ui.module';
import { IIssuesGame } from '../game.module';

import './Issues.scss';

export const IssuesGame: React.FC<IIssuesGame> = ({
  issues,
  handleGameIssue,
  handleCheckedIssue,
  isDealer,
}) => {
  return (
    <div className="game-item">
      <div className="game-item__row game-item__issues">
        <div className="game-item__column">
          <div className="game-item__title">
            <h3 className="text text-ruda">Issues</h3>
          </div>
          {issues.map(({ title, priority, isChecked, id, mark }) => (
            <IssueCard
              key={id}
              title={title}
              idIssue={id}
              type={ETypeCard.remove}
              priority={`${priority} priority`}
              isCheck={isChecked}
              handleIssue={handleGameIssue}
              handleCheckedIssue={handleCheckedIssue}
              isDealer={isDealer!}
              mark={mark!}
            />
          ))}
          <IssueCard
            title="Create new Issue"
            type={ETypeCard.add}
            handleIssue={handleGameIssue}
            isDealer={isDealer!}
          />
        </div>
      </div>
    </div>
  );
};
