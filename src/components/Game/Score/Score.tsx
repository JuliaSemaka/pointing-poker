import React from 'react';

import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { ScoreCard } from '../../UI/Cards/Score/Score';
import { IScore } from '../game.module';
import './Score.scss';

export const Score: React.FC<IScore> = ({
  marksCurrentTask,
  members,
  myId,
  dealerId,
}) => (
  <div className="score">
    <div className="game-item__row">
      <div className="game-item__column">
        <div className="game-item__title">
          <h3 className="text text-ruda">Score:</h3>
        </div>
        {members?.map(({ id }) => (
          <ScoreCard
            key={id}
            scoreType={
              marksCurrentTask.find(({ idUser }) => idUser === id)?.scoreType
            }
            number={marksCurrentTask.find(({ idUser }) => idUser === id)?.mark}
          />
        ))}
      </div>
      <div className="game-item__column">
        <div className="game-item__title">
          <h3 className="text text-ruda">Players:</h3>
        </div>
        {members?.map(({ id, firstName, lastName, jobTitle }) => (
          <MemberCard
            key={id}
            isMyCard={myId === id}
            firstName={firstName}
            lastName={lastName}
            position={jobTitle}
            isSmall={true}
            isRemove={id !== dealerId}
          />
        ))}
      </div>
    </div>
  </div>
);
