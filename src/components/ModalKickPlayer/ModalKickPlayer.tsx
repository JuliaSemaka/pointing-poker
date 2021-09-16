import React from 'react';

import { Button } from '../UI/Button/Button';
import { EButtonStyle, IModalKickPlayer } from '../UI/ui.module';
import './ModalKickPlayer.scss';

export const ModalKickPlayer: React.FC<IModalKickPlayer> = ({ playerName }) => {
  const func = () => {
    const a = 5;
  };

  return (
    <div className="kick-player">
      <h2 className="text text-title">Kick player?</h2>
      <p className="text text-ruda">
        Are you really want to remove player {playerName} from game session?
      </p>
      <div className="kick-player__block">
        <Button text="Yes" clickButton={func} />
        <Button text="No" clickButton={func} style={EButtonStyle.light} />
      </div>
    </div>
  );
};
