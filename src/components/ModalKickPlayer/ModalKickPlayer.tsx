import React from 'react';

import { Button } from '../UI/Button/Button';
import { ModalWindow } from '../UI/ModalWindow/ModalWindow';
import { EButtonStyle, IModalKickPlayer } from '../UI/ui.module';
import './ModalKickPlayer.scss';

export const ModalKickPlayer: React.FC<IModalKickPlayer> = ({
  playerName,
  actionKickButton,
  authorKick = null,
}) => {
  return (
    <ModalWindow handleClick={actionKickButton}>
      <div className="kick-player">
        {!authorKick ? (
          <>
            <h2 className="text text-title">Kick player?</h2>
            <p className="text text-ruda">
              Are you really want to remove player
              <span className="text-dark-green"> {playerName} </span>
              from game session?
            </p>{' '}
          </>
        ) : (
          <>
            <h2 className="text text-title">Kick</h2>
            <p className="text text-kick">
              <span className="text-dark-green">{authorKick} </span>
              want to kick member
              <span className="text-dark-green"> {playerName}</span>. Do you
              agree with it?
            </p>
          </>
        )}
        <div className="kick-player__block">
          <Button text="Yes" clickButton={() => actionKickButton(true)} />
          <Button
            text="No"
            clickButton={() => actionKickButton(false)}
            style={EButtonStyle.light}
          />
        </div>
      </div>
    </ModalWindow>
  );
};
