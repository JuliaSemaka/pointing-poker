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
  handleStopGame,
}) => (
  <div className="game-item">
    <div className="game-item__title">
      <h3 className="text text-ruda">{title}</h3>
    </div>
    <div className="game-item__row">
      <div className="scram-master">
        <p className="text text-ruda text-ruda-small">Scram master:</p>
        <MemberCard
          firstName={dealerData.firstName}
          lastName={dealerData.lastName}
          position={dealerData.jobTitle}
          isMyCard={isDealer}
        />
      </div>
      {!isDealer && <RoundTime />}
      <Button
        style={EButtonStyle.light}
        text={isDealer ? 'Stop Game' : 'Exit'}
        handleClick={() => handleStopGame(isDealer ? 'Stop Game' : 'Exit')}
      />
    </div>
  </div>
);
