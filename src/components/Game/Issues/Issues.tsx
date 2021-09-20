import React from 'react';
import { Button } from '../../UI/Button/Button';
import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { IssueCard } from '../../UI/Cards/IssueCard/IssueCard';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import { EButtonStyle, ETypeCard } from '../../UI/ui.module';
import { EGameStatus, IIssues } from '../game.module';

import './Issues.scss';

export const IssuesGame: React.FC<IIssues> = ({
  isDealer,
  handleRunRound,
  gameStatus,
  issues,
  handleGameIssue,
  cardsValues,
}) => (
  <div className="game-item">
    <div className="game-item__row game-item__issues">
      <div className="game-item__column">
        <div className="game-item__title">
          <h3 className="text text-ruda">Issues</h3>
        </div>
        {issues.map((item, index) => (
          <IssueCard
            key={index}
            title={item.title}
            type={ETypeCard.remove}
            priority={`${item.priority} priority`}
            isCheck={item.isChecked}
            handleIssue={handleGameIssue}
          />
        ))}
        <IssueCard
          title="Create new Issue"
          type={ETypeCard.add}
          handleIssue={handleGameIssue}
        />
      </div>
      {isDealer && (
        <div className="game-item__column game-item__control">
          <RoundTime />
          <Button
            style={EButtonStyle.dark}
            text={
              gameStatus === EGameStatus.created ? 'Run Round' : 'Restrt Round'
            }
            handleClick={() =>
              handleRunRound(
                gameStatus === EGameStatus.created
                  ? 'Run Round'
                  : 'Restrt Round'
              )
            }
          />
          {gameStatus !== EGameStatus.created && (
            <Button
              style={EButtonStyle.dark}
              text={'Next ISSUE'}
              handleClick={() => handleRunRound('Next ISSUE')}
            />
          )}
        </div>
      )}
    </div>
    {!isDealer && (
      <div className="game-item__cards">
        {cardsValues.map((item, index) => (
          <GameCard
            key={index}
            scoreType={item.scoreType}
            number={item.number}
          />
        ))}
      </div>
    )}
  </div>
);
