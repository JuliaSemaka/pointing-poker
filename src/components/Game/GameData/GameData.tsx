import React from 'react';

import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import { EButtonStyle } from '../../UI/ui.module';
import { IGameData } from '../game.module';

export const GameDataGame: React.FC<IGameData> = ({
  isDealer,
  title,
  dealerData,
  handleGameStopGame,
  handleGameExit,
}) => {
  const { firstName, lastName, jobTitle } = dealerData;
  return (
    <div className="game-item">
      <div className="game-item__title">
        <h3 className="text text-ruda">{title}</h3>
      </div>
      <div className="game-item__row">
        <div className="scram-master">
          <p className="text text-ruda text-ruda-small">Scram master:</p>
          <MemberCard
            firstName={firstName}
            lastName={lastName}
            position={jobTitle}
            isMyCard={isDealer}
          />
        </div>
        {!isDealer && <RoundTime minute="2" seconds="0" />}
        <Button
          style={EButtonStyle.light}
          text={isDealer ? 'Stop Game' : 'Exit'}
          handleClick={isDealer ? handleGameStopGame : handleGameExit}
        />
      </div>
    </div>
  );
};
