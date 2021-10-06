import React from 'react';
import { ERole } from '../../components.module';

import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { ScoreCard } from '../../UI/Cards/Score/Score';
import { IScore } from '../game.module';
import './Score.scss';

export const Score: React.FC<IScore> = ({
  marksCurrentTask,
  members,
  myId,
  dealerId,
  isPlayer,
  isTurnAuto,
  roundStatus,
}) => (
  <div className="score">
    <div className="score__row">
      <div className="game-item__column">
        <div className="game-item__title">
          <h3 className="text text-ruda">Score:</h3>
        </div>
        {members?.map(({ id, role }) => {
          if (role === ERole.player || (role === ERole.dealer && isPlayer)) {
            return (
              <ScoreCard
                key={id}
                scoreType={
                  marksCurrentTask.find(({ idUser }) => idUser === id)
                    ?.scoreType
                }
                number={
                  marksCurrentTask.find(({ idUser }) => idUser === id)?.mark
                }
                roundStatus={roundStatus}
                isTurnAuto={isTurnAuto}
              />
            );
          }
        })}
      </div>
      <div className="game-item__column">
        <div className="game-item__title">
          <h3 className="text text-ruda">Players:</h3>
        </div>
        {members?.map(({ id, firstName, lastName, jobTitle, role }) => {
          if (role === ERole.player || (role === ERole.dealer && isPlayer)) {
            return (
              <MemberCard
                key={id}
                isMyCard={myId === id}
                firstName={firstName}
                lastName={lastName}
                position={jobTitle}
                isSmall={true}
                isRemove={id !== dealerId}
              />
            );
          }
        })}
      </div>
    </div>
    <div className="game-item__column">
      <div className="game-item__title">
        <h3 className="text text-ruda">Observers:</h3>
      </div>
      {members?.map(({ id, firstName, lastName, jobTitle, role }) => {
        if (role === ERole.observer || (role === ERole.dealer && !isPlayer)) {
          return (
            <MemberCard
              key={id}
              isMyCard={myId === id}
              firstName={firstName}
              lastName={lastName}
              position={jobTitle}
              isSmall={true}
              isRemove={id !== dealerId}
            />
          );
        }
      })}
    </div>
  </div>
);
